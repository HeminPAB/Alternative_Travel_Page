import React, { useState, useEffect } from 'react';
import './CalendarModal.css';

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarModal = ({ isOpen, onClose, onSelectDates }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [currentLeftMonth, setCurrentLeftMonth] = useState(new Date(2025, 4, 1)); // May 2025
  const [isSuperVisa, setIsSuperVisa] = useState(false);
  const [hoverDate, setHoverDate] = useState(null);
  const [selectionMode, setSelectionMode] = useState('start'); // 'start' or 'end'
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' or 'flexible'
  
  // Calculate the right month based on the left month
  const getCurrentRightMonth = () => {
    return new Date(currentLeftMonth.getFullYear(), currentLeftMonth.getMonth() + 1, 1);
  };

  useEffect(() => {
    if (isOpen) {
      // Set default selected dates from the reference image (May 7-23, 2025)
      const defaultYear = 2025;
      const defaultMonth = 4; // May (0-indexed)
      
      const startDate = new Date(defaultYear, defaultMonth, 7);
      const endDate = new Date(defaultYear, defaultMonth, 23);
      
      setSelectedStartDate(startDate);
      setSelectedEndDate(endDate);
      setCurrentLeftMonth(new Date(defaultYear, defaultMonth, 1));
      setSelectionMode('start'); // Reset selection mode when opening
    }
  }, [isOpen]);

  // Handle Super Visa checkbox changes
  useEffect(() => {
    if (isSuperVisa && selectedStartDate) {
      // Set end date to 1 year from start date
      const oneYearLater = new Date(selectedStartDate);
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      oneYearLater.setDate(oneYearLater.getDate() - 1); // Minus 1 day
      setSelectedEndDate(oneYearLater);
    }
  }, [isSuperVisa, selectedStartDate]);

  // Calculate days between selected dates
  const calculateDaysBetween = () => {
    if (!selectedStartDate || !selectedEndDate) return '';
    
    const diffTime = Math.abs(selectedEndDate - selectedStartDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
    
    return `${diffDays} days selected`;
  };

  const formatDateRange = () => {
    if (!selectedStartDate || !selectedEndDate) return '';
    
    const formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };
    
    return `${formatDate(selectedStartDate)} → ${formatDate(selectedEndDate)}`;
  };

  const handleDateClick = (date) => {
    if (date < today) return;
    
    if (isSuperVisa) {
      setSelectedStartDate(date);
      // For Super Visa, set end date to 1 year minus 1 day
      const endDate = new Date(date);
      endDate.setFullYear(endDate.getFullYear() + 1);
      endDate.setDate(endDate.getDate() - 1);
      setSelectedEndDate(endDate);
      return;
    }
    
    if (selectionMode === 'start') {
      // Start a new selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      setSelectionMode('end');
    } else {
      // Complete the selection
      if (date < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(date);
      } else {
        setSelectedEndDate(date);
      }
      setSelectionMode('start'); // Reset for next selection
    }
  };

  const handleMouseEnter = (date) => {
    if (selectedStartDate && !selectedEndDate && date >= today) {
      setHoverDate(date);
    }
  };

  const handleMouseLeave = () => {
    setHoverDate(null);
  };

  const handlePrevMonth = () => {
    setCurrentLeftMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentLeftMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + 1);
      return newMonth;
    });
  };

  const handleDone = () => {
    if (selectedStartDate && selectedEndDate) {
      onSelectDates(selectedStartDate, selectedEndDate, formatDateRange());
      onClose();
    }
  };

  const handleSuperVisaChange = (e) => {
    setIsSuperVisa(e.target.checked);
    if (e.target.checked && selectedStartDate) {
      // Set end date to 1 year from start date
      const oneYearLater = new Date(selectedStartDate);
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      oneYearLater.setDate(oneYearLater.getDate() - 1); // Minus 1 day
      setSelectedEndDate(oneYearLater);
      setSelectionMode('start'); // Reset selection mode when toggling Super Visa
    } else if (!e.target.checked) {
      // If unchecking Super Visa, keep start date but clear end date
      setSelectedEndDate(null);
      setSelectionMode('end');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const isEqualDate = (date1, date2) => {
    return date1 && date2 && 
           date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  const isBetweenDates = (date, startDate, endDate) => {
    if (!startDate || !endDate) return false;
    
    // Make sure start is before end
    const effectiveStart = startDate <= endDate ? startDate : endDate;
    const effectiveEnd = startDate <= endDate ? endDate : startDate;
    
    return date > effectiveStart && date < effectiveEnd;
  };

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-start-${month}-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      currentDate.setHours(0, 0, 0, 0);
      
      let className = "calendar-day";
      
      const isToday = isEqualDate(currentDate, today);
      const isStartDate = isEqualDate(currentDate, selectedStartDate);
      const isEndDate = isEqualDate(currentDate, selectedEndDate);
      
      // Calculate if we're in a range between selected dates
      const effectiveStartDate = selectedStartDate && selectedEndDate && 
                                 selectedStartDate > selectedEndDate ? selectedEndDate : selectedStartDate;
      const effectiveEndDate = selectedStartDate && selectedEndDate && 
                               selectedStartDate > selectedEndDate ? selectedStartDate : selectedEndDate;
      
      const isInRange = isBetweenDates(currentDate, selectedStartDate, selectedEndDate);
                        
      // For hover effect when selecting a range
      const effectiveHoverDate = selectedStartDate && hoverDate && !selectedEndDate ? hoverDate : null;
      const isHoverRange = selectedStartDate && effectiveHoverDate &&
                          ((currentDate > selectedStartDate && currentDate <= effectiveHoverDate) ||
                           (currentDate < selectedStartDate && currentDate >= effectiveHoverDate));
      
      // Is this date part of a range boundary?
      const isFirstDay = effectiveStartDate && isEqualDate(currentDate, effectiveStartDate);
      const isLastDay = effectiveEndDate && isEqualDate(currentDate, effectiveEndDate);
      
      const isPast = currentDate < today;
      const isHoverHighlight = isEqualDate(currentDate, hoverDate) && !isPast && !isStartDate && !isEndDate;
      
      if (isToday) className += " today";
      if (isStartDate || isEndDate) className += " selected";
      if (isFirstDay) className += " first-day";
      if (isLastDay) className += " last-day";
      if (isInRange) className += " in-range";
      if (isHoverRange) className += " in-range";
      if (isHoverHighlight) className += " hover-highlight";
      if (isPast) className += " disabled";
      
      days.push(
        <div 
          key={`day-${month}-${day}`} 
          className={className}
          onClick={() => !isPast && handleDateClick(currentDate)}
          onMouseEnter={() => handleMouseEnter(currentDate)}
          onMouseLeave={handleMouseLeave}
        >
          {day}
        </div>
      );
    }
    
    // Add empty cells for days after the last day of the month
    const totalCells = firstDayOfMonth + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={`empty-end-${month}-${i}`} className="calendar-day empty"></div>);
    }
    
    return days;
  };

  if (!isOpen) return null;
  
  const rightMonth = getCurrentRightMonth();
  
  return (
    <div className="calendar-modal">
      <div className="calendar-content">
        <div className="tabs-container">
          <div 
            className={`calendar-tab ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => handleTabChange('calendar')}
          >
            Calendar
          </div>
          <div 
            className={`calendar-tab ${activeTab === 'flexible' ? 'active' : ''}`}
            onClick={() => handleTabChange('flexible')}
          >
            I'm flexible
          </div>
        </div>
        
        <div className="date-range-header">
          <div className="date-range-text">
            {formatDateRange() || "Select dates"}
          </div>
          <div className="days-count">
            {calculateDaysBetween() || (selectionMode === 'end' ? "Select end date" : "Select start date")}
          </div>
        </div>
        
        <div className="calendars-container">
          <button className="nav-button prev" onClick={handlePrevMonth}>
            &lt;
          </button>
          
          <div className="calendar-grid-container">
            <div className="month-header">
              {`${MONTH_NAMES[currentLeftMonth.getMonth()]} ${currentLeftMonth.getFullYear()}`}
            </div>
            <div className="calendar-grid">
              {DAY_NAMES_SHORT.map((day, index) => (
                <div key={`left-weekday-${index}`} className="weekday">{day}</div>
              ))}
              {renderCalendar(currentLeftMonth)}
            </div>
          </div>
          
          <div className="calendar-grid-container">
            <div className="month-header">
              {`${MONTH_NAMES[rightMonth.getMonth()]} ${rightMonth.getFullYear()}`}
            </div>
            <div className="calendar-grid">
              {DAY_NAMES_SHORT.map((day, index) => (
                <div key={`right-weekday-${index}`} className="weekday">{day}</div>
              ))}
              {renderCalendar(rightMonth)}
            </div>
          </div>
          
          <button className="nav-button next" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
        
        <div className="calendar-footer">
          <div className="super-visa-option">
            <input 
              type="checkbox" 
              id="super-visa-checkbox"
              checked={isSuperVisa}
              onChange={handleSuperVisaChange}
            />
            <label htmlFor="super-visa-checkbox">Super Visa Insurance (1 year)</label>
          </div>
          
          <button className="done-button" onClick={handleDone} disabled={!selectedStartDate || !selectedEndDate}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal; 