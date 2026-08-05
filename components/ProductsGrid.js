//Results count bar, active filter tags, product grid, empty state

import ProductCard from './ProductCard'

export default function ProductsGrid({
    filteredProducts,
    totalProducts,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    activeBrand,
    setActiveBrand,
    hasActiveFilters,
    clearFilters,
    setSidebarOpen,
    addToQuote,
}) {
    return (
        <div className='product-main'>
            {/**results bar */}
            <div className='results-bar'>
                <p className='results-bar__count'>
                    Showing<strong>{filteredProducts.length}</strong> of {''}
                    <strong>{totalProducts}</strong> products
                </p>

                {/*Mobile filter toggle-open sidebar drawer*/}
                <button
                className='results-bar__filter-btn'
                onClick={() => setSidebarOpen(true)}>
                    ☰ Filters
                    {hasActiveFilters && <span className="filter-dot" />}

                </button>
            </div>
            {/**Active filter and tags */}
            {hasActiveFilters && (
                <div className='filter-tags'>
                    {activeCategory && (
                        <span className='filter-tag'>
                            {activeCategory}
                            <button onClick={() => setActiveCategory('')}>✕</button>
                        </span>
                    )}
                    {activeBrand && (
                        <span className='filter-tag'>
                            {activeBrand}
                            <button onClick={() => setActiveBrand('')}>✕</button>
                        </span>
                    )}
                    {searchTerm && (
                        <span className='filter-tag'>
                             {searchTerm}
                            <button onClick={() => setSearchTerm('')}>✕</button>
                        </span>
                    )}
                </div>
            )}
          
           {/* Grid or empty state */}
                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        addToQuote={addToQuote}
                        />
                    ))}
                    </div>
                ) : (
                    <div className="empty-state">
                    <p className="empty-state__icon">🔍</p>
                    <h3 className="empty-state__title">No products found</h3>
                    <p className="empty-state__text">
                        Try adjusting your search or filters.
                    </p>
                    <button className="btn-primary" onClick={clearFilters}>
                        Clear Filters
                    </button>
                    </div>
                )}

                </div>
            );
         }