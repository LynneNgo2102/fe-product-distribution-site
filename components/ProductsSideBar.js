//The filter panel - categories, brand, clear button
//On mobile this slides in as a drawer

import { categories, brands } from '../lib/data'

export default function ProductSidebar ({
    activeCategory,
    setActiveCategory,
    activeBrand,
    setActiveBrand,
    hasActiveFilter,
    clearFilters,
    sidebarOpen,
    setSidebarOpen,

}) {
    return (
        <>
        {/*Dark overlat behinde sidebar on mobile*/}
        {sidebarOpen &&(
            <div
                className='sidebar-overlat'
                onClick={() => setSidebarOpen(false)}
            />
        )}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
            {/**Header */}
            <div className='sidebar__header'>
                <h2 className='sidebar__title'>Filters</h2>
                  {/* Mobile close button */}
                        <button
                            type='button'
                            className='sidebar__close'
                            onClick={() => setSidebarOpen(false)}
                            aria-label='Close filters'
                        >
                            ✕
                        </button>
                {hasActiveFilter && (
                    <button className='sidebar__clear' onClick={clearFilters}>
                        Clear all
                    </button>
                )}
            </div>
            {/**Categpry filter */}
            <div className='sidebar__section'>
                <h3 className='sidebar__section-title'>Category</h3>
                <ul className='sidebar__list'>
                    <li>
                        <button
                        className={`sidebar__item ${activeCategory === '' ? 'sidebar__item--active' : ''}`}
                        onClick={() => setActiveCategory('')}>
                            All Categories
                        </button>
                    </li>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                            className={`sidebar__item ${activeCategory === cat ? 'sidebar__item--active' : ''}`}
                            onClick={() => setActiveCategory(cat)}>
                                {cat}
                            </button>
                        </li>

                    ))}

                </ul>
            </div>
            {/**Brand Filter */}
            <div className='sidebar__section'>
                <h3 className='sidebar__section-title'>
                    Brand
                </h3>
                <ul className='sidebar__list'>
                    <li>
                        <button
                        className={`side__item ${activeBrand === '' ? 'sidebar__item__active' : ''}`}
                        onClick={() => setActiveBrand('')}
                        >All Brands
                        </button>
                    </li>
                    {brands.map((brand) => (
                        <li key={brand.id}>
                            <button
                            className={`sidebar__item ${activeBrand === brand.name ? 'sidebar__item-active' : ''}`}
                            onClick={() => setActiveBrand(brand.name)}
                            >
                                {brand.name}
                            </button>
                        </li>
                    ))}

                </ul>
            </div>

        </aside>
        </>
    );
}