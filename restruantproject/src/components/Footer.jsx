import React from 'react'
import './App.css'

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service">Terms of Service</a> | 
        <a href="/contact">Contact Us</a>
      </p>
      <p>Follow us on:
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </footer>
  )
}

export default Footer