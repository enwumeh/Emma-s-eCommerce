import React, { useState, useEffect } from "react";
import { getAllCustomers } from "../services/customers";
import { getAllItems, putItem, destroyItem } from "../services/items";
import { Route, Switch, useHistory } from "react-router-dom";
import Customers from "../screens/Customers";
import Items from "../screens/Items";
import ItemEdit from "../screens/ItemEdit";
import Home from "../screens/Home";


export default function MainContainer() {
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getAllItems();
      console.log(itemsData)
      setItems(itemsData);
     
    };
    const fetchCustomers = async () => {
      const customersData = await getAllCustomers();
      setCustomers(customersData);
    };
    fetchItems();
    fetchCustomers();
  }, []);

  // const handleItemCreate = async (itemData) => {
  //   const newItem = await postItem(itemData);
  //   setItems(prevState => ([...prevState, newItem]));
  //   history.push('/items')
  // }

  const handleItemEdit = async (id, itemData) => {
    const updatedItem = await putItem(id, itemData);
    setItems((prevState) =>
      prevState.map((item) => {
        return item.id === Number(id) ? updatedItem : item;
      })
    );
    history.push("/items");
  };

  const deleteItem = async (id) => {
    await destroyItem(id);
    setItems(prevState => prevState.filter(item => {
      return item.id !== id
    }))
    history.push('/items');
  }


  return (
    <Switch>
      <Route path="/customers">
        <Customers customers={customers} />
      </Route>
      {/* <Route path='/item/new'>
        <ItemCreate
          handleItemCreate={handleItemCreate}
        />
      </Route> */}
      <Route path="/items/:id/edit">
        <ItemEdit handleItemEdit={handleItemEdit} items={items} />
      </Route>
      <Route path="/items">
        <Items items={items} deleteItem={deleteItem}/>
      </Route>
      <Route path='/'>
        <Home items={items}  />
      </Route>
    </Switch>
  );
}
