import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header(props) {
  const { currentSeller, handleLogout } = props;

  return (
    <div className="main-header">
  <Link className="app-title" to='/'>Emma's eCommerce</Link>

      {
        currentSeller ?
          <span className='login-seller-info'>
            <p>{currentSeller.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </span>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
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