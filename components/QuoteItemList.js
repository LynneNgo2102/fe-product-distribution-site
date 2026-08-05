// Show each product in the quote basket 
// with increase, decrease, and remove controls

export default function QuoteItemList({ quoteItems, setQuoteItems }) {

    //Increase qty of one item by 1


    const increaseQty = (id) => {
        setQuoteItems((prev) =>
        prev.map((item) =>
        item.id === id? {...item, qty: item.qty + 1 }:item
            )
        );
    };
    //Decrease qty - if qty reaches 0, remove the item entirely
    const decreaseQty = (id) => {
        setQuoteItems((prev) =>
        prev.map((item) =>
        item.id === id? {...item, qty: item.qty - 1}:item
             ).filter((item) => item.qty > 0) //remove if qty hits 0
        );
    };
    //Remove item completely regardless of qty
    const removeItem = (id) => {
        setQuoteItems((prev) => prev.filter((item) => item.id !== id));

    };

    return (
        <div className="quote-list">
            {/**Column headers */}
            <div className="quote-list__header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Remove</span>
            </div>
            {/**One row per item */}
            {quoteItems.map((item) =>(
                <div key={item.id} className="quote-item">
                    {/**Product image + info */}
                    <div className="quote-item__info">
                        <div className="quote-item__img-wrap">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="quote-item__img"
                            />
                        </div>
                        <div className="quote-item__details">
                            <p className="quote-item__brand">{item.brand}</p>
                            <h3 className="quote-item__name">{item.name}</h3>
                            <p className="quote-item__origin">{item.origin}</p>

                        </div>
                    </div>
                {/**Qty controls: minus - number - plus*/}
                <div className="quote-item__qty">
                    <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                    aria-label="Decrease quantity">
                        −
                    </button>
                    <span className="qty-number">{item.qty}</span>

                    <button
                        className="qty-btn"
                        onClick={() => increaseQty(item.id)}
                        aria-label="Increase quantity">
                        +
                    </button>
                </div>
                {/**Remove button */}
                <button
                className="quote-item__remove"
                onClick={() => removeItem(item.id)}
                aria-label="Remove item">  ✕ </button>
            </div>
            ))}

        </div>
    )
}