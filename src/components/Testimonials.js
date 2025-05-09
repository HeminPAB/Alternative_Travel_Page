import React from 'react';

function Testimonials() {
  // Helper function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={i < rating ? "currentColor" : "none"} 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    }
    return stars;
  };

  const testimonials = [
    {
      content: "I was able to compare multiple plans and find the perfect coverage for my family's Europe trip in just minutes. The process was simple and straightforward.",
      author: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "When my flight was cancelled due to weather, TravelSafe's support team guided me through the claim process. I had my reimbursement within a week!",
      author: "Michael Chen",
      location: "Vancouver, BC",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "As a senior traveler with pre-existing conditions, finding affordable coverage has always been a challenge. TravelSafe made it easy to find a plan that covered my needs.",
      author: "Robert Williams",
      location: "Montreal, QC",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      content: "The 24/7 assistance was a lifesaver when I needed emergency medical care in Thailand. One call and everything was arranged for me.",
      author: "Emily Davis",
      location: "Calgary, AB",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Join thousands of satisfied travelers who trust TravelSafe</p>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.author} avatar`} 
                  className="testimonial-avatar" 
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 