import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './checkBoxIcon';
import { StayPrimaryPortrait, Cancel, ArrowForward } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import UID from 'uuid/v4';
import { Redirect } from 'react-router-dom';

import {
  GridList,
  GridListTile,
  Dialog,
  IconButton,
  ListSubheader,
  GridListTileBar,
  Typography,
  Grid,
  Paper,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
  icon: {
    color: '#fff',
  },
});

class UploadImageView extends React.Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.state = {
      loading: true,
      uploading: false,

      images: [],

      selectedImages: [],
      selectedIndexes: [],

      isImageOpen: false,
      currentImg: '',

      classes,

      imageArray: [],

      referrer: false,
    };
  }

  handleCheckPicture = async (img, imgIndex) => {
    if (this.state.selectedIndexes.indexOf(imgIndex) === -1) {
      await this.setState({
        selectedIndexes: [...this.state.selectedIndexes, imgIndex],
        selectedImages: [...this.state.selectedImages, img],
      });
    } else {
      let selectedIndexArray = [...this.state.selectedIndexes];
      let selectedImageArray = [...this.state.selectedImages];

      let indexOfIndex = selectedIndexArray.indexOf(imgIndex);
      let indexOfSelectedImage = selectedImageArray.indexOf(img);

      selectedIndexArray.splice(indexOfIndex, 1);
      selectedImageArray.splice(indexOfSelectedImage, 1);

      await this.setState({
        selectedIndexes: selectedIndexArray,
        selectedImages: selectedImageArray,
      });
    }
  };

  handleImgClose = () => {
    this.setState({
      isImageOpen: false,
    });
  };

  componentDidMount() {}

  processWithOrderHandler = () => {
    console.log('we are storing selected pictures in the store');
    this.props.uploadSelectedImagesBegins();
    if (this.state.selectedImages.length > 0) {
      this.props.uploadSelectedImagesSuccess(this.state.selectedImages);
    } else {
      console.error('please select imagess');
      this.props.uploadSelectedImagesFailure({
        error: 'Image Not selected !!!!!!! Please select images',
      });
    }
    this.setState({
      referrer: '/orderpage',
    });
  };

  onInputChange = async e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 30) {
      const msg = 'Only 30 images can be uploaded at a time';
      alert(msg);
    }

    const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

    const newFileArray = files.map((file, index) => {
      if (types.every(type => file.type !== type)) {
        errs.push('file type not matched');
        return false;
      }
      if (file.size > 1500000) {
        errs.push('file is too large');
        return false;
      } else {
        return {
          id: UID(),
          imgIndex: index,
          actualFile: file,
          imgUrl: URL.createObjectURL(file),
        };
      }
    });

    this.props.uploadImagesBegins();
    if (errs.length > 0) {
      this.props.uploadImagesFailure(errs);
    } else {
      await this.setState({
        imageArray: [...this.state.imageArray, ...newFileArray],
      });

      this.props.uploadImagesSuccess(this.state.imageArray);
    }
  };

  render() {
    //check if there is referrer and then redirect
    const { referrer } = this.state;
    if (referrer) {
      return <Redirect to={referrer} />;
    }
    let imageListContent;
    const { isImageOpen, currentImg, imageArray } = this.state;
    const { isUploaded, uploadedImages } = this.props;

    console.log('uploaded images in uploadimgage view', uploadedImages);
    let isProcessButtonDisabled;
    if (isUploaded) {
      isProcessButtonDisabled = false;
    } else {
      isProcessButtonDisabled = true;
    }

    if (uploadedImages.length > 0) {
      imageListContent = (
        <div className={this.state.classes.root}>
          <form>
            <GridList cellHeight={180} className={this.state.classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">
                  Your Uploaded Pictures Here will be expired after 30 days
                  !!!!!!!!!!!!!!!!!!!!!!!!!!
                </ListSubheader>
              </GridListTile>
              {uploadedImages.map((img, index) => (
                <GridListTile key={index}>
                  <img src={img.imgUrl} alt="title" />
                  <GridListTileBar
                    actionIcon={
                      <IconButton
                        className={this.state.classes.icon}
                        onClick={() => this.handleCheckPicture(img, img.id)}
                      >
                        <CheckBoxIcon
                          imgIndex={img.id}
                          indexArray={this.state.selectedIndexes}
                        />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </form>
        </div>
      );
    } else {
      imageListContent = (
        <h2>Your Photos will stored only for 30 days from uploaded date</h2>
      );
    }

    return (
      <div>
        <Grid item xs={12}>
          <Typography
            variant="display2"
            align="center"
            style={{ marginTop: '10px' }}
          >
            Upload Your Pictures
          </Typography>
        </Grid>
        <Grid container>
          {/* preview of images here */}
          <Grid item sm={8}>
            <Paper
              style={{
                padding: 10,
                margin: 10,
                height: 800,
                overflowY: 'scroll',
              }}
            >
              <Fragment>
                {imageListContent}
                <Dialog
                  // actions={actions}
                  modal={false}
                  open={isImageOpen}
                  onRequestClose={this.handleImgClose}
                >
                  <img src={currentImg} alt="" style={{ width: '100%' }} />
                </Dialog>
              </Fragment>
            </Paper>
          </Grid>

          {/* uploading of images here  */}
          <Grid item sm={4}>
            <Paper
              style={{ padding: 10, paddingLeft: 10, margin: 10 }}
              align="center"
            >
              <Typography
                variant="title"
                align="center"
                style={{ paddingBottom: 20 }}
              >
                UPLOAD PHOTOS
              </Typography>
              <Fragment>
                <input
                  accept="image/*"
                  type="file"
                  multiple
                  id="imgInput"
                  style={{ display: 'none' }}
                  onChange={this.onInputChange}
                />
                <label htmlFor="imgInput">
                  <Button
                    htmlFor="imgInput"
                    variant="raised"
                    component="span"
                    size="large"
                    color="inherit"
                    style={{ width: '90%', marginBottom: 10 }}
                  >
                    <StayPrimaryPortrait />
                    MY DEVICEx
                  </Button>
                </label>
              </Fragment>
              <Button
                variant="contained"
                disabled
                size="large"
                color="inherit"
                style={{ width: '90%', marginBottom: 10 }}
              >
                <StayPrimaryPortrait />
                MY DEVICE
              </Button>
              <Button
                variant="contained"
                disabled
                size="large"
                color="inherit"
                style={{ width: '90%', marginBottom: 10 }}
              >
                <StayPrimaryPortrait />
                MY DEVICE
              </Button>
              <Button
                variant="contained"
                disabled
                size="large"
                color="inherit"
                style={{ width: '90%', marginBottom: 10 }}
              >
                <StayPrimaryPortrait />
                MY DEVICE
              </Button>
            </Paper>

            {/* paper for processing further */}
            <Paper
              style={{ padding: 10, paddingLeft: 10, margin: 10 }}
              align="center"
            >
              <Typography
                variant="title"
                align="center"
                style={{ paddingBottom: 20 }}
              >
                PROCESS FURTHER
              </Typography>
              <Button
                variant="contained"
                disabled={isProcessButtonDisabled}
                size="large"
                color="inherit"
                style={{ width: '90%', marginBottom: 10 }}
              >
                <Cancel />
                CANCEL
              </Button>
              <Button
                variant="contained"
                disabled={isProcessButtonDisabled}
                size="large"
                color="inherit"
                style={{ width: '90%', marginBottom: 10 }}
                onClick={this.processWithOrderHandler}
              >
                <ArrowForward />
                PROCESS WITH ORDER
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

UploadImageView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadImageView);
