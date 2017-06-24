import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header-wrap">
          <Header />
        </div>
        <div className="main-wrap">
          <Main />
        </div>
        <div className="footer-wrap">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
