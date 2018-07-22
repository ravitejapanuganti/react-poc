import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login/Login';

class App extends Component {  
  
<<<<<<< HEAD
  
  render(props) {

    return (
     
=======
  render(props) {

    return (
>>>>>>> 3eb7c25308a2dae1fc3e7f3b720ef945a4a64f52
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.name}</h1>
        </header>
        <br></br>
        <div className="App-border">
        <label>My Name:: <input type="text" value={this.props.name + this.props.l}></input></label><br></br>
        <br></br>
<<<<<<< HEAD
       <input type = "submit"  ></input>
=======
       <input type = "submit" ></input>
>>>>>>> 3eb7c25308a2dae1fc3e7f3b720ef945a4a64f52
        </div>
          <Login/>
        </div>
    );
  }
}

export default App