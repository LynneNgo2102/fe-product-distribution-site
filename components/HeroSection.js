import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="hero">
            {/** Dark overlay on top of backgroud image */}
            <div className="hero__overlay"/>

            <div className="hero__content container">
                <p className="hero__eyebrow"> Wholesale Asian Food Distributor </p>
                <h1 className="hero__title">
                    Quality Products. <br/>
                    Trusted Brands.<br/>
                    <span className="hero__title--accent">Direct to you</span> 
                </h1>
                <p className="hero__subtitle">
                    Supplying retailers and food service businesses across Canada
                    with premium Asian food products from Thailand, Vietnam,
                    Taiwan, China and the USA.
                </p>

                <div className='hero__cta'>
                    <Link href="/products" className="btn-primary">
                    Browse Products
                    </Link> 

                    <Link href="/about" className='hero__link'>
                    Learn how it works →
                    </Link>
                </div>

            </div>

        </section>
    )
}