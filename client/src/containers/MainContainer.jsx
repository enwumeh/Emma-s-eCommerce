import React, { useState, useEffect } from "react";
import { getAllCustomers } from "../services/customers";
import { getAllItems, putItem, destroyItem } from "../services/items";
import {  verifySeller } from '../services/auth';
import { Route, Switch, useHistory } from "react-router-dom";
import Customers from "../screens/Customers";
import Items from "../screens/Items";
import ItemEdit from "../screens/ItemEdit";
import Home from "../screens/Home";
// import "./MainContainer.css";

export default function MainContainer() {
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [seller, setCurrentSeller] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getAllItems();
      console.log(itemsData);
      setItems(itemsData);
    };
    const fetchCustomers = async () => {
      const customersData = await getAllCustomers();
      setCustomers(customersData);
    };
    const handleVerify = async () => {
      const sellerData = await verifySeller();
      setCurrentSeller(sellerData)
    };
    handleVerify();
    fetchItems();
    fetchCustomers();
  }, []);

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
    setItems((prevState) =>
      prevState.filter((item) => {
        return item.id !== id;
      })
    );
    history.push("/items");
  };

  return (
    <div className="main-contain-style">
      <Switch>
        <Route path="/customers">
          <Customers customers={customers} />
        </Route>
        <Route path="/items/:id/edit">
          <ItemEdit handleItemEdit={handleItemEdit} items={items} />
        </Route>
        <Route path="/items">
          <Items items={items} deleteItem={deleteItem} />
        </Route>
        <Route path="/">
          <Home items={items} seller={seller}/>
        </Route>
      </Switch>
    </div>
  );
}
