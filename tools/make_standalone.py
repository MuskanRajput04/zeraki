"""
Build one self-contained .html you can double-click to open in any browser.

Unlike the shareable artifact build, this keeps the full <html>/<head>/<body>
document and ships a classic (non-module) script, so Chrome runs it straight
off the disk over file:// with no server and no CORS restrictions.

    npx vite build --config vite.standalone.config.js
    python tools/make_standalone.py

Output: C:/Users/<you>/Downloads/Zeraki-Website.html  (override with argv[1])
"""

import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_shareable import shrink  # same image downsizing rules

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'dist-standalone', 'index.html')
DEFAULT_OUT = os.path.join(os.path.expanduser('~'), 'Downloads', 'Zeraki-Website.html')


def main():
    if not os.path.exists(SRC):
        sys.exit('run `npx vite build --config vite.standalone.config.js` first')

    html = io.open(SRC, encoding='utf-8').read()

    # The bundle is already an IIFE, so drop the module/crossorigin attributes
    # and let the browser treat it as a classic script — that is what makes
    # file:// work. A classic inline script is NOT deferred, though, so it also
    # has to move out of <head> and down to the end of <body>, or it runs
    # before #root exists (React error #299).
    html = html.replace('<script type="module" crossorigin>', '<script>')
    html = re.sub(r'<link[^>]*rel="modulepreload"[^>]*>', '', html)

    m = re.search(r'<script>(?:(?!</script>).)*createRoot(?:(?!</script>).)*</script>', html, re.S)
    if not m:
        m = re.search(r'<script>(?:(?!</script>).){5000,}</script>', html, re.S)
    if not m:
        sys.exit('could not find the app script to relocate')
    app = m.group(0)
    html = html.replace(app, '', 1).replace('</body>', app + '\n</body>', 1)

    paths = sorted(set(re.findall(r'img/[peb]/[A-Za-z0-9._-]+\.webp', html)))
    print(f'inlining {len(paths)} photographs...')
    missing = 0
    for rel in paths:
        uri = shrink(rel)
        if uri is None:
            missing += 1
            continue
        html = html.replace('"' + rel + '"', '"' + uri + '"')

    left = re.findall(r'"img/[peb]/[^"]+\.webp"', html)
    out = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUT
    io.open(out, 'w', encoding='utf-8').write(html)
    print(f'missing {missing}, unreplaced refs {len(left)}')
    print(f'wrote {out}  ({len(html.encode("utf-8")) / 1048576:.2f} MB)')


if __name__ == '__main__':
    main()
