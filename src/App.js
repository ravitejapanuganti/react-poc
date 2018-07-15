import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
    		
    		
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br></br>
        <div className="App-border">
        <label>My Name:: <input type="text"/></label><br></br>
        <br></br><input type ="submit" value="submit"/>
        </div>
        </div>
    );
  }
}

export default App;
