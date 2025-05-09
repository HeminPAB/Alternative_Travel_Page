import React, { useState } from 'react';
import './BlogContent.css';

const BlogContent = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  
  const toggleFaq = (index) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };
  
  const faqs = [
    {
      question: "How much does travel insurance cost for visitors to Canada?",
      answer: "Travel insurance costs for visitors to Canada vary based on several factors including age, coverage amount, trip duration, and any pre-existing medical conditions. Typically, you can expect to pay between $30 and $150 for a short trip (1-2 weeks), while longer stays may cost between $150 and $1,000 or more. Senior travelers (65+) generally pay higher premiums due to increased health risks. Super Visa insurance, which requires minimum $100,000 coverage for a one-year stay, typically costs between $1,000 and $2,500 annually, depending on the applicant's age and health conditions. To find the best rates, it's recommended to compare quotes from multiple insurance providers, as prices can vary significantly for the same coverage level. Many insurers offer discounts for families or couples purchasing together, and you may save by choosing a higher deductible option if you're comfortable with paying more out-of-pocket in the event of a claim."
    },
    {
      question: "What does visitors insurance for Canada cover?",
      answer: "Visitors insurance for Canada typically provides comprehensive emergency medical coverage for unexpected illnesses and injuries that occur during your stay. This includes emergency hospitalization, physician services, prescription medications, diagnostic tests (X-rays, lab work), emergency dental treatment, ambulance services, and medical evacuation if needed. Most policies also cover follow-up visits related to an emergency, some paramedical services (like physiotherapy), and repatriation of remains in case of death. For Super Visa applicants, policies must provide a minimum of $100,000 in coverage for one year. Additional benefits may include trip interruption protection, coverage for side trips to other countries during your Canadian visit, and limited accidental death and dismemberment benefits. It's important to note that pre-existing conditions may have limited or no coverage unless specifically stated in the policy. Routine check-ups, preventive care, non-emergency dental work, and elective procedures are typically excluded. Always review the policy details carefully to understand exactly what is and isn't covered before purchasing."
    },
    {
      question: "Is travel insurance mandatory for visitors to Canada?",
      answer: "Travel insurance is not legally mandatory for most visitors to Canada, but it is highly recommended due to the high cost of healthcare for non-residents. However, there are specific situations where insurance is required: For Super Visa applicants (parents and grandparents of Canadian citizens/permanent residents), private health insurance with a minimum coverage of $100,000 for one year is mandatory as part of the visa requirements. Some provinces, like British Columbia and Quebec, may require certain international students to enroll in their designated health insurance programs. While not a government requirement, many tour operators and organized travel programs mandate that participants have adequate medical coverage. Even when not legally required, having travel insurance is considered essential for financial protection, as Canada's public healthcare system does not cover visitors, and medical costs can be extremely high. A simple hospital visit can cost thousands of dollars, while more serious treatments or surgeries could result in tens or even hundreds of thousands in expenses. Most travel experts and Canadian immigration authorities strongly advise all visitors to purchase appropriate medical coverage for the entire duration of their stay."
    },
    {
      question: "Can I buy travel insurance after arriving in Canada?",
      answer: "Yes, you can purchase travel insurance after arriving in Canada, but there are important limitations to be aware of. Most insurance providers impose a waiting period (typically 48-72 hours) on policies purchased after arrival, during which time no coverage is provided. This waiting period is meant to prevent people from buying insurance only after they've developed symptoms or require medical attention. Some insurers may not offer post-arrival policies at all, or may charge significantly higher premiums. Additionally, certain coverage benefits may be reduced or excluded when purchasing after arrival. For optimal protection and to avoid coverage gaps, it's always recommended to secure insurance before departing for Canada. If you've already arrived without insurance, it's still better to purchase coverage as soon as possible rather than remaining uninsured for your entire stay. When buying after arrival, carefully review the policy's waiting period restrictions and ensure you understand exactly when your coverage becomes effective. Some specialized insurance providers do offer products specifically designed for travelers who are already in Canada, though these may come with higher premiums or more exclusions."
    },
    {
      question: "Does travel insurance cover COVID-19 for visitors to Canada?",
      answer: "Many travel insurance policies for visitors to Canada now include COVID-19 coverage, but this varies by provider and specific policy. When COVID-19 coverage is included, it typically treats the virus like any other unexpected illness, covering emergency medical expenses such as hospitalization, doctor visits, medications, and tests if you contract COVID-19 during your covered trip. However, the extent of coverage can differ significantly between policies. Some plans may have specific sub-limits for COVID-19 treatment that are lower than the overall policy maximum, while others might provide full coverage up to your policy's benefit limit. Many policies exclude coverage if you travel against a government advisory, have symptoms before purchasing insurance, or travel specifically to receive treatment. Additionally, some plans may cover quarantine expenses if you test positive while in Canada, including accommodation and meal costs. Trip cancellation or interruption due to COVID-19 might be covered under some comprehensive plans, but often with specific conditions. To ensure adequate protection, carefully review the policy wording regarding COVID-19 coverage before purchasing, and look for plans that explicitly state they cover COVID-19 rather than assuming coverage is included. If in doubt, contact the insurance provider directly to clarify their COVID-19 coverage terms."
    },
    {
      question: "What are the best travel insurance options for seniors visiting Canada?",
      answer: "Senior travelers visiting Canada have several specialized insurance options designed to meet their unique needs. The best policies typically offer comprehensive coverage while accommodating age-related concerns and pre-existing conditions. Blue Cross offers age-friendly plans with higher maximum coverage limits and options for stable pre-existing condition coverage. Their policies are often rated well for seniors due to their clear terms and competitive rates for older age brackets. Manulife's Visitors to Canada insurance provides coverage up to age 85 with options for pre-existing condition coverage if they've been stable for specific periods. Their TravelEase plan is specifically designed for travelers with more complex medical histories. Allianz Global Assistance offers policies with no upper age limit for visitors to Canada, though premiums increase with age. They provide clear medical questionnaires and good customer service for seniors. TuGo's Visitors to Canada insurance covers travelers up to age 89 and offers options for pre-existing condition coverage with different stability periods. For seniors with chronic but stable conditions, their partial coverage options can be cost-effective. GMS provides straightforward plans with good value for older travelers, including options for stable pre-existing conditions and emergency medical coverage up to $150,000. When choosing a plan, seniors should prioritize policies with: appropriate coverage limits (minimum $100,000 recommended), clear definitions of pre-existing condition stability, 24/7 emergency assistance services with English-speaking representatives, coverage for common age-related concerns like cardiovascular conditions and arthritis, minimal paperwork for claims, and direct billing to healthcare providers when possible. Many insurers offer age-based discounts for couples purchasing together, so it's worth comparing multiple quotes."
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Super Visa Applicant",
      rating: 5,
      text: "I needed insurance for my parents' Super Visa application and got excellent coverage at a competitive price. The process was simple, and the support team answered all my questions promptly. Highly recommend!"
    },
    {
      name: "Michael Chen",
      role: "International Student",
      rating: 4,
      text: "As an international student, I was worried about healthcare costs in Canada. This insurance gave me peace of mind with its comprehensive coverage. Filing a claim was straightforward, though it took a bit longer than expected."
    },
    {
      name: "Priya Sharma",
      role: "Frequent Visitor",
      rating: 5,
      text: "I visit my daughter in Canada twice a year and always use this travel insurance. When I needed emergency care last winter, they covered everything with no hassle. The 24/7 assistance was incredibly helpful during a stressful time."
    }
  ];
  
  const blogPosts = [
    {
      title: "Understanding Super Visa Insurance Requirements",
      excerpt: "If you're applying for a Super Visa to visit family in Canada, you'll need to meet specific insurance requirements. Learn about coverage minimums, eligible providers, and how to find the best rates.",
      image: "/images/Understanding-Super-Visa-Insurance-Requirements.png",
      url: "/blog/super-visa-insurance"
    },
    {
      title: "Travel Insurance for Seniors: What You Need to Know",
      excerpt: "Senior travelers face unique challenges when visiting Canada. This guide explains how to find affordable coverage, manage pre-existing conditions, and ensure you have the right protection for your needs.",
      image: "/images/Travel-Insurance-for-Seniors--What-You-Need-to-Know.png",
      url: "/blog/seniors"
    },
    {
      title: "How to Choose the Right Deductible for Your Travel Insurance",
      excerpt: "The deductible you choose can significantly impact your insurance premiums. We break down how to make the best choice based on your risk tolerance, budget, and travel plans.",
      image: "/images/How-to-Choose-the-Right-Deductible-for-Your-Travel-Insurance.png",
      url: "/blog/deductibles"
    },
    {
      title: "COVID-19 Coverage for Visitors to Canada: What to Look For",
      excerpt: "Planning a trip to Canada? Learn what to look for in a travel insurance policy that includes COVID-19 coverage, from medical treatment to quarantine expenses and trip interruption.",
      image: "/images/COVID-19-Coverage-for-Visitors-to-Canada--What-to-Look-For.png",
      url: "/blog/covid-coverage"
    },
    {
      title: "Emergency Medical vs. All-Inclusive Travel Insurance",
      excerpt: "Understand the key differences between emergency medical and all-inclusive travel insurance plans for Canada, and determine which option provides the right coverage for your specific needs.",
      image: "/images/Emergency-Medical-vs.-All-Inclusive-Travel-Insurance.png",
      url: "/blog/insurance-types"
    },
    {
      title: "Understanding Travel Insurance Exclusions for Canada",
      excerpt: "Know what's not covered before you travel. This guide explains common exclusions in visitor insurance policies for Canada and how to avoid coverage gaps during your stay.",
      image: "/images/Understanding-Travel-Insurance-Exclusions-for-Canada.png",
      url: "/blog/exclusions"
    }
  ];

  return (
    <div className="blog-container">
      {/* Info Section */}
      <section className="info-section">
        <div className="section-header">
          <h2 className="section-title">Essential Travel Insurance Information for Visitors to Canada</h2>
          <p className="section-subtitle">Everything you need to know about protecting your trip to Canada</p>
        </div>
        
        <div className="info-cards-container">
          <div className="info-card">
            <div className="card-indicator"></div>
            <h3>Why Travel Insurance is Crucial for Canada</h3>
            <p>Canada's healthcare system doesn't cover non-residents, and medical costs can be extremely high. A single day in a Canadian hospital can cost $3,000-$5,000, while emergency treatments or surgeries can exceed $100,000. Travel insurance provides essential financial protection against these unexpected expenses.</p>
            <ul className="info-list">
              <li>Emergency medical coverage for illness and injury</li>
              <li>Protection for sudden hospital stays</li>
              <li>Coverage for prescription medications</li>
              <li>Emergency dental treatments</li>
            </ul>
          </div>
          
          <div className="info-card">
            <div className="card-indicator"></div>
            <h3>Coverage Requirements for Different Visitors</h3>
            <p>Different types of visitors to Canada have varying insurance needs. Super Visa applicants require mandatory minimum coverage of $100,000 for one year, while international students and workers may need specific plans that align with their visa requirements.</p>
            <div className="requirement-table">
              <div className="requirement-row">
                <div className="visitor-type">Super Visa Holders</div>
                <div className="coverage-requirement">Minimum $100,000 for one year</div>
              </div>
              <div className="requirement-row">
                <div className="visitor-type">Tourist Visa Holders</div>
                <div className="coverage-requirement">Recommended minimum $50,000</div>
              </div>
              <div className="requirement-row">
                <div className="visitor-type">International Students</div>
                <div className="coverage-requirement">Varies by province and institution</div>
              </div>
              <div className="requirement-row">
                <div className="visitor-type">Working Holiday Visa</div>
                <div className="coverage-requirement">Recommended minimum $100,000</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-cards-container">
          <div className="info-card">
            <div className="card-indicator"></div>
            <h3>When to Purchase Your Insurance</h3>
            <p>For optimal protection, purchase your travel insurance as soon as you confirm your travel plans to Canada. Buying early provides several important advantages compared to waiting until arrival.</p>
            <div className="comparison-columns">
              <div className="comparison-column">
                <h4>Buying Before Arrival</h4>
                <ul>
                  <li>Coverage begins the moment you leave your home country</li>
                  <li>No waiting periods for coverage to take effect</li>
                  <li>Protection during your entire journey, including flights</li>
                  <li>Often more affordable rates</li>
                  <li>Peace of mind during travel</li>
                </ul>
              </div>
              <div className="comparison-column">
                <h4>Buying After Arrival</h4>
                <ul>
                  <li>Typically includes a 48-72 hour waiting period</li>
                  <li>Higher premiums in many cases</li>
                  <li>Limited options for pre-existing conditions</li>
                  <li>Risk of being uninsured during initial days</li>
                  <li>May not cover conditions that arise during waiting period</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-indicator"></div>
            <h3>Pre-existing Conditions and Coverage</h3>
            <p>Many visitors worry about coverage for pre-existing medical conditions. While policies vary, most insurance providers will cover stable pre-existing conditions, with stability periods typically ranging from 90 to 180 days.</p>
            <div className="tips-box">
              <h4>Tips for Getting Coverage with Pre-existing Conditions</h4>
              <ul>
                <li>Disclose all medical conditions honestly when applying</li>
                <li>Compare stability period requirements between providers</li>
                <li>Consider policies specifically designed for high-risk travelers</li>
                <li>Consult with your physician to document stability if needed</li>
                <li>Read policy wording carefully regarding condition definitions</li>
                <li>Ask about partial coverage options for conditions not meeting stability requirements</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="featured-info-box">
          <h3>Understanding Travel Insurance Coverage in Canada</h3>
          <p>Travel insurance for visitors to Canada typically includes several important components that provide comprehensive protection during your stay:</p>
          
          <div className="coverage-columns">
            <div className="coverage-column">
              <div className="coverage-item">
                <h4>Emergency Medical Treatment</h4>
                <p>Covers unexpected illness or injury requiring medical attention, including doctor visits, hospital stays, emergency procedures, and ambulance services.</p>
              </div>
              <div className="coverage-item">
                <h4>Prescription Medications</h4>
                <p>Covers necessary prescription drugs prescribed by a physician during your covered trip for emergency treatment.</p>
              </div>
              <div className="coverage-item">
                <h4>Emergency Dental</h4>
                <p>Provides coverage for dental emergencies, such as treatment for dental pain, broken teeth, or infections requiring immediate attention.</p>
              </div>
            </div>
            
            <div className="coverage-column">
              <div className="coverage-item">
                <h4>Hospital Stays</h4>
                <p>Covers room and board in a hospital, intensive care, and other hospital services when admitted as an inpatient due to covered illness or injury.</p>
              </div>
              <div className="coverage-item">
                <h4>Medical Evacuation</h4>
                <p>Covers transportation to the nearest appropriate medical facility or back to your home country if medically necessary.</p>
              </div>
              <div className="coverage-item">
                <h4>Side Trips Coverage</h4>
                <p>Many policies include coverage for side trips to other countries during your stay in Canada, allowing greater flexibility in your travel plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from travelers who chose our insurance</p>
        </div>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                {/* Testimonial avatar placeholder */}
                <div className="author-avatar-placeholder">
                  <div className="placeholder-note">Avatar<br/>(60x60px)</div>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="blog-preview-section">
        <div className="section-header">
          <h2 className="section-title">Travel Insurance Guides</h2>
          <p className="section-subtitle">Expert advice to help you make informed decisions</p>
        </div>
        
        <div className="blog-previews">
          {blogPosts.map((post, index) => (
            <div className="blog-preview-card" key={index}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-preview-content">
                <h3 className="blog-preview-title">{post.title}</h3>
                <p className="blog-preview-excerpt">{post.excerpt}</p>
                <a href={post.url} className="blog-read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-section-cta">
          <a href="https://www.policyadvisor.com/travel-insurance/learning-center/" className="secondary-button">View All Blog Posts</a>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Detailed answers to common questions about visitors insurance</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`} key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <div className="faq-icon">{activeFaqIndex === index ? '−' : '+'}</div>
              </div>
              {activeFaqIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogContent; 