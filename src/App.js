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
        <Sidebar/>
        <Footer/>
        <div className='main-container'>
          <Header/>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
