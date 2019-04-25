import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React, { Component } from 'react';
import { create_update_field, create_login_action } from './actions/login-actions';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

const LogIn = withRouter(({classes, ...props}) => {
    if (props.success) props.history.push('/user');
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Resume Generator
                    </Typography>
                </Toolbar>
            </AppBar>
            { props.failed &&
                <h1>
                    Failed to Login: {props.error.message}
                </h1>
            }
            <form autocomplete="on">
                <Paper className={classes.paper}>
                    <Grid container spacing={0} justify='center' direction='column' alignItems="center">
                        <Grid item xs={6}>
                            <TextField
                                name="email"
                                label="Email"
                                margin="normal"
                                value={props.email}
                                onChange={props.onChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="password"
                                label="Password"
                                margin="normal"
                                type="password"
                                value={props.password}
                                onChange={props.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' onClick={props.login}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LogIn));
