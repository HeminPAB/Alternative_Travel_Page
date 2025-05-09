// This is a placeholder for the InsuranceForm component
import React, { useState, useEffect, useRef } from 'react';
import CalendarModal from './CalendarModal';
import './InsuranceForm.css';

function InsuranceForm() {
  // State for form values
  const [coverageDates, setCoverageDates] = useState('');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isCoverageDropdownOpen, setIsCoverageDropdownOpen] = useState(false);
  const [coverageAmount, setCoverageAmount] = useState("100000");
  const [deductible, setDeductible] = useState("0");
  const [coverageAmountDisplay, setCoverageAmountDisplay] = useState("$100,000");
  const [deductibleDisplay, setDeductibleDisplay] = useState("$0");

  const [isTravellerDropdownOpen, setIsTravellerDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travellerDOBs, setTravellerDOBs] = useState([]);

  // Refs for dropdowns
  const coverageDropdownRef = useRef(null);
  const coverageSelectorRef = useRef(null);
  const travellerDropdownRef = useRef(null);
  const travellerSelectorRef = useRef(null);

  // Calendar Modal Logic
  const openCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const handleSelectDates = (startDate, endDate, displayText) => {
    setCoverageDates(displayText);
  };

  // Coverage Dropdown Logic
  const toggleCoverageDropdown = () => {
    setIsCoverageDropdownOpen(prev => !prev);
  };

  const handleApplyCoverage = () => {
    const selectedAmountOption = document.getElementById('coverage-amount-select')?.selectedOptions[0];
    const selectedDeductibleOption = document.getElementById('deductible-select')?.selectedOptions[0];

    if (selectedAmountOption?.value) {
      setCoverageAmount(selectedAmountOption.value);
      setCoverageAmountDisplay(selectedAmountOption.text);
    }
    if (selectedDeductibleOption?.value) {
      setDeductible(selectedDeductibleOption.value);
      setDeductibleDisplay(selectedDeductibleOption.text);
    }
    setIsCoverageDropdownOpen(false);
  };
  
  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        coverageDropdownRef.current && 
        !coverageDropdownRef.current.contains(event.target) &&
        coverageSelectorRef.current &&
        !coverageSelectorRef.current.contains(event.target)
      ) {
        setIsCoverageDropdownOpen(false);
      }
      if (
        travellerDropdownRef.current &&
        !travellerDropdownRef.current.contains(event.target) &&
        travellerSelectorRef.current &&
        !travellerSelectorRef.current.contains(event.target)
      ) {
        setIsTravellerDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Traveller Dropdown Logic
  const toggleTravellerDropdown = () => {
    setIsTravellerDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    // Initialize DOBs on first render based on default adults/children
    const initialDOBs = [];
    for (let i = 0; i < adults; i++) {
        initialDOBs.push({ id: `adult-${i}`, type: 'Adult', dob: '' });
    }
    for (let i = 0; i < children; i++) {
        initialDOBs.push({ id: `child-${i}`, type: 'Child', dob: '' });
    }
    setTravellerDOBs(initialDOBs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  useEffect(() => {
    // Update DOB array size when adults/children change, preserving existing values
    setTravellerDOBs(prevDOBs => {
        const totalTravellers = adults + children;
        const newDOBs = [];
        let existingAdultIndex = 0;
        let existingChildIndex = 0;

        for(let i = 0; i < adults; i++) {
            const existing = prevDOBs.filter(p => p.type === 'Adult')[existingAdultIndex];
            newDOBs.push({ id: `adult-${i}`, type: 'Adult', dob: existing ? existing.dob : '' });
            existingAdultIndex++;
        }
        for(let i = 0; i < children; i++) {
            const existing = prevDOBs.filter(p => p.type === 'Child')[existingChildIndex];
             newDOBs.push({ id: `child-${i}`, type: 'Child', dob: existing ? existing.dob : '' });
            existingChildIndex++;
        }
        // Ensure the array length matches totalTravellers
        return newDOBs.slice(0, totalTravellers); 
    });

  }, [adults, children]);

  const handleAdultsChange = (increment) => {
    setAdults(prev => Math.max(1, prev + increment));
  };

  const handleChildrenChange = (increment) => {
    setChildren(prev => Math.max(0, prev + increment));
  };

  const handleDOBChange = (index, value) => {
    const updatedDOBs = travellerDOBs.map((item, i) => 
      i === index ? { ...item, dob: value } : item
    );
    setTravellerDOBs(updatedDOBs);
  };
  
  const formatDOBInput = (value) => {
    let v = value.replace(/[^\d]/g, '');
    if (v.length > 4) {
      v = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4, 8)}`;
    } else if (v.length > 2) {
      v = `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    return v;
  };

  const handleApplyTravellers = () => {
    setIsTravellerDropdownOpen(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}> 
      <div className="form-row main-inputs">
        <div className="form-group">
          <label htmlFor="coverage-dates-input">Coverage Dates</label>
          <input 
            type="text" 
            id="coverage-dates-input"
            className="form-control" 
            placeholder="MM/DD/YYYY - MM/DD/YYYY" 
            value={coverageDates}
            readOnly
            onClick={openCalendarModal}
          />
        </div>
        
        <div className="form-group">
          <label>Number of Travellers</label>
          <div className="traveller-selector" ref={travellerSelectorRef} onClick={toggleTravellerDropdown}>
            <div className="traveller-summary">
              <span>{adults} adult{adults !== 1 ? 's' : ''}</span> • <span>{children} child{children !== 1 ? 'ren' : ''}</span>
            </div>
            <div className="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label>Coverage Amount and Deductible</label>
          <div className="coverage-selector" ref={coverageSelectorRef} onClick={toggleCoverageDropdown}>
            <div className="coverage-summary">
              <span>{coverageAmountDisplay}</span> • <span>{deductibleDisplay}</span>
            </div>
            <div className="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <input type="hidden" name="coverage-amount" value={coverageAmount} />
          <input type="hidden" name="deductible" value={deductible} />
          
          {isCoverageDropdownOpen && (
            <div className="coverage-dropdown open" ref={coverageDropdownRef}>
              <div className="coverage-option">
                <label className="coverage-option-label" htmlFor="coverage-amount-select">Coverage Amount</label>
                <select id="coverage-amount-select" className="form-control select" defaultValue={coverageAmount}>
                  <option value="10000">$10,000</option>
                  <option value="25000">$25,000</option>
                  <option value="50000">$50,000</option>
                  <option value="100000">$100,000</option>
                  <option value="150000">$150,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                </select>
              </div>
              <div className="coverage-option">
                <label className="coverage-option-label" htmlFor="deductible-select">Deductible</label>
                <select id="deductible-select" className="form-control select" defaultValue={deductible}>
                  <option value="0">$0</option>
                  <option value="75">$75</option>
                  <option value="100">$100</option>
                  <option value="250">$250</option>
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="2000">$2,000</option>
                </select>
              </div>
              <div className="dropdown-footer">
                <button type="button" className="modal-btn" onClick={handleApplyCoverage}>Done</button>
              </div>
            </div>
          )}
        </div>
        
        <div className="form-group button-group">
          <button type="submit" className="btn btn-primary get-quote-btn">Get Quote Now</button>
        </div>
      </div>
      
      {isTravellerDropdownOpen && (
        <div className="traveller-dropdown open" ref={travellerDropdownRef}>
          <div className="traveller-header">
            <div className="traveller-count-section">
              <div className="traveller-type">
                <div className="traveller-label">Adults</div>
                <div className="traveller-counter">
                  <button type="button" className="counter-btn" onClick={() => handleAdultsChange(-1)}>−</button>
                  <span>{adults}</span>
                  <button type="button" className="counter-btn" onClick={() => handleAdultsChange(1)}>+</button>
                </div>
              </div>
              <div className="traveller-type">
                <div className="traveller-label">Children</div>
                <div className="traveller-counter">
                  <button type="button" className="counter-btn" onClick={() => handleChildrenChange(-1)}>−</button>
                  <span>{children}</span>
                  <button type="button" className="counter-btn" onClick={() => handleChildrenChange(1)}>+</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="traveller-dob-section">
            <div className="section-title">Enter Date of Birth</div>
            <div className="traveller-dob-fields">
              {travellerDOBs.map((person, index) => (
                <div key={person.id} className="traveller-dob-field">
                  <label htmlFor={person.id}>{`${person.type} ${person.type === 'Adult' ? index + 1 : index - adults + 1} Date of Birth`}</label>
                  <input 
                    type="text" 
                    id={person.id} 
                    className="form-control dob-input" 
                    placeholder="MM/DD/YYYY" 
                    value={person.dob} 
                    onChange={(e) => handleDOBChange(index, formatDOBInput(e.target.value))} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="dropdown-footer">
            <button type="button" className="modal-btn" onClick={handleApplyTravellers}>Done</button>
          </div>
        </div>
      )}
      
      <div className="form-row checkbox-row">
        <div className="checkbox-container">
          <input type="checkbox" id="pre-existing" />
          <label htmlFor="pre-existing">Show coverages with Pre-existing conditions</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="monthly-payment" />
          <label htmlFor="monthly-payment">Monthly payment options only</label>
        </div>
      </div>

      <CalendarModal 
        isOpen={isCalendarModalOpen}
        onClose={closeCalendarModal}
        onSelectDates={handleSelectDates}
      />
    </form>
  );
}

export default InsuranceForm; 