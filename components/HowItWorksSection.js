const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Browse Products',
    description:
      'Explore our full catalog of Asian food products. Filter by brand, category, or country of origin.',
  },
  {
    number: '02',
    icon: '🛒',
    title: 'Add to Quote',
    description:
      'Select the products and quantities you need. Add them to your Quote basket — no account required.',
  },
  {
    number: '03',
    icon: '📧',
    title: 'Receive Your Quote',
    description:
      'Submit your request and we\'ll reply by email with pricing, availability, and order confirmation.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="hiw">
      <div className="container">

        <div className="section-header">
          <p className="section-eyebrow">Simple Process</p>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            We make wholesale ordering straightforward for retailers
            and food service businesses.
          </p>
        </div>

        <div className="hiw__grid">
          {steps.map((step) => (
            <div key={step.number} className="hiw__card">
              <span className="hiw__number">{step.number}</span>
              <div className="hiw__icon">{step.icon}</div>
              <h3 className="hiw__title">{step.title}</h3>
              <p className="hiw__desc">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}