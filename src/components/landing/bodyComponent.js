import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import './landing.css';
import MakeRow from './makeRow';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FrontBodyComponent extends Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.state = {
      classes,
      referrer: false,
    };
  }
  handleClickForUploadePhotos = () => {
    console.log('upload image clicked');
    this.setState({ referrer: '/uploadImages' });
  };
  render() {
    const ids = {
      print: 'front-print-div',
      frame: 'front-frame-div',
    };

    // redirecting if we have referre
    const { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <div className={this.state.classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <div id="body-bg-image">
              <Button
                variant="contained"
                color="secondary"
                className={this.state.classes.button}
                size="large"
                style={{ paddingLeft: '60px', paddingRight: '60px' }}
                onClick={this.handleClickForUploadePhotos}
              >
                Upload Your Picture Here
                <div style={{ paddingLeft: '10px' }}>
                  <CloudUpload className={this.state.classes.rightIcon} />
                </div>
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={40}>
          <Grid item xs={12}>
            <Typography variant="display4" gutterBottom align="center">
              OUR SERVICES
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={40}>
          <Grid item xs />
          <Grid item xs={8} container spacing={16}>
            <MakeRow classes={this.state.classes} ids={ids} />
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

FrontBodyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontBodyComponent);
