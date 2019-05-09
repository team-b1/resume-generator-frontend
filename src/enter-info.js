import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field, create_add_education, create_remove_education, create_update_education, create_add_work, create_remove_work, create_update_work, create_push_user } from './actions/info-actions';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';
import firebase from './firebase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SnackbarProvider, withSnackbar } from 'notistack';

const mapStateToProps = (state) => {
    console.log(state.info);
    return {
        ...state.info
    }
}

const thresholds =
    { 'description': 250
    }

const mapDispatchToProps = (dispatch, props) => {
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
            if (thresholds[event.target.name] && event.target.value.length > thresholds[event.target.name]) {
                console.log(props);
                props.enqueueSnackbar('"' + event.target.name + '"' + ' might be a little too long! Consider shortening it.', { variant: 'warning' } );
            }
            dispatch(create_update_work(id, event.target.name, event.target.value));
        },
        pushUserData: () => {
            dispatch(create_push_user());
        }
    }
}

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    paper: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 5,
        margin: 'auto',
        padding: theme.spacing.unit * 2
    }
});

const Info = withRouter(({classes, history, ...props}) => {
    if (props.pushed) history.push('/user');
    if (!firebase.auth().currentUser) history.push('/login');
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Resume Generator
                    </Typography>
                </Toolbar>
            </AppBar>
            <form autocomplete="on" className={classes.grow}>
                <Grid container spacing={0} justify='center' direction='column' alignItems="center">
                    <Grid item xs={12}>
                        <h2> Personal </h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="First Name" name="firstName" type="text" value={props.firstName} onChange={props.onChange} required/>
                        <TextField fullWidth label="Last Name" name="lastName" type="text" value={props.lastName} onChange={props.onChange} required/>
                        <TextField fullWidth label="Location" name="locations" type="text" value={props.locations} onChange={props.onChange} />
                        <TextField fullWidth label="Email" name="email" type="email" value={props.email} onChange={props.onChange} required/>
                        <TextField fullWidth label="Phone Number" name="phoneNumber" value={props.phoneNumber} onChange={props.onChange} />
                        <TextField fullWidth label="Website" name="website" value={props.website} onChange={props.onChange} />
                    </Grid>

                    <h2> Education </h2>
                    {props.education.map((school, index) => {
                        return (
                            <Grid container spacing={0} justify='center' direction='column' alignItems="center">
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Name" name="school" type="text" value={school.school} onChange={(event) => props.updateEducation(index, event)} required/>
                                    <TextField fullWidth label="Degree" name="degree" type="text" value={school.degree} onChange={(event) => props.updateEducation(index, event)} required/>
                                    <TextField fullWidth label="Major" name="major" type="text" value={school.major} onChange={(event) => props.updateEducation(index, event)} required/>
                                    <TextField fullWidth label="Minor" name="minor" type="text" value={school.minor} onChange={(event) => props.updateEducation(index, event)} />
                                    <TextField fullWidth label="Start Date" name="start" type="text" value={school.start} onChange={event => props.updateEducation(index, event)} required/>
                                    <TextField fullWidth label="End Date" name="end" type="text" value={school.end} onChange={event => props.updateEducation(index, event)} />
                                    <TextField fullWidth label="GPA" name="gpa" type="number" value={school.gpa} onChange={(event) => props.updateEducation(index, event)} />
                                    <Button variant='contained' color='secondary' onClick={() => props.removeEducation(index)}>
                                        Remove Education
                                    </Button>
                                </Grid>
                            </Grid>
                        );
                    })}
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary' onClick={props.addEducation}>
                            Add Education
                        </Button>
                    </Grid>
                    <h2> Experience </h2>
                    {props.work.map((work, index) => {
                        return (
                            <Grid container spacing={0} justify='center' direction='column' alignItems="center">
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Company" name="company" type="text" value={work.company} onChange={event => props.updateWork(index, event)} required/>
                                    <TextField fullWidth label="Company Location" name="companyLocation" type="text" value={work.companyLocation} onChange={event => props.updateWork(index, event)} />
                                    <TextField fullWidth label="Position" name="position" type="text" value={work.position} onChange={event => props.updateWork(index, event)} required/>
                                    <TextField fullWidth label="Start Date" name="start" type="text" value={work.start} onChange={event => props.updateWork(index, event)} required/>
                                    <TextField fullWidth label="End Date" name="end" type="text" value={work.end} onChange={event => props.updateWork(index, event)} />
                                    <TextField fullWidth label="Description" name="description" type="textarea" multiline={true} value={work.description} onChange={event => props.updateWork(index, event)}/>
                                    <Button variant='contained' color='secondary' onClick={() => props.removeWork(index)}>
                                        Remove Work
                                    </Button>
                                </Grid>
                            </Grid>
                        );
                    })}
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={props.addWork}>
                        Add Work
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Button variant='contained'  onClick={props.pushUserData}>
                        Update Data
                    </Button>
                </Grid>
                </Grid>
            </form>
        </div>
    );
})

export default withStyles(styles)(withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Info)));
