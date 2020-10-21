import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handleItemEdit, items } = props;
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the item info that we need in our list of items
      // we can use ".find" to select the single item from the list by its id
      const { name } = items.find(item => item.id === Number(id));
      setFormData({ name });
    }
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our items list
    // we conditionally run "prefillFormData" based on if there are items in our list
    if (items.length) {
      prefillFormData()
    }
    // additionally we put "items" in our array to watch for changes
    // when "items" updates, we will rerun our "useEffect" function
  }, [items, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleItemEdit(id, formData);
    }}>
      <h3>Edit Item</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}
