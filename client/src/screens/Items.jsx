import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import { postItem, destroyItem } from "../services/items";
import "./Items.css";

const Items = (props) => {
  const { items, deleteItem } = props;
  const history = useHistory();
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
    <div className="items-main">
      <h3 className = "items-heading">Items</h3>

      {items.map((item) => (
        <div key={item.id}>
          <span className="items-rendered">
            {item.name} {item.price}
          </span>
          <Link to={`/items/${item.id}/edit`}>
            <button className="edit-item">Edit</button>
          </Link>
          <button onClick={(e) => {
            deleteItem(item.id);
            history.push('/items')
        }} className="delete-item">Delete</button>
        </div>
      ))}

      <form
        onSubmit={(e) => {
          // e.preventDefault();
          postItem(formData);
        }}
      >
        <h3 className="create-item-heading">Create Item</h3>
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
        <button className="create-button">Create</button>
      </form>

    </div>
  );
};

export default Items;
