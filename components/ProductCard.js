//Components/ProductCard
//One single product card - reusable anywhere

export default function ProductCard({product, addToQuote}) {
    return (
        <div className="proudct-card">
            {/**Image */}
            <div className="product-card__img-wrap">
                <img
                src={product.image}
                alt={product.name}
                className="product-card__img"
                />
                {!product.inStock && (
                    <span className="product-card__badge">Out of Stock</span>
                )}
                {/**Origin tag on image */}
                <span className="product-card__origin-tag">
                   🌏 {product.origin}
                </span>
            </div>
            {/**Info */}
            <div className="product-card__body">
                <p className="product-card__brand">{product.brand}</p>
                <p className="product-card__name">{product.name}</p>
                <p className="product-card__category">{product.category}</p>
            </div>
            {/**Button */}
            <div className="product-card__footer">
                <button 
                className="product-card__btn" 
                disabled={!product.inStock}
                onClick={() => addToQuote(product)}>
                    {product.inStock ? 'Add to Quote' : 'Unavailable'}
                    </button>
            </div>
        </div>
    );
}