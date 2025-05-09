import React from 'react';

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get travel insurance in 3 simple steps</p>
        
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Enter your trip details</h3>
            <p className="step-description">
              Tell us about your trip, including dates, destination, and traveler information.
            </p>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Compare quotes</h3>
            <p className="step-description">
              We'll show you personalized plans and quotes from top insurers in seconds.
            </p>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Buy with confidence</h3>
            <p className="step-description">
              Choose the right coverage and get your policy documents instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks; 