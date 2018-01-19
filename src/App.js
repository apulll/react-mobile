import React, { Component } from 'react';
import logo from 'assets/svg/logo.svg';

// import male from 'utils/default-male.png';
import './App.css';
import { Button, Radio  } from 'antd-mobile';


const LogoCom = (props) => {
  return (
    <svg><use xlinkHref="#logo" /></svg>
  )
}

// export default Logo;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"></img>*/}
          <LogoCom />
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
