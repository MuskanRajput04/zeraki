import React, { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { BagDrawer, SearchOverlay, Toast } from './components/Drawers'
import { ShopProvider } from './store'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout, { OrderDone } from './pages/Checkout'
import { SignIn, SignUp, Forgot, AccountHome } from './pages/Account'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/commerce.css'
import './styles/enhance.css'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' }) }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="shell section" style={{ textAlign: 'center' }}>
      <p className="eyebrow">404</p>
      <h1 className="h1" style={{ margin: '.75rem 0 1rem' }}>That page slipped off the tray.</h1>
      <p className="lead" style={{ marginInline: 'auto' }}>Let us get you back to something sparkly.</p>
      <p style={{ marginTop: '2rem' }}><Link to="/" className="btn">Back to home</Link></p>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ShopProvider>
        <ScrollTop />
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/c/:cat" element={<Collection />} />
            <Route path="/collection/:key" element={<Collection />} />
            <Route path="/mood/:mood" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:id" element={<OrderDone />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/account" element={<AccountHome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BagDrawer />
        <SearchOverlay />
        <Toast />
      </ShopProvider>
    </HashRouter>
  )
}
