import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Button,
  // Dialog,
  // TextField,
  Typography,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
  // DialogContentText,
} from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import './landing.css';
import MakeRow from './makeRow';

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

const handleClickForUploadePhotos = props => {
  props.unsetLandingPage();
};

function FrontBodyComponent(props) {
  const { classes } = props;
  const ids = {
    print: 'front-print-div',
    frame: 'front-frame-div',
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <div id="body-bg-image">
            <Button
              onClick={handleClickForUploadePhotos(props)}
              variant="contained"
              color="secondary"
              className={classes.button}
              size="large"
              style={{ paddingLeft: '60px', paddingRight: '60px' }}
            >
              Upload Your Picture Here
              <div style={{ paddingLeft: '10px' }}>
                <CloudUpload className={classes.rightIcon} />
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
          <MakeRow classes={classes} ids={ids} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

FrontBodyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontBodyComponent);
