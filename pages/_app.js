import Layout from '../components/Layout';
import '../styles/globals.css';
import { useState } from 'react';

// _app.js is the ROOT of your entire Next.js app.
// Every page gets wrapped by this component automatically.

export default function App({ Component, pageProps }) {

  // quoteItems will hold products the user added to their quote
  // We store it here (at the root) so ALL pages can access it
  const [quoteItems, setQuoteItems] = useState([]);

  // Function to add a product to the quote
  const addToQuote = (product) => {
    setQuoteItems((prev) => {
      // Check if product is already in the list
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // If yes, just increase the quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      // If no, add it with qty: 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <Layout quoteCount={quoteItems.length}>
      {/* 
        We pass addToQuote and quoteItems to every page via pageProps.
        This way any page can call addToQuote() when user clicks a button.
      */}
      <Component
        {...pageProps}
        quoteItems={quoteItems}
        addToQuote={addToQuote}
        setQuoteItems={setQuoteItems}
      />
    </Layout>
  );
}