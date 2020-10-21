import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentSeller, handleLogout } = props;

  return (
    <div>
      <h1>Emmas's eCommerce</h1>
      {
        currentSeller ?
          <>
            <p>{currentSeller.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentSeller &&
        <>
          <Link to='/items'>Items</Link>
          <Link to='/customers'>Customers</Link>
        </>
      }
    </div>
  )
}