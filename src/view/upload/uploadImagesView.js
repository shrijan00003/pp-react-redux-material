import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './checkBoxIcon';
import { StayPrimaryPortrait } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import UID from 'uuid/v1';

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
      imagePreviewUrls: [],

      selectedImg: [],
      selectedIndex: [],
      selectedImgUrls: [],

      isImageOpen: false,
      currentImg: '',

      classes,

      imageArray: [],

      cheked: false,
    };
  }

  handleCheckPicture = async (img, imgIndex) => {
    console.log('img came here as parameter', img);
    console.log('set of selected url of file', this.state.selectedImgUrls);

    if (this.state.selectedIndex.indexOf(imgIndex) === -1) {
      await this.setState({
        selectedIndex: [...this.state.selectedIndex, imgIndex],
        selectedImg: [...this.state.selectedImgUrls, img],
      });
    } else {
      let selectedIndexArray = [...this.state.selectedIndex];
      let selectedImgUrlsArray = [...this.state.selectedImgUrls];

      let indexOfIndex = selectedIndexArray.indexOf(imgIndex);
      let indexOfImgUrl = selectedImgUrlsArray.indexOf(img);

      selectedIndexArray.splice(indexOfIndex, 1);
      selectedImgUrlsArray.splice(indexOfImgUrl, 1);

      await this.setState({
        selectedIndex: selectedIndexArray,
        selectedImgUrls: selectedImgUrlsArray,
      });
    }

    console.log('set of selected Index of file', this.state.selectedIndex);
  };

  handleImgClose = () => {
    this.setState({
      isImageOpen: false,
    });
  };

  componentDidMount() {}

  onInputChange = async e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 30) {
      const msg = 'Only 30 images can be uploaded at a time';
      alert(msg);
    }

    let picUrls = [];
    const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

    const newFileArray = files.map((file, index) => {
      if (types.every(type => file.type !== type)) {
        return {
          error: 'file type not matched',
        };
      }
      if (file.size > 1500000) {
        return {
          error: 'file is too large',
        };
      } else {
        return {
          id: UID(),
          imgIndex: index,
          actualFile: file,
          imgUrl: URL.createObjectURL(file),
        };
      }
    });

    await this.setState({
      imageArray: [...this.state.imageArray, ...newFileArray],
    });

    // console.log('displaying formdata ', ...formData);

    // files.forEach((file, i) => {
    //   if (types.every(type => file.type !== type)) {
    //     errs.push(`'${file.type}' is not a supported format`);
    //   }

    //   if (file.size > 1500000) {
    //     errs.push(`'${file.name}' is too large, please pick a smaller file`);
    //   }

    //   const realativeUrl = URL.createObjectURL(file);
    //   picUrls = [...picUrls, realativeUrl];

    //   formData.append(i, file);
    // });

    if (errs.length > 0) {
      // return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor));
      this.props.upLoadImageToStore({}, {}, 'error occured here');
      console.error(errs);
    } else {
      await this.setState({
        images: [...this.state.images, ...files],
        imagePreviewUrls: [...this.state.imagePreviewUrls, ...picUrls],
      });

      this.props.upLoadImageToStore(
        this.state.images,
        this.state.imagePreviewUrls,
        ''
      );
    }
  };

  render() {
    let imageListContent;
    const {
      imagePreviewUrls,
      isImageOpen,
      currentImg,
      imageArray,
    } = this.state;
    if (imageArray.length > 0) {
      imageListContent = (
        <div className={this.state.classes.root}>
          <form>
            <GridList cellHeight={180} className={this.state.classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">
                  Your Uploaded Pictures Here
                </ListSubheader>
              </GridListTile>
              {imageArray.map((img, index) => (
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
                          indexArray={this.state.selectedIndex}
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

    // const actions = [
    //   <Button label="Close" primary={true} onClick={this.handleImgClose()} />,
    // ];
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
