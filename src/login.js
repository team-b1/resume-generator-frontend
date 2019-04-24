import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field } from './actions/login-actions';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (event) => {
			dispatch(create_update_field(event.target.name, event.target.value))
		}
	}
}

const LogIn = (props) => {
	return (
		<form autocomplete="on">
			<div>
				<h2> Log In </h2>
			</div>

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
				<input type="submit" />
			</div>
		</form>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);