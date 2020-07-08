import React from 'react';
import logo from '../../public/city-tour-logo.png';
import '../styles/components/navbar.scss'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">        
        <img src={logo} alt="city tour logo" height="50"></img> 
        <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
        <li>
          <a href="/" className="nav-link">About</a>
        </li>
        <li>
          <a href="/" className="nav-link active">Tours</a>
        </li>
        </ul>

        
      </nav>
      
    )
  }
}

export default Header;
//<link rel="icon" type="image/png" href="/favicon.png"></link>
//  console.log({logo});
// <Navbar>Home</Navbar>
//         <Navbar>About</Navbar>
//         <Navbar>Tours</Navbar>