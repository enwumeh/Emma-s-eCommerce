import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import { loginSeller, registerSeller, removeToken, verifySeller } from './services/auth';

import { Route, useHistory, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentSeller, setCurrentSeller] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const sellerData = await verifySeller();
      setCurrentSeller(sellerData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const sellerData = await loginSeller(loginData);
    setCurrentSeller(sellerData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const sellerData = await registerSeller(registerData);
    setCurrentSeller(sellerData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentSeller(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <Layout
      currentSeller={currentSeller}
      handleLogout={handleLogout}
    >
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;