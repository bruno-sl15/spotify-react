import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Footer/>
        <Main/>
      </div>
    );
  }
}

export default App;
