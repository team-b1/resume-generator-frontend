import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App"> 
                <header className="App-header">
                    <h1>Resume Generator</h1>
                    <p>Start of React App</p>
                </header>
            </div>
        );
    }
}

export default App;
