//This file Only manages state and logic
//All the UI lives in the components above

import { useState, useMemo } from 'react';
import { products } from '../../lib/data'
import ProductsHeader from '@/components/ProductsHeader';
import ProductsSidebar from '@/components/ProductsSideBar';
import ProductsGrid from '@/components/ProductsGrid';

export default function ProductsPage({ addToQuote }) {

    //All filter state 
    //it's define here because ALL 3 child components need access to it.
    //We pass it down as props -this is "lifting state up"

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('');
    const [activeBrand, setActiveBrand] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState('');

    //Filtering logic
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = 
                searchTerm === '' ||
                product.name.toLowerCase().includes(searchLower) ||
                product.brand.toLocaleLowerCase().includes(searchLower);
            const matchesCategory =
                activeCategory === '' ||
                product.category === activeCategory;
            const matchesBrand =
                activeBrand === '' ||
                product.brand === activeBrand;

            return matchesSearch && matchesCategory && matchesBrand;
            

        });
    }, [searchTerm, activeCategory, activeBrand]);

    //Help value
    const hasActiveFilters = !!(searchTerm || activeCategory || activeBrand);
    
    const clearFilters = () => {
        setSearchTerm('');
        setActiveCategory('');
        setActiveBrand('');
    };

    return (
        <div className='products-page'>
            {/**Banner + search */}

            <ProductsHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div className='container'>
                <div className='products-layout'>
                    {/**Filter sidebar */}
                    <ProductsSidebar
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activeBrand={activeBrand}
                    setActiveBrand={setActiveBrand}
                    hasActiveFilters={hasActiveFilters}
                    clearFilters={clearFilters}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    />
                    {/**Result + product grid */}
                    <ProductsGrid
                    filteredProducts={filteredProducts}
                    totalProducts={products.length}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activeBrand={activeBrand}
                    setActiveBrand={setActiveBrand}
                    hasActiveFilters={hasActiveFilters}
                    clearFilters={clearFilters}
                    setSidebarOpen={setSidebarOpen}
                    addToQuote={addToQuote}
                    />

                </div>
            </div>

        </div>
    );


}