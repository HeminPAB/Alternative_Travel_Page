import React from 'react';
import './App.css';
import Header from './components/Header';
import InsuranceForm from './components/InsuranceForm';
import InsuranceComparison from './components/InsuranceComparison';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
import './components/InsuranceComparison.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="hero-section">
        {/* Hero background image placeholder */}
        <div className="hero-placeholder-note">
          {/* Placeholder text removed */}
        </div>
        
        <div className="hero-content">
          {/* All text content removed from hero section */}
        </div>
        
        <div className="form-container" id="get-quote">
          <h2 className="section-heading"></h2>
          <InsuranceForm />
        </div>
      </div>
      
      <div className="container">
        <InsuranceComparison />
        <BlogContent />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
