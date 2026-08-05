import Link from 'next/link';
import { products } from '../lib/data';
import ProductCard from './ProductCard';


// addQuote is passed down from _app.js through the page

export default function FeaturedSection({ addToQuote }) {
    //Only show the first 4 products on homepage
    const featured = products.slice(0, 4);

    return(
        <section className="featured">

            <div className='container'>

                <div className='section-header'>
                    <p className='section-eyebrow'>Our Catalog</p>
                    <h2 className='section-title'>Featured Products</h2>
                    <p className="section-subtitle">
                      A selection from our wide range of Asian food products.
                      available for wholesale ordering

                    </p>
                </div>

                <div className="product-grid">
                    {featured.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    addToQuote={addToQuote}
                    />
                ))}
                </div>

                <div className="featured__more">
                <Link href="/products" className="btn-primary">
                    View All Products
                </Link>
                </div>

            </div>
            </section>
    );
}