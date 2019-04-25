import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field } from './actions/info-actions';
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

const Info = (props) => {
	return (
		<form autocomplete="on">
			<div>
				<h2> Personal </h2>
			</div>

			<div>
				<label>
					First Name*: <input name="firstName" type="text" value={props.firstName} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Last Name*: <input name="lastName" type="text" value={props.lastName} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Location: <input name="locations" type="text" value={props.locations} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					Email*: <input name="email" type="email" value={props.email} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Phone Number: <input name="phoneNumber" type="tel" value={props.phoneNumber} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					Website: <input name="website" type="url" value={props.website} onChange={props.onChange} />
				</label>
			</div>

			<div>
				<h2> Education </h2>
			</div>

			<div>
				<label>
					School*: <input name="school" type="text" value={props.school} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Degree*: <input name="degree" type="text" value={props.degree} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Major*: <input name="major" type="text" value={props.major} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Minor: <input name="minor" type="text" value={props.minor} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					GPA: <input name="gpa" type="number" value={props.gpa} onChange={props.onChange} />
				</label>
			</div>

			<div>
				<h2> Experience </h2>
			</div>

			<div>
				<label>
					Company*: <input name="company" type="text" value={props.company} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Location: <input name="companyLocation" type="text" value={props.companyLocation} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					Position*: <input name="position" type="text" value={props.position} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Start Month*: <input name="startMonth" type="month" value={props.startMonth} onChange={props.onChange} required/>
				</label>
			</div>
			<div>
				<label>
					Current Position: <input name="currentPosition" type="checkbox" checked={props.currentPosition} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					End Month: <input name="endMonth" type="text" value={props.endMonth} onChange={props.onChange} />
				</label>
			</div>
			<div>
				<label>
					Description: <textarea rows="4" cols="50" name="description" value={props.description} onChange={props.onChange} />
				</label>
			</div>

			<div>
				<input type="submit" />
			</div>
		</form>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);