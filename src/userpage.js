import React, { Component } from 'react';
import firebase from './firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        ...state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const UserPage = withRouter(({ history, ...props }) => {
    console.log(firebase.auth().currentUser);
    if (!firebase.auth().currentUser) history.push('/login');
    return (<div>
        <h1>Welcome {props.firstName}!</h1>
        <button type='button' onClick={() => { history.push('/info') }}>
            User Data
        </button>
        <button type='button' onClick={() => { history.push('/user/generate_resume') }}>
            Generate Resume
        </button>
    </div>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
