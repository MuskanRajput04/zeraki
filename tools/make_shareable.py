"""
Build the shareable single-file version of the site.

The site normally loads its photography as separate .webp files from public/img.
For a link that can be handed to a client with no hosting — and no external
requests at all — this script bakes every photograph into the HTML as a data
URI, at a smaller size than the production set so the file stays light.

    npm run build:single          # 1. vite -> dist-single/index.html
    python tools/make_shareable.py  # 2. inline images -> artifact/zeraki.html

Requires Pillow:  pip install pillow
"""

import base64
import io
import os
import re
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_HTML = os.path.join(ROOT, 'dist-single', 'index.html')
OUT_DIR = os.path.join(ROOT, 'artifact')
OUT_HTML = os.path.join(OUT_DIR, 'zeraki.html')
IMG_ROOT = os.path.join(ROOT, 'public')

# Smaller than the production set: these are for viewing, not for retina print.
WIDTHS = {'img/p/': 470, 'img/e/': 820, 'img/b/': 1200}
QUALITY = {'img/p/': 68, 'img/e/': 72, 'img/b/': 66}


def shrink(rel_path):
    """Return a data: URI for one image, re-encoded smaller."""
    src = os.path.join(IMG_ROOT, rel_path.replace('/', os.sep))
    if not os.path.exists(src):
        return None
    prefix = rel_path[:6]          # img/p/ | img/e/ | img/b/
    w, q = WIDTHS[prefix], QUALITY[prefix]

    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    if im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=q, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode('ascii')


def main():
    if not os.path.exists(SRC_HTML):
        sys.exit('run `npm run build:single` first — dist-single/index.html not found')

    html = io.open(SRC_HTML, encoding='utf-8').read()

    # Strip the host-supplied wrapper: the artifact host provides <html>/<head>/<body>.
    head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
    body = re.search(r'<body>(.*?)</body>', html, re.S).group(1)
    keep = r'<title>.*?</title>|<link[^>]*fonts\.(?:googleapis|gstatic)\.com[^>]*>|<style[^>]*>.*?</style>|<script\b[^>]*>.*?</script>'
    parts = [m.group(0) for m in re.finditer(keep, head, re.S)]
    scripts = [p for p in parts if p.startswith('<script')]
    rest = [p for p in parts if not p.startswith('<script')]
    out = '\n'.join(rest) + '\n' + body.strip() + '\n' + '\n'.join(scripts) + '\n'

    # Inline every image the bundle references.
    paths = sorted(set(re.findall(r'img/[peb]/[A-Za-z0-9._-]+\.webp', out)))
    print(f'inlining {len(paths)} photographs...')
    done = missing = 0
    for rel in paths:
        uri = shrink(rel)
        if uri is None:
            print('  !! missing', rel)
            missing += 1
            continue
        out = out.replace('"' + rel + '"', '"' + uri + '"')
        done += 1

    left = re.findall(r'"img/[peb]/[^"]+\.webp"', out)
    os.makedirs(OUT_DIR, exist_ok=True)
    io.open(OUT_HTML, 'w', encoding='utf-8').write(out)

    mb = len(out.encode('utf-8')) / 1048576
    print(f'inlined {done}, missing {missing}, unreplaced refs {len(left)}')
    print(f'wrote {OUT_HTML}  ({mb:.2f} MB)')
    if mb > 15:
        print('WARNING: over 15 MB — lower WIDTHS/QUALITY above')


if __name__ == '__main__':
    main()
