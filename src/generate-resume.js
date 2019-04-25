import React, { Component } from 'react';
import firebase from './firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { create_generate_resume } from './actions/resume-generator-actions.js'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = (state) => {
    return {
        ...state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateResume: (id) => {
            dispatch(create_generate_resume(id));
        }
    }
}

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
})

const GenerateResume = withRouter(({ classes, history, ...props }) => {
    console.log(firebase.auth().currentUser);
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
        <Grid container spacing={0} justify='center' direction='column' alignItems="center">
            <h1>Select a Resume Template</h1>
            <Card className={classes.card}>
                <CardHeader
                    title="Template 1"
                    subheader="Simple"
                />
                <CardContent>
                <CardMedia
                  className={classes.media}
                  image="/static/thumb1.png"
                />
                    <Grid container spacing={0} justify='center' direction='column' alignItems="center">
                        <Button variant="contained" onClick={() => props.generateResume(1)}>
                            Select
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </div>
    )
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GenerateResume));
