import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header(props) {
  const { currentSeller, handleLogout } = props;

  return (
    <div className="header-main-div">
      <br></br>
      <br></br>
  <Link className="app-title" to='/'>Emma's eCommerce</Link>
      {
        currentSeller ?
          <div className='login-seller-info'>
            <p className="current-user">{currentSeller.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          :
          <Link to='/login'>Login/Register</Link>
      }
      {
        currentSeller &&
        <>
          <Link className="items-customers-link" to='/items'>Items</Link>
          <Link className="items-customers-link"to='/customers'>Customers</Link>
        </>
      }
    </div>
  )
}