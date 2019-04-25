import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field, create_login_action } from './actions/login-actions';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        ...state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => {
            dispatch(create_update_field(event.target.name, event.target.value))
        },
        login: () => {
            dispatch(create_login_action())
        }
    }
}

const LogIn = withRouter((props) => {
    console.log(props);
    if (props.success) props.history.push('/user');
    return (
        <form autocomplete="on">
            <div>
                <h2> Log In </h2>
            </div>
            { props.failed &&
                <h1>
                    Failed to Login: {props.error.message}
                </h1>
            }
            <div>
                <label>
                    Email: <input name="email" type="email" value={props.email} onChange={props.onChange} required/>
                </label>
            </div>
            <div>
                <label>
                    Password: <input name="password" type="password" value={props.password} onChange={props.onChange} required/>
                </label>
            </div>

            <div>
                <input onClick={props.login} type='button' value='Login'/>
            </div>
        </form>
    );
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
