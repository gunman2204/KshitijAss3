import React from 'react'
import logo from './image/rupeeicon.png'
import Hammenu from './image/hammenu.jpg'
// import addExpense from './AddExpense.js';


export default function Navbar() {
  return (
    <>
      <nav id='nav' className="d-flex justify-content-evenly navbar navbar-dark bg-dark sticky-top">
        <a className="navbar-brand icon" href="https://www.google.com" >
          <img src={logo} width="36" height="36" alt="siteicon" />
          &nbsp;Bachat
        </a>
        <a href='#navlinks' id='hammenu'><img src={Hammenu} alt='hammenu' height='25px' /></a>
        <ul id='navlinks' className="nav justify-content-center">
          <a href='#' id='closenav' className='link'>X</a>

          <li className="nav-item">
            <a id='home' className="nav-link active link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link " href="#expense">Expense List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#addExpense" >Add Expense</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link " href="">Stats</a>
          </li>
        </ul>

      </nav>
    </>

  )
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string

// }
// Navbar.defaultProps = {
//   title: 'set title here',
//   aboutText: 'About Text Here'
// }

