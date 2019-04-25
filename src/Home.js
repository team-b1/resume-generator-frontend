import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


const Home = withRouter(({history}) => (
    <div>
        <button type='button' onClick={() => { history.push('/login') }}>
            Login
        </button>
        <button type='button' onClick={() => { history.push('/signup') }}>
            Sign Up
        </button>
    </div>
));

export default Home
