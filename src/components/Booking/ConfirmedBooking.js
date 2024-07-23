import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ConfirmedBooking.styles.css";

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("Bookings");
    if (data) {
      setReserveDetails(JSON.parse(data));
    }
  }, []);

  return (
    <section
      className="booking-confirmation"
      aria-labelledby="confirmation-header"
    >
      <h1 id="confirmation-header">Your reservation is confirmed!</h1>
      <h2>Modern Restaurant & Bar</h2>
      <div className="confirmation-details-container">
        <h3>
          DATE: <span>{reservedDetails.date}</span>
        </h3>
        <h3>
          TIME: <span>{reservedDetails.time}</span>
        </h3>
        <h3>
          GUESTS: <span>{reservedDetails.guests}</span>
        </h3>
        <h3>
          OCCASION: <span>{reservedDetails.occasion}</span>
        </h3>
      </div>

      <Link to="/">
        <button aria-label="Back to home page">Back to start</button>
      </Link>
    </section>
  );
};

export default ConfirmedBooking;
