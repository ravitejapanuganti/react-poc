import React from 'react';
import PropTypes from 'prop-types';

import Sidenav from './Sidenav';

import './base.css';


const App = ({ children }) => {
  return (
    <div>
      <Sidenav />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
