import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function Navbar ({ quoteCount }) {
    //Control mobile menu open/close
    const [menuOpen, setMenuOpen] = useState(false);

    //Detect if user scolled down down(to add shadow to navbar)
    const [scrolled, setScrolled] = useState(false);

    //useRouter lets us know which page we're on
    const router = useRouter();

    //Listen to scroll events
    useEffect(() => {
        const handleScroll = () => setScrolled (window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // "clean up" - removes this listener when component is gone
    }, []);

    //Close mobile menu when user navigate to a new page
    useEffect(() => {
    const timer = setTimeout(() => {
        setMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer); // cleanup the timer
}, [router.pathname]);

    //Nav links defined as an array - easy to add more later
    const navLinks = [
        {label: 'Products', href: '/products'},
        {label: 'About', href: '/about'},
        {label: 'Contact', href: '/contact'},
    ]

     return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* ── Logo ── */}
        <Link href="/" className="navbar__logo">
          <span className="logo-accent">Happy</span> Boy
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar__link ${router.pathname === link.href ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Quote Button ── */}
        <div className="navbar__actions">
          <Link href="/quote" className="navbar__quote-btn">
            {/* Cart icon using pure CSS */}
            <span className="cart-icon">🛒</span>
            <span>Quote</span>
            {/* Badge: only shows if there are items in the quote */}
            {quoteCount > 0 && (
              <span className="quote-badge">{quoteCount}</span>
            )}
          </Link>

          {/* ── Hamburger Button (mobile only) ── */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* 3 lines that animate into X */}
            <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'ham-line--open' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="mobile-link">
            {link.label}
          </Link>
        ))}
        <Link href="/quote" className="mobile-link mobile-link--quote">
          🛒 Quote {quoteCount > 0 && `(${quoteCount})`}
        </Link>
      </div>
    </header>
  );
}