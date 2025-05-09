import React, { useState } from 'react';
import './FAQ.css'; // Make sure to create this CSS file

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does travel insurance cover?",
      answer: "Travel insurance for visitors to Canada typically covers emergency medical expenses, trip cancellation/interruption, lost or stolen baggage, flight delays, and emergency evacuation. Coverage varies by plan, so it's important to compare policies and choose one that addresses your specific needs."
    },
    {
      question: "When should I buy travel insurance?",
      answer: "For maximum protection, you should purchase travel insurance soon after making your initial trip deposit. Many benefits, including pre-existing condition coverage and cancel-for-any-reason options, are only available if you buy insurance within 14-21 days of your initial trip payment."
    },
    {
      question: "How much does travel insurance cost?",
      answer: "The cost of travel insurance typically ranges from 4% to 10% of your total prepaid, nonrefundable trip expenses. Factors affecting cost include traveler age, trip cost, trip length, destination, and coverage options selected."
    },
    {
      question: "Does travel insurance cover cancellation due to COVID-19?",
      answer: "Many travel insurance plans now offer some level of COVID-19 coverage. This may include coverage for trip cancellation if you test positive before your trip, or medical coverage if you contract COVID-19 during your travels. However, coverage varies by plan and provider."
    },
    {
      question: "Are pre-existing medical conditions covered?",
      answer: "Many travel insurance plans offer a pre-existing condition waiver if you purchase the policy within a specified period after making your initial trip deposit (usually 14-21 days) and insure the full cost of your trip. Without this waiver, pre-existing conditions from a set period before your policy purchase (usually 60-180 days) are excluded."
    },
    {
      question: "How do I file a claim?",
      answer: "To file a claim, gather documentation supporting your claim (such as medical reports, receipts, airline statements), complete the claim form provided by your insurer, and submit all materials within the required timeframe (usually 90 days from the incident). Our customer service team is available to guide you through this process."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="section-subheading">Find answers to common questions about travel insurance for visitors to Canada</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${openIndex === index ? 'open' : ''}`} 
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 