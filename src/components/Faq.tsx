import Eyebrow from "./Eyebrow"

export default function Faq() {
  const items = [
    [
      "Do you offer once-off and recurring services?",
      "Yes. Both are part of the ShineLux range, with available scheduling confirmed during enquiry.",
    ],
    [
      "Can I request particular rooms or tasks?",
      "Yes. Include your priorities so the proposed scope can be discussed clearly before booking.",
    ],
    [
      "Do you clean commercial properties?",
      "We welcome office, school and builders cleaning enquiries, subject to site requirements.",
    ],
    [
      "How do I get a price?",
      "Send your property and service details for a tailored quote based on your requested scope.",
    ],
    [
      "Do I need to supply products?",
      "Equipment and product arrangements should be confirmed when requesting your quote.",
    ],
    [
      "Are your products safe for staff and visitors?",
      "Yes. We use effective, responsibly chosen products and can align with your site's chemical policies or green requirements.",
    ],
    [
      "How do I book?",
      "Call 0435920515 or use our contact form. We'll propose facility.",
    ],
    [
      "Do I need to be on site?",
      "Not necessarily. Many clients provide after-hours access. We're insured and follow your security protocols.",
    ],
  ]
  return (
    <section className="faq section">
      <div>
        <Eyebrow>Good to know</Eyebrow>
        <h2>
          Answers Before <em>You Book</em>
        </h2>
        <p>Clear expectations make for a smoother cleaning experience.</p>
      </div>
      <div className="faq-list">
        {items.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
