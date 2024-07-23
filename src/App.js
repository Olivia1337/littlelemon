import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking"; // Updated import to match default export
import ConfirmedBooking from "./components/Booking/ConfirmedBooking";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />{" "}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
