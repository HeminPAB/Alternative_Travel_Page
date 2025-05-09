import React, { useState } from 'react';
import './InsuranceComparison.css';

const InsuranceComparison = () => {
  const [visiblePlans, setVisiblePlans] = useState(4);
  
  const insurancePlans = [
    {
      id: 1,
      name: "Priority Plan",
      provider: "Manulife",
      logo: "/images/manulife-logo.png",
      rating: 4.8,
      price: "510.00",
      annual: true,
      recommended: true,
      features: [
        { name: "Medication", value: "70%" },
        { name: "Hospitalization", value: "100% of semi-private hospital" },
        { name: "Complementary care", value: "70% reimbursement of laboratory and diagnostic" },
        { name: "Health Professional", value: "70% of up to $600 per practitioner per year" },
        { name: "Dental Care", value: "70% reimbursement" },
        { name: "Vision Care", value: "Not included" }
      ],
      benefits: [
        "Easy application and claim process",
        "Special rates for single parents and families",
        "Several wellness benefits"
      ]
    },
    {
      id: 2,
      name: "Health Choice B",
      provider: "Sun Life",
      logo: "/images/Sunlife-logo.png",
      rating: 4.8,
      price: "479.40",
      annual: true,
      recommended: false,
      features: [
        { name: "Medication", value: "80%" },
        { name: "Hospitalization", value: "$5,000/year" },
        { name: "Complementary care", value: "Included" },
        { name: "Health Professional", value: "100% reimbursement" },
        { name: "Dental Care", value: "Preventive: 80% reimbursement" },
        { name: "Vision Care", value: "100% reimbursement, $200 maximum every two years" }
      ],
      benefits: [
        "Great plan for vision and dental options",
        "Access to MySunLife Mobile App",
        "In-person options for group benefits"
      ]
    },
    {
      id: 3,
      name: "Complete Health Essential",
      provider: "Blue Cross",
      logo: "/images/blue-cross-logo.png",
      rating: 4.8,
      price: "549.00",
      annual: true,
      recommended: false,
      features: [
        { name: "Medication", value: "70% covered" },
        { name: "Hospitalization", value: "Extra hospital coverage $100/day" },
        { name: "Complementary care", value: "Included" },
        { name: "Health Professional", value: "Included" },
        { name: "Dental Care", value: "Coverage 70%" },
        { name: "Vision Care", value: "$150 / 2 years" }
      ],
      benefits: [
        "Additional drug and dental benefits",
        "Access to text, audio, or video chat with a doctor",
        "Access to MyGoodHealth.ca"
      ]
    },
    {
      id: 4,
      name: "ZONE 5 Choice",
      provider: "GreenShield",
      logo: "/images/Green-Shield.png",
      rating: 4.8,
      price: "579.00",
      annual: true,
      recommended: true,
      features: [
        { name: "Medication", value: "Maximum of $5,000" },
        { name: "Hospitalization", value: "Optional hospital accommodation" },
        { name: "Complementary care", value: "Included" },
        { name: "Health Professional", value: "Included" },
        { name: "Dental Care", value: "Maximum amount for Year 1 of $700" },
        { name: "Vision Care", value: "$150 in the first 2 years" }
      ],
      benefits: [
        "Designed to provide drug coverage for unexpected illnesses",
        "Get instant access to your benefits with the GreenShield pay-direct benefit card",
        "No waiting period"
      ]
    },
    {
      id: 5,
      name: "FollowMe Premiere",
      provider: "Manulife",
      logo: "/images/manulife-logo.png",
      rating: 4.8,
      price: "621.00",
      annual: true,
      recommended: true,
      features: [
        { name: "Medication", value: "Prescription Drugs: $2,600/year" },
        { name: "Hospitalization", value: "Ambulance service and semi-private room" },
        { name: "Complementary care", value: "Homecare, Prosthetics" },
        { name: "Health Professional", value: "$55/visit" },
        { name: "Dental Care", value: "Year 1: $800" },
        { name: "Vision Care", value: "$300 every 2 years" }
      ],
      benefits: [
        "Obtain special rates for couples and families",
        "Fast and easy electronic claims",
        "Earn rewards and save on premiums with Manulife vitality"
      ]
    },
    {
      id: 6,
      name: "Health Plus Premium",
      provider: "Allianz",
      logo: "/images/allianz-logo.png",
      rating: 4.7,
      price: "573.60",
      annual: true,
      recommended: false,
      features: [
        { name: "Medication", value: "80% coverage" },
        { name: "Hospitalization", value: "100% of semi-private hospital" },
        { name: "Complementary care", value: "75% reimbursement of laboratory" },
        { name: "Health Professional", value: "80% of up to $750 per year" },
        { name: "Dental Care", value: "75% reimbursement" },
        { name: "Vision Care", value: "$250 every 2 years" }
      ],
      benefits: [
        "Easy online claims processing",
        "Coverage for pre-existing conditions",
        "Family discounts available"
      ]
    },
    {
      id: 7,
      name: "Comprehensive Shield",
      provider: "Blue Cross",
      logo: "/images/blue-cross-logo.png",
      rating: 4.6,
      price: "639.60",
      annual: true,
      recommended: false,
      features: [
        { name: "Medication", value: "85% coverage up to $5,000" },
        { name: "Hospitalization", value: "Semi-private room covered" },
        { name: "Complementary care", value: "80% coverage for therapies" },
        { name: "Health Professional", value: "Up to $700 annually" },
        { name: "Dental Care", value: "80% basic, 50% major" },
        { name: "Vision Care", value: "$300 every 24 months" }
      ],
      benefits: [
        "Direct billing at most providers",
        "Travel insurance included",
        "Mental health support services"
      ]
    },
    {
      id: 8,
      name: "Silver Health Guardian",
      provider: "Sun Life",
      logo: "/images/Sunlife-logo.png",
      rating: 4.5,
      price: "539.88",
      annual: true,
      recommended: true,
      features: [
        { name: "Medication", value: "75% coverage" },
        { name: "Hospitalization", value: "Semi-private room" },
        { name: "Complementary care", value: "70% coverage" },
        { name: "Health Professional", value: "$65/visit up to $600/year" },
        { name: "Dental Care", value: "70% preventive, 60% basic" },
        { name: "Vision Care", value: "$200 every 2 years" }
      ],
      benefits: [
        "Senior-focused benefits package",
        "Telemedicine services included",
        "Emergency travel medical coverage"
      ]
    }
  ];

  const showMorePlans = () => {
    setVisiblePlans(prevCount => prevCount + 4);
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star full">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }

    return stars;
  };

  // Add a helper function to format price to 4 digits
  const formatPrice = (price) => {
    // Format to have 2 decimal places (4 digits including cents)
    return parseFloat(price).toFixed(2);
  };

  // Calculate monthly amount as a string
  const getMonthlyAmount = (price) => {
    const monthlyAmount = Math.round(parseFloat(price) / 12);
    return `$${monthlyAmount} per month`;
  };

  return (
    <div className="insurance-comparison">
      <h2 className="comparison-title">Compare Insurance Plans</h2>
      
      <div className="insurance-plans">
        {insurancePlans.slice(0, visiblePlans).map(plan => (
          <div key={plan.id} className={`insurance-plan-card ${plan.recommended ? 'recommended' : ''}`}>
            {plan.recommended && (
              <div className="recommended-badge">Recommended Offer</div>
            )}
            
            <div className="plan-header">
              <div className="plan-name">{plan.name}</div>
            </div>
            
            <div className="plan-content">
              <div className="plan-left-column">
                <img src={plan.logo} alt={plan.provider} className="provider-logo" />
                <div className="provider-rating">
                  <span className="rating-number">{plan.rating}</span>
                  {renderRatingStars(plan.rating)}
                </div>
              </div>
              
              <div className="plan-middle-column">
                <div className="plan-features">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon-container">
                        <span className="feature-icon">
                          {feature.name === "Medication" && "💊"}
                          {feature.name === "Hospitalization" && "🏥"}
                          {feature.name === "Complementary care" && "➕"}
                          {feature.name === "Health Professional" && "👨‍⚕️"}
                          {feature.name === "Dental Care" && "🦷"}
                          {feature.name === "Vision Care" && "👁️"}
                        </span>
                      </div>
                      <div className="feature-details">
                        <div className="feature-name">{feature.name}</div>
                        <div className="feature-value">{feature.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="plan-right-column">
                <div className="price-container">
                  <div className="price">${formatPrice(plan.price)}</div>
                  <div className="monthly-note">{getMonthlyAmount(plan.price)}</div>
                </div>
                <button className="buy-button">BUY NOW</button>
                <div className="partner-text">With our partner {plan.provider}</div>
              </div>
            </div>
            
            <div className="plan-footer">
              <button className="detailed-review-button">Our detailed review <span className="arrow-down">▼</span></button>
            </div>
          </div>
        ))}
      </div>
      
      {visiblePlans < insurancePlans.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={showMorePlans}>
            Show more <span className="arrow-down">▼</span>
          </button>
        </div>
      )}
      
      <div className="insurance-partners">
        <h3>Our Trusted Insurance Partners</h3>
        <div className="partners-image-container">
          <img src="/images/insurance-partners.png" alt="Our insurance partners" className="partners-image" />
        </div>
      </div>
    </div>
  );
};

export default InsuranceComparison; 