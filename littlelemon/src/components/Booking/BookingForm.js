import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import for navigation
import { Link } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
  const { times } = availableTimes;
  const [bookings, setBookings] = useState({
    date: "",
    time: "17:00",
    guests: "",
    occasion: "Birthday",
  });

  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    localStorage.setItem("Bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookings.date && bookings.time && bookings.guests !== "") {
      localStorage.setItem("Bookings", JSON.stringify(bookings));
      navigate("/confirmed"); // Redirect to confirmed page

      console.log(`
        Date: ${bookings.date},
        Time: ${bookings.time},
        Number of Guests: ${bookings.guests},
        Occasion: ${bookings.occasion}`);

      setBookings({
        date: "",
        time: "17:00",
        guests: "",
        occasion: "Birthday",
      });
    } else {
      console.log("THERE IS AN ERROR SUBMITTING YOUR FORM");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookings({ ...bookings, [name]: value });
  };

  return (
    <section name="reservations" className="booking-form">
      <div className="bookings-container">
        <h2 className="booking-header">Little Lemon</h2>
        <h2>Reserve a table</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit}
          aria-label="On Submit"
        >
          <label htmlFor="res-date">Date: </label>
          <input
            type="date"
            name="date"
            id="res-date"
            value={bookings.date}
            aria-label="On Change"
            onChange={(e) => {
              setBookings({ ...bookings, date: e.target.value });
              dispatch({
                type: "UPDATE_TIMES",
                date: new Date(e.target.value),
              });
            }}
            required
          />

          <label htmlFor="res-time">Time:</label>
          <select
            id="res-time"
            name="time"
            value={bookings.time}
            onChange={handleChange}
            aria-label="On Change"
            required
          >
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            placeholder="1-20"
            min="1"
            max="20"
            id="guests"
            name="guests"
            value={bookings.guests}
            onChange={handleChange}
            aria-label="On Change"
            required
          />

          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={bookings.occasion}
            name="occasion"
            onChange={handleChange}
            aria-label="On Change"
            required
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>

          <button type="submit" className="booking-button">
            Make Your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
