import React, { useState } from "react";
import "./faq-home.css";

const faqs = [
  {
    question: "Do you offer custom-built gaming PCs?",
    answer:
      "Yes! We specialize in custom-built gaming rigs tailored to your performance needs. You can choose components and our experts will assemble your system.",
  },
  {
    question: "Can I upgrade my existing PC with components from your store?",
    answer:
      "Absolutely! We offer processors, GPUs and many components. Our support team can also help you choose compatible upgrades.",
  },
  {
    question: "Do you offer custom-built gaming PCs?",
    answer:
      "Yes! We specialize in custom-built gaming rigs tailored to your performance needs. You can choose components and our experts will assemble your system.",
  },
  {
    question: "Can I upgrade my existing PC with components from your store?",
    answer:
      "Absolutely! We offer processors, GPUs and many components. Our support team can also help you choose compatible upgrades.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="home-faq">
      <h2 className="font_2 wixui-rich-text__text" style={{ fontSize: "69px" }}>
        FAQs
      </h2>
      <div className="home-faq__header">
        <h2>Frequently asked questions</h2>
        <p className="home-faq__description">
          Find answers to common queries about our products, services and tech
          solutions. If you have more questions feel free to reach out to us.
        </p>
      </div>

      <div className="home-faq__list">
        {faqs.map((faq, index) => (
          <div key={index} className="home-faq__item">
            <div className="home-faq__question" onClick={() => toggle(index)}>
              {faq.question}
              {/* <span>{active === index ? "-" : "+"}</span> */}
            </div>

            {active === index && <p className="home-faq__answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;