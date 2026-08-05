import { brands } from '../lib/data';

export default function BrandsSection() {
    return (
        <section className="brands">
            <div className="container">

                <p className="brands__label">Brands We Carry</p>

                {/**Scrolling strip of brands names */}
                <div className="brands__track">

                    {/**We duplicate the list so the scroll loop is seamless */}

                    {[...brands, ...brands].map((brand, index) => (
                        <span key={index} className="brands__item">
                            {brand.name}
                            <span className="brands__dot">●</span>
                        </span>
                    ))}
                </div>
                
            </div>
        </section>
    );
}