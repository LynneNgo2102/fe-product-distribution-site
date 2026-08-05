// pages/about/index.js
// Company info, brands, location and hours

import { brands } from '../../lib/data';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero Banner ── */}
      <div className="about-hero">
        <div className="container">
          <p className="section-eyebrow">Who We Are</p>
          <h1 className="about-hero__title">
            Bringing Asia Best<br />
            <span className="about-hero__accent">To Your Shelves</span>
          </h1>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">

            {/* Left: text */}
            <div className="about-story__text">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                A Trusted Partner for Wholesale Asian Food
              </h2>
              <p className="about-story__body">
                DJ Distributing is a wholesale food distributor specializing
                in premium Asian food products from Thailand, Vietnam, Taiwan,
                China and the United States of America.
              </p>
              <p className="about-story__body">
                We supply retailers, grocery stores, and food service businesses
                across Canada with high-quality branded products at competitive
                wholesale prices.
              </p>
              <p className="about-story__body">
                Our <strong>Add to Quote</strong> system makes ordering
                simple — browse our catalog, add what you need, submit your
                request, and we will reply with full pricing and availability
                within one business day.
              </p>

              {/* Stats row */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat__number">15+</span>
                  <span className="about-stat__label"> Brands Carried</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">5</span>
                  <span className="about-stat__label"> Countries of Origin</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat__number">1</span>
                  <span className="about-stat__label"> Business Day Response</span>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="about-story__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Asian food products"
                className="about-story__img"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Brands We Carry ── */}
      <section className="about-brands">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Portfolio</p>
            <h2 className="section-title">Brands We Carry</h2>
            <p className="section-subtitle">
              We are proud distributors and importers of these
              trusted Asian food brands.
            </p>
          </div>

          <div className="about-brands__grid">
            {brands.map((brand) => (
              <div key={brand.id} className="about-brand-card">
                <span className="about-brand-card__name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location + Hours ── */}
      <section className="about-location">
        <div className="container">
          <div className="about-location__grid">

            {/* Left: info */}
            <div className="about-location__info">
              <p className="section-eyebrow">Find Us</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Our Location
              </h2>

              {/* Address */}
              <div className="location-block">
                <span className="location-block__icon">📍</span>
                <div>
                  <h3 className="location-block__title">Address</h3>
                  <p className="location-block__text">
                    247 Idema Road<br />
                    Markham, Ontario<br />
                    Canada L3R 1B1
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="location-block">
                <span className="location-block__icon">🕐</span>
                <div>
                  <h3 className="location-block__title">Business Hours</h3>
                  <div className="hours-table">
                    <div className="hours-row">
                      <span>Monday – Friday</span>
                      <span>9:00am – 5:30pm</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span className="hours-closed">Closed</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span className="hours-closed">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone + Email */}
              <div className="location-block">
                <span className="location-block__icon">📞</span>
                <div>
                  <h3 className="location-block__title">Contact</h3>
                  <p className="location-block__text">
                    <a href="tel:9054779338">(905) 477-9338</a><br />
                    <a href="mailto:info@djdist.ca">info@djdist.ca</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Google Map embed */}
            <div className="about-location__map">
              <iframe
                title="DJ Distributing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.909897!2d-79.3467!3d43.8468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5e3b3b3b3b3%3A0x0!2s247+Idema+Rd%2C+Markham%2C+ON!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}