import { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './bookingUtils';
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI } from './api';


function Main() {
    const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
    );
    
    const [submissionError, setSubmissionError] = useState('');
    
    const navigate = useNavigate();
    
    function submitForm(formData) {
      const success = submitAPI(formData);

      if (success) {
        setSubmissionError('');
        navigate('/confirmed');
      } else {
        setSubmissionError(
          'We were unable to complete your reservation. Please try again.'
        );
      }
    }

  return (
    <main>
        <Routes>
              <Route path="/" element={<Homepage />} />

              <Route
                path="/booking"
                element={
                  <BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                    submissionError={submissionError}
                  />
                }
              />

              <Route
                path="/confirmed"
                element={<ConfirmedBooking />}
              />
        </Routes>
    </main>
  );
}

export default Main;