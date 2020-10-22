import React from 'react'
import "./Customers.css";


export default function Customers(props) {
  const { customers } = props;
  return (
    <div>
      <h3 className="customers-heading">Customers</h3>
      {
        customers.map(customer => (
          <div className="customer-text">
            <p key={customer.id}>{customer.name}</p>
          </div>
        ))
      }
      <div className="blank">
      </div>
    </div>
  )
}