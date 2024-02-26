import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
