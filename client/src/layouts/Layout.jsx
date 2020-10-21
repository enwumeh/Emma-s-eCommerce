import React from 'react'
import Header from '../components/Header'

export default function Layout(props) {
  const { currentSeller, handleLogout } = props;
  return (
    <div className="App">
      <Header
        currentSeller={currentSeller}
        handleLogout={handleLogout}
      />
      {props.children}
    </div>
  )
}