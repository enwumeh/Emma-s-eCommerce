import React from 'react'
import "./Home.css";



export default function Home(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className="home-items" >{item.name} </li>
      ))}

    </ul>
  )
}