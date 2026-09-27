import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm, submissionError }) {
  return (
    <section className="booking-page">
      <div className="booking-container">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">
            Choose a date and time for your visit. We look forward to seeing you
            at Little Lemon.
        </p>
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;


