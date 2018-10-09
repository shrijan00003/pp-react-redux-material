import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Button,
  Dialog,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
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

// we are modifing this as the react class instead of stateless
// function FrontBodyComponent(props) {
class FrontBodyComponent extends React.Component {
  constructor(props) {
    super(props);

    const { classes } = props;
    const ids = {
      print: 'front-print-div',
      frame: 'front-frame-div',
    };

    this.state = {
      dialogOpen: false,
      cssClasses: classes,
      cssIds: ids,
    };
  }
  handleDialogClick = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <div className={this.state.cssClasses.root}>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            {/* dialog with form  */}
            <Dialog
              open={this.state.dialogOpen}
              onClose={this.handleDialogClose}
              aria-labelledby="form-dialog-title"
              maxWidth="lg"
            >
              <DialogTitle
                id="form-dialog-title"
                style={{ textAlign: 'center' }}
              >
                Please Login To PhotoPayo
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleDialogClose} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
            {/* dialog with form ends here  */}

            <div id="body-bg-image">
              <Button
                onClick={this.handleDialogClick}
                variant="contained"
                color="secondary"
                className={this.state.cssClasses.button}
                size="large"
                style={{ paddingLeft: '60px', paddingRight: '60px' }}
              >
                Upload Your Picture Here
                <div style={{ paddingLeft: '10px' }}>
                  <CloudUpload className={this.state.cssClasses.rightIcon} />
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
          <Grid xs />
          <Grid xs={8} container spacing={16}>
            <MakeRow classes={this.state.cssClasses} ids={this.state.cssIds} />
          </Grid>
          <Grid xs />
        </Grid>
      </div>
    );
  }
}

FrontBodyComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontBodyComponent);
