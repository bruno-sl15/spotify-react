import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
