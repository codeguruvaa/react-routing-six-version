import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    
                </ul>
            </nav>
        </header>

        <h2>About Page</h2>
    </div>
  )
}
