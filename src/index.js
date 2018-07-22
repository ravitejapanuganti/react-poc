
import ReactDOM, { render } from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';

ReactDOM.render(<Root />, document.getElementById('root'));
//ReactDOM.render(<Nav/>, document.getElementById('root1'));
//ReactDOM.render(<Main />, document.getElementById("root"));



registerServiceWorker();

