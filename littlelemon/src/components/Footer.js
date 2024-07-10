

import React from 'react'
import logo from '../assets/logo.png'
export default function Footer() {
  return (
<footer>
<img  src={logo} alt="Little lemon logo" width={300}/>
<ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
      <div>
        <a>Contact</a>
        <a>Adresss</a>
        <a>Phone number</a>
        <a>Email</a>
      </div>
      <div>
        <a>Social media links</a>
        <a>Adresss</a>
        <a>Phone number</a>
        <a>Email</a>
      </div>
</footer>
  )
}