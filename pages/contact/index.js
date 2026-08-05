// pages/contact/index.js
// Contact info cards + contact form

import { useState } from 'react';

// Contact info cards data
const contactCards = [
  {
    id: 1,
    icon: '📞',
    title: 'Phone',
    lines: ['(905) 477-9338'],
    link: { href: 'tel:9054779338', label: 'Call us' },
  },
  {
    id: 2,
    icon: '✉️',
    title: 'Email',
    lines: ['info@djdist.ca'],
    link: { href: 'mailto:info@djdist.ca', label: 'Send email' },
  },
  {
    id: 3,
    icon: '📍',
    title: 'Address',
    lines: ['247 Idema Road', 'Markham, Ontario', 'Canada L3R 1B1'],
    link: {
      href: 'https://www.google.com/maps/dir/?api=1&destination=247+Idema+Road+Markham+Ontario',
      label: 'Get directions',
    },
  },
  {
    id: 4,
    icon: '🕐',
    title: 'Hours',
    lines: ['Mon – Fri: 9:00am – 5:30pm', 'Sat – Sun: Closed'],
    link: null,
  },
];

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name:    '',
    email:   '',
    company: '',
    message: '',
  });

  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = 'Name is required';
    if (!formData.email.trim())   newErrors.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setLoading(true);

    // Simulate sending — Phase 7 replaces with real API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* ── Page Header ── */}
      <div className="products-header">
        <div className="container">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="products-header__title">Contact Us</h1>
          <p className="products-header__sub">
            Have a question about wholesale pricing or our products?
            We would love to hear from you.
          </p>
        </div>
      </div>

      {/* ── Info Cards ── */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <div key={card.id} className="contact-card">
                <span className="contact-card__icon">{card.icon}</span>
                <h3 className="contact-card__title">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="contact-card__line">{line}</p>
                ))}
                {card.link && (
                  <a
                    href={card.link.href}
                    className="contact-card__link"
                    target={card.link.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {card.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrap">

            {/* Left: text */}
            <div className="contact-form-left">
              <p className="section-eyebrow">Send a Message</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                We will Get Back<br />To You Shortly
              </h2>
              <p className="contact-form-left__text">
                Whether you are an existing wholesale partner or a new
                business looking to stock Asian food products, we are
                happy to answer any questions.
              </p>
              <p className="contact-form-left__text">
                For wholesale quote requests, please use our{' '}
                <strong>Quote Basket</strong> feature on the Products page
                — it helps us give you accurate pricing faster.
              </p>
            </div>

            {/* Right: form */}
            <div className="contact-form-right">
              {submitted ? (
                // Success state
                <div className="contact-success">
                  <p className="contact-success__icon">✅</p>
                  <h3 className="contact-success__title">Message Sent!</h3>
                  <p className="contact-success__text">
                    Thank you for reaching out. We will reply to{' '}
                    <strong>{formData.email}</strong> as soon as possible.
                  </p>
                </div>
              ) : (
                // Form
                <form className="quote-form" onSubmit={handleSubmit}>

                  {/* Name + Company row */}
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="form-error">{errors.name}</p>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="form-label">Company (optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="ABC Grocery Ltd."
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="john@abcgrocery.com"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-field">
                    <label className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                      placeholder="How can we help you?"
                      rows={5}
                    />
                    {errors.message && (
                      <p className="form-error">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary quote-form__submit"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
    </section>

    </div>
  );
}