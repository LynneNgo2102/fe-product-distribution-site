import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className='footer__inner container'>
                {/* Column 1: Brand */}
                <div className='footer__col'>
                    <h3 className='footer__logo'>
                        <span className='logo-accent'>Happy </span>Boy
                    </h3>

                    <p className='footer__tagline'>
                        Asian food wholesale distributor serving retailers
                        and food service businessess across Canada
                    </p>
                </div>

                {/*Column 2: Quick Links */}
                <div className='footer__col'>
                    <h4 className='footer__heading'>Quick Links</h4>
                    <ul className='footer__list'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                {/* Column 3: Contact Info */}
                    <div className="footer__col">
                    <h4 className="footer__heading">Contact</h4>
                    <ul className="footer__list footer__list--info">
                        
                        <li>📞 <a href="tel:9054779338">(123) 456-7890</a></li>
                        <li>✉️ <a href="mailto:info@djdist.ca">info@.ca</a></li>
                    </ul>
                    </div>

                {/* Column 4: Hours */}
                    <div className="footer__col">
                    <h4 className="footer__heading">Hours</h4>
                    <ul className="footer__list footer__list--info">
                        <li>Mon – Fri: 9:00am – 5:30pm</li>
                        <li>Saturday: Closed</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    </div>

        </div>
            {/* Bottom bar */}
            <div className="footer__bottom">
                <div className="container">
                <p>© {currentYear} Happy Boy Distributing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}