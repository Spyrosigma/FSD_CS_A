import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar