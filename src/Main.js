import React, { Component } from 'react';
import Home from './web/Home';
import Stuff from './web/Stuff';
import Contact from './web/Contact';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
<HashRouter>
    <div>
        <ul className = "header">
        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/stuff">Stuff</NavLink></li>
        <li><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
        <div className = "content">
        <Route path = "/" Component ={Home}/>
        <Route path = "/stuff" Component ={Stuff}/>
        <Route path = "/contact" Component ={Contact}/>
        </div>
    </div>
</HashRouter>
        );
    }
}
export default Main;