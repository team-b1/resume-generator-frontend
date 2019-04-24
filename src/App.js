import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from './enter-info';
import Home from './Home';
import LogIn from './login'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/info" component={Info} />
                </div>
            </Router>
        );
    }
}

export default App;
