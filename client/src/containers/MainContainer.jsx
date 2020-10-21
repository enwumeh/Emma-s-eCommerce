import React, { useState, useEffect } from 'react'
import { getAllCustomers } from '../services/customers';
import { getAllItems, postItem, putItem } from '../services/items';
import { Route, Switch, useHistory } from 'react-router-dom';
// import Customers from '../screens/Customers';
import Items from '../screens/Items';
import ItemEdit from '../screens/ItemEdit';
// import FoodDetail from '../screens/FoodDetail';

export default function MainContainer() {
  const [items, setItems] = useState([]);
   const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getAllItems();
      setItems(itemsData);
    }
    const fetchCustomers = async () => {
      const customersData = await getAllCustomers();
      setCustomers(customersData);
    }
    fetchItems();
    fetchCustomers();
  }, [])

  const handleItemCreate = async (itemData) => {
    const newItem = await postItem(itemData);
    setItems(prevState => ([...prevState, newItem]));
    history.push('/items')
  }

  const handleItemEdit = async (id, itemData) => {
    const updatedItem = await putItem(id, itemData);
    setItems(prevState => prevState.map(item => {
      return item.id === Number(id) ? updatedItem : item
    }))
    history.push('/items')
  }

  return (
    <Switch>
      {/* <Route path='/flavors'>
         <Flavors
          flavors={flavors}
        /> 
      </Route> */}
      <Route path='/item/new'>
        {/* <FoodCreate
          handleItemCreate={handleItemCreate}
        /> */}
      </Route>
      <Route path='/items/:id/edit'>
        <ItemEdit
          handleItemEdit={handleItemEdit}
          items={items}
        />
      </Route>
      <Route path='/foods/:id'>
        {/* <FoodDetail flavors={flavors} /> */}
      </Route>
      <Route path='/items'>
        <Items
          items={items}
        />
      </Route>
    </Switch>
  )
}
