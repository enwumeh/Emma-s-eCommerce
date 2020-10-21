import React, { useState } from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  const { items } = props;

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Items</h3>

      {items.map((item) => (
        <div key={item.id}>
          {/* each food name has a link to a route that includes the id of the food. */}
          {/* this is the route to foodDetail.jsx */}
          {/* <Link to={`/foods/${food.id}`}><p>{food.name}</p></Link> */}
          <Link to={`/items/${item.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      ))}
      {/* here: the drop down create menu */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // handleItemEdit(id, formData);
        }}
      >
        <h3>Create Item</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <button>Create</button>
      </form>

      <Link to="/items/new">
        <button>Create</button>
      </Link>
    </div>
  );
};

export default Items;
