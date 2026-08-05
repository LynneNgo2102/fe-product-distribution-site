// components/ProductsHeader.js
// The black banner at the top of the products page
// with the title and search bar

export default function ProductsHeader({ searchTerm, setSearchTerm }) {
  return (
    <div className="products-header">
      <div className="container">

        <p className="section-eyebrow">Wholesale Catalog</p>
        <h1 className="products-header__title">Our Products</h1>
        <p className="products-header__sub">
          Browse our full range of Asian food products.
          Add items to your quote basket and we will send pricing by email.
        </p>

        {/* Search bar — value and onChange come from parent via props */}
        <div className="search-bar">
          <span className="search-bar__icon">🔍</span>
          <input
            type="text"
            placeholder="Search by product name or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar__input"
          />
          {searchTerm && (
            <button
              className="search-bar__clear"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>

      </div>
    </div>
  );
}