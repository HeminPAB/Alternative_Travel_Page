import React from 'react';

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="section-title">Why Choose TravelSafe</h2>
        <p className="section-subtitle">Experience peace of mind with our comprehensive coverage</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3 className="feature-title">Comprehensive Coverage</h3>
            <p className="feature-description">
              Get protection for medical emergencies, trip cancellations, lost baggage, and more.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <h3 className="feature-title">24/7 Assistance</h3>
            <p className="feature-description">
              Access to emergency support and assistance services wherever you are, whenever you need it.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
            <h3 className="feature-title">Instant Coverage</h3>
            <p className="feature-description">
              Get your policy documents delivered instantly to your email after purchase.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3 className="feature-title">Easy Claims Process</h3>
            <p className="feature-description">
              Simple, straightforward claims with dedicated support to guide you through the process.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
            <h3 className="feature-title">Trusted Providers</h3>
            <p className="feature-description">
              We partner with top-rated insurance companies to bring you reliable coverage options.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 12 12 8 8 12"></polyline>
              <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
            <h3 className="feature-title">Affordable Prices</h3>
            <p className="feature-description">
              Compare plans to find coverage that fits your needs without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection; 