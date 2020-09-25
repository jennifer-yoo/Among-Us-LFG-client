import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './components/auth/Registration'
import LogIn from './components/auth/LogIn'
import GroupForm from "./components/GroupForm"

function App() {
  return (
    <div className="App">
      <Registration />
      <LogIn />
      <GroupForm />
    </div>
  );
}

export default App;
