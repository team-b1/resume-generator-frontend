import { createStore, applyMiddleware } from 'redux'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Info from './enter-info';
import Home from './Home';
import LogIn from './login';
import SignUp from './signup';
import UserPage from './userpage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/info" component={Info} />
                    <Route path="/user" component={UserPage} />
                </div>
            </Router>
        );
    }
}

export default App;
