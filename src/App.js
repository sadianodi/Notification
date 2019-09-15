import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar/>
        <h1 style={{textAlign:"center"}}>Welcome Doctor!</h1>
    </div>
  );
}

export default App;
