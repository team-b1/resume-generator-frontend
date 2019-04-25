import React, { Component } from 'react';
import firebase from './firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state) => {
    return {
        ...state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 5
    },
});

const UserPage = withRouter(({ classes, history, ...props }) => {
    console.log(firebase.auth().currentUser);
    if (!firebase.auth().currentUser) history.push('/login');
    return (<div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Resume Generator
                </Typography>
            </Toolbar>
        </AppBar>
        <Paper className={classes.root}>
            <Grid container spacing={24} justify='center' direction='column' alignItems="center">
                <Grid item xs={12}>
                    <h1>Welcome {props.firstName}!</h1>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' onClick={() => { history.push('/info') }}>
                        User Data
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' onClick={() => { history.push('/generate') }}>
                        Generate Resume
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </div>
    )
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UserPage));
