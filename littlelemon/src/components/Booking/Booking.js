import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../../utils/temp";
import "./BookingForm.styles.css";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default Booking; // Default export
