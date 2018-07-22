import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';


<<<<<<< HEAD
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Nav/>, document.getElementById('root1'));
ReactDOM.render(<Main />, document.getElementById("root"));
=======
const ele = {
    name:new Date(),
    l:0,
    clock:Clock.js,
};

ReactDOM.render(<App  name= {ele.name.toDateString()} l={ele.l}/>, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root1'));

>>>>>>> 3eb7c25308a2dae1fc3e7f3b720ef945a4a64f52

registerServiceWorker();
setInterval(App, 1000);
