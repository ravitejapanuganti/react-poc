import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Clock from '../Clock';

class Login extends Component {
    render(){
        return(
            <BrowserRouter>
            <Route path='/as' component={Clock} /> 
           
           </BrowserRouter> 
           
        )
        
    }
}
export default Login