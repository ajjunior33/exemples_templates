import React from 'react';
import logo from '../../assets/img/Logo.svg';
import './style.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav class='menu'>
          <ul>
            <a href="#"><li>About</li></a> 
            <a href="#"><li>Features</li></a>  
            <a href="#"><li>Pricing</li></a> 
            <a href="#"><li>Testimonials</li></a> 
            <a href="#"><li>Help</li></a> 
          </ul>
        </nav>

        <div class="access">
          <button class="btn btn-default">Sign In</button>
          <button class="btn btn-danger">Sing Up</button>
        </div>
      </header>
  );
}

export default Header;
