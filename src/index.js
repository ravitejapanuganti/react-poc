import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';


const ele = {
    name:new Date(),
    l:0,
    clock:Clock.js,
};

ReactDOM.render(<App  name= {ele.name.toDateString()} l={ele.l}/>, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root1'));


registerServiceWorker();
setInterval(App, 1000);
