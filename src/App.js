import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import Menu from "./components/smallComponents/Menu";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
