function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmation-container">
        <div className="confirmation-card">
          <span className="confirmation-icon" aria-hidden="true">
            <i className="fa-solid fa-circle-check"></i>
          </span>

          <h1>Booking Confirmed!</h1>

          <p>
            Your table reservation has been successfully confirmed.
            We look forward to seeing you at Little Lemon.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;


