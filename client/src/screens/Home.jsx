import React from "react";
import "./Home.css";

export default function Home(props) {
  const { items, seller } = props;
  return (
    <div>
      <p className="welcome-home">
        <p>
          Welcome <span className="seller-word" >{seller.username}</span>! Here are your current items:</p>

      </p>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="home-items">
            
            {item.name}
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
