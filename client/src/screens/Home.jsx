import React from 'react'


export default function Home(props) {
  const { items } = props;
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      Home
    </div>
  )
}