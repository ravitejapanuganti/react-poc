import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Nav/>, document.getElementById('root1'));
ReactDOM.render(<Main />, document.getElementById("root"));

registerServiceWorker();
