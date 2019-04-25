import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field, create_add_education, create_remove_education, create_update_education, create_add_work, create_remove_work, create_update_work, create_push_user } from './actions/info-actions';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';
import firebase from './firebase';

const mapStateToProps = (state) => {
    console.log(state.info);
    return {
        ...state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => {
            dispatch(create_update_field(event.target.name, event.target.value))
        },
        addEducation: () => {
            dispatch(create_add_education());
        },
        removeEducation: id => {
            dispatch(create_remove_education(id));
        },
        updateEducation: (id, event) => {
            dispatch(create_update_education(id, event.target.name, event.target.value));
        },
        addWork: () => {
            dispatch(create_add_work());
        },
        removeWork: id => {
            dispatch(create_remove_work(id));
        },
        updateWork: (id, event) => {
            dispatch(create_update_work(id, event.target.name, event.target.value));
        },
        pushUserData: () => {
            dispatch(create_push_user());
        }
    }
}

const Info = withRouter(({history, ...props}) => {
    if (props.pushed) history.push('/user');
    if (!firebase.auth().currentUser) history.push('/login');
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
                    Phone Number: <input name="phoneNumber" value={props.phoneNumber} onChange={props.onChange} />
                </label>
            </div>
            <div>
                <label>
                    Website: <input name="website" value={props.website} onChange={props.onChange} />
                </label>
            </div>

            <div>
                <h2> Education </h2>
                {props.education.map((school, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <label>
                                    School*: <input name="school" type="text" value={school.school} onChange={(event) => props.updateEducation(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Degree*: <input name="degree" type="text" value={school.degree} onChange={(event) => props.updateEducation(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Major*: <input name="major" type="text" value={school.major} onChange={(event) => props.updateEducation(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Minor: <input name="minor" type="text" value={school.minor} onChange={(event) => props.updateEducation(index, event)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    GPA: <input name="gpa" type="number" value={school.gpa} onChange={(event) => props.updateEducation(index, event)} />
                                </label>
                            </div>
                            <input type='button' value='Remove Education' onClick={() => props.removeEducation(index)}/>
                        </div>
                    );
                })}
                <input type='button' value='Add Education' onClick={props.addEducation}/>
            </div>
            <div>
                <h2> Experience </h2>
                {props.work.map((work, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <label>
                                    Company*: <input name="company" type="text" value={work.company} onChange={event => props.updateWork(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Location: <input name="companyLocation" type="text" value={work.companyLocation} onChange={event => props.updateWork(index, event)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Position*: <input name="position" type="text" value={work.position} onChange={event => props.updateWork(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Start Month*: <input name="startMonth" type="text" value={work.start} onChange={event => props.updateWork(index, event)} required/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Current Position: <input name="currentPosition" type="checkbox" value={work.currentPosition} onChange={event => props.updateWork(index, event)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    End Month: <input name="endMonth" type="text" value={work.end} onChange={event => props.updateWork(index, event)} />
                                </label>
                            </div>
                            <input type='button' value='Remove Work' onClick={() => props.removeWork(index)}/>
                        </div>
                    );
                })}
            <input type='button' value='Add Work' onClick={props.addWork}/>
        </div>

        <div>
            <input onClick={props.pushUserData} value="Update Info" type="button"/>
        </div>
        </form>
    );
})

export default connect(mapStateToProps, mapDispatchToProps)(Info);
