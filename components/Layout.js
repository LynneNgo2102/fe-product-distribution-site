import Navbar from './Navbar';
import Footer from './Footer';

// "children" = whatever page content gets passed in
export default function Layout({ children, quoteCount }) {
  return (
    <>
      <Navbar quoteCount={quoteCount} />

      {/* 
        padding-top pushes page content below the fixed navbar.
        min-height ensures footer always stays at the bottom.
      */}
      <main style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh' }}>
        {children}
      </main>

      <Footer />
    </>
  );
}