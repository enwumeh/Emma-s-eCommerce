import React from 'react';
import { Link } from 'react-router-dom';

export default function items(props) {
  const { items } = props;
  return (
    <div>
      <h3>Items</h3>
      
      {
        items.map(item => (
          <div key={item.id}>
            {/* each food name has a link to a route that includes the id of the food. */}
            {/* this is the route to foodDetail.jsx */}
            {/* <Link to={`/foods/${food.id}`}><p>{food.name}</p></Link> */}
            <Link to={`/items/${item.id}/edit`}><button>Edit</button></Link>
            <button>Delete</button>
          </div>
        ))
      }
      {/* here: the drop down create menu */}
      <Link to='/items/new'><button>Create</button></Link>
    </div>
  )
}