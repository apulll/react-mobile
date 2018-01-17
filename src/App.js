import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Perry!</h1>
          <Button type="primary" icon="check-circle-o">primary111</Button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
