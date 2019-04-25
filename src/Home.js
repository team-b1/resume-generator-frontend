import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 5
    },
    grow: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing.unit
    }
});

const Home = withRouter(({history, classes}) => (
    <div>
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
                    <Button size='large' variant='contained' color='primary' onClick={() => { history.push('/login') }}>
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button size='large' variant='contained' color='primary' onClick={() => { history.push('/signup') }}>
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </div>
));

export default withStyles(styles)(Home)
