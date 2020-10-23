import React from 'react'
// import { loginSeller } from '../services/auth';
import "./Home.css";



export default function Home(props) {
  const { items} = props;
  return (
    <div>
      <p className="welcome-home">Welcome seller! Here are your current items:</p>
    <ul>
      {items.map(item => (
        <li key={item.id} className="home-items"> {item.name} </li>
      ))}

      </ul>
      </div>
  )
}