import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';

const App = () => {

  

  return (
    <div>
      <NavBar />
      <div className="content">
        <Content />
      </div>
    </div>
  );
  }

export default App;
