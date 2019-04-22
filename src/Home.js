import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <header className="Home-header">
                <h1>Resume Generator</h1>
                <p>Start of React App</p>     
            </header>
        );
    }
}

export default Home;