//The quote basket page - shows items + form side by side
//quoteItems and setQuoteItems come from _app.js

import Link from 'next/link';
import QuoteItemList from "@/components/QuoteItemList";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage({ quoteItems, setQuoteItems }) {
    //Called by QuoteForm after successful submission
    //Clears the basket
    const handleSubmitSuccess = () => {
        setQuoteItems([])
    };

    //Empty state : no items in basket
    if(quoteItems.length === 0) {
        return (
            <div className='quote-empty'>
                <div className='container'>
                    <div className='quote-empty__inner'>
                        <p className='quote-empty__icon'>🛒</p>
                        <h1 className='quote-empty__title'> Your quote basket is empty</h1>
                        <p className='quote-empty__text'>
                            Browse our product catalog and click{' '}
                             <strong>+ Add to Quote</strong> on any product to get started.
                        </p>
                        <Link href="/products" className='btn-primary'>
                        Browse Products
                        </Link>
                    </div>
                </div>
                </div>
        );
    }
    //Filled state : items in basket
    return (
        <div className='quote-page'>
            {/**Page header */}
            <div className='products-header'>
                <div className='container'>
                    <p className='section-eyebrow'>Wholesale Ordering</p>
                    <h1 className='products-header__title'> Your Quote Basket</h1>
                    <p className='product-header__sub'>
                        Review your selected products and submit your details.
                        We will reply with pricing withion 1 business day.
                    </p>
                
                </div>
            </div>
            <div className='container'>
              <div className='quote-layout'>
                 {/**Left: product List */}
                 <div className='quote-left'>
                    <div className='quote-left__header'>
                        <h2 className='quote-left__title'>
                            Selected Products
                            <span className='quote-left__count'>
                                {quoteItems.length} item{quoteItems.length !== 1 ? 's' : ''}
                            </span>
                        </h2>

                        {/**Let user go back and add more */}
                        <Link href="/products" className='quote-left__add-more'>
                        + Add more product
                        </Link>
                    </div>

                    {/**Item list with qty controls */}
                    <QuoteItemList
                    quoteItems={quoteItems}
                    setQuoteItems={setQuoteItems}
                    />
                    {/**Summary box */}
                    <div className='quote-summary'>
                        <div className='quote-summary__row'>
                            <span>Total items</span>
                            <strong>
                                {quoteItems.reduce((sum, item) => sum + item.qty, 0)} units
                            </strong>
                        </div>
                        <div className='quote-summary__row'>
                            <span>Pricing</span>
                            <strong>Provide by email</strong>
                        </div>
                        <div className='quote-summary__row'>
                            <span>Response time</span>
                            <strong>Within 1 business day</strong>
                        </div>
                    </div>
               </div>  
               {/**Right: contact form */}
               <div className='quote-right'>
                <QuoteForm
                quoteItems={quoteItems}
                onSubmitSuccess={handleSubmitSuccess}
                />
                </div> 
                </div>
            </div>
        </div>
    );
}

