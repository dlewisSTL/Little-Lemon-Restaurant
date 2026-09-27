import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm, submissionError }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const today = new Date().toISOString().split('T')[0];
    const isFormValid =
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== '';
    
    const isGuestCountInvalid =
        guests !== '' && (guests < 1 || guests > 10);
    
    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        date,
        time,
        guests,
        occasion,
      };

      submitForm(formData);
    };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            name="date"
            value={date}
            min={today}
            onChange={(e) => {
            setDate(e.target.value);
            dispatch({
              type: 'UPDATE_TIMES',
              date: e.target.value,
                });
            }}
            required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
          <label htmlFor="guests">Number of guests</label>

          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            aria-describedby={isGuestCountInvalid ? 'guests-error' : undefined}
            aria-invalid={isGuestCountInvalid}
          />

          {isGuestCountInvalid && (
            <p className="field-error" id="guests-error">
              Number of guests must be between 1 and 10.
            </p>
          )}
        </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

        {submissionError && (
          <p className="form-error" role="alert">
            {submissionError}
          </p>
        )}

      <button
          className="btn-primary"
          type="submit"
          disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
    </form>
  );
}

export default BookingForm;
