import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field } from './actions/signup-actions';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (event) => {
			if (event.target.type === "checkbox") {
				dispatch(create_update_field(event.target.name, event.target.checked))
			}
			else {
				dispatch(create_update_field(event.target.name, event.target.value));
			}
		}
	}
}

const SignUp = (props) => {
	return (
		<form autocomplete="on">
			<div>
				<h2> Sign Up </h2>
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
				<label>
					<input name="terms" type="checkbox" checked={props.terms} onChange={props.onChange} required /> I have read and agree to the Term of Service and Private Policy
				</label>
			</div>

			<div>
				<input type="submit" />
			</div>
		</form>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);