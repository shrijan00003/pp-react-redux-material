import React, { Component, Fragment } from 'react';
import {
  Grid,
  Paper,
  Button,
  GridList,
  GridListTile,
  TextField,
} from '@material-ui/core';
import { AddToQueue, AddShoppingCart } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  gridListTileStyle: {
    padding: '10px',
    marginRight: '10px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button_primary: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: '#7777ED',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#BEBEFD',
    },
  },
  button_secondary: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: '#7777ED',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#BEBEFD',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  primary_container: {
    borderBottom: '2px solid brown',
  },
});

class OrderView extends Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.state = {
      classes,
      referrer: false,
      printingObject: {},
      printingData: [],
      framingData: [],

      cartedImages: {},
    };
  }

  getMorePhotosHandler = () => {
    console.log('get more photos clicked here');
    this.setState({
      referrer: '/uploadImages',
    });
  };

  handlePrintFrame = async (imgId = '', type = '', e) => {
    const v = e.target.value;

    // if (Object.keys(this.state.cartedImages).length === 0) {
    await this.setState({
      cartedImages: {
        ...this.state.cartedImages,
        [imgId]: {
          printing: {
            p4by6: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].printing.p4by6
              : 0,
            p5by7: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].printing.p5by7
              : 0,
            p8by10: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].printing.p8by10
              : 0,
          },
          framing: {
            f4by6: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].framing.f4by6
              : 0,
            f5by7: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].framing.f5by7
              : 0,
            f8by10: this.state.cartedImages[imgId]
              ? this.state.cartedImages[imgId].framing.f8by10
              : 0,
          },
        },
      },
    });
    // }

    await this.setState(prevState => ({
      ...prevState,
      cartedImages: {
        ...prevState.cartedImages,
        [imgId]: {
          ...prevState.cartedImages[imgId],
          printing: {
            ...prevState.cartedImages[imgId].printing,
            p4by6:
              //  type === 'p4by6' && Number(v),
              type === 'p4by6'
                ? Number(v)
                : prevState.cartedImages[imgId].printing.p4by6,
            p5by7:
              // type === 'p5by7' && Number(v),
              type === 'p5by7'
                ? Number(v)
                : prevState.cartedImages[imgId].printing.p5by7,
            p8by10:
              // type === 'p8by10' && Number(v),
              type === 'p8by10'
                ? Number(v)
                : prevState.cartedImages[imgId].printing.p8by10,
          },
          framing: {
            ...prevState.cartedImages[imgId].framing,
            f4by6:
              // type === 'f4by6' && Number(v),
              type === 'f4by6'
                ? Number(v)
                : prevState.cartedImages[imgId].framing.f4by6,
            f5by7:
              // type === 'f5by7' && Number(v),
              type === 'f5by7'
                ? Number(v)
                : prevState.cartedImages[imgId].framing.f5by7,
            f8by10:
              //  type === 'f8by10' && Number(v),
              type === 'f8by10'
                ? Number(v)
                : prevState.cartedImages[imgId].framing.f8by10,
          },
        },
      },
    }));
    console.log('structure of after', this.state.cartedImages);

    // obj[imgId] = {
    //   print: {},
    //   frame: {},
    // };
    // this.setState(prevState => ({
    //   ...prevState,
    //   cartedImages: [...prevState.cartedImages, obj],
    // }));

    // console.log('object', obj);
    // await this.setState({
    //   cartedImages: [...this.state.cartedImages, obj],
    // });

    // console.log('image id ', imgId);
    // const v = e.target.value;
    // let obj = {};
    // obj[imgId] = {
    //   ...(type && { [type]: v }),
    // };

    // console.log('internal object', obj);
    // await this.setState({
    //   printingObject: { ...this.state.printingObject, ...obj },
    // });
    // await this.setState({
    //   printingData: [...this.state.printingData, this.state.printingObject],
    // });

    // console.log('printing array', this.state.printingData);
  };
  render() {
    const { referrer } = this.state;
    if (referrer) {
      return <Redirect to={referrer} />;
    }
    const paperStyle = {
      padding: '10px',
      margin: '10px',
    };
    let imagesWithAllMeta;
    const { selectedImages } = this.props;
    if (selectedImages.length > 0) {
      imagesWithAllMeta = (
        <Fragment>
          {selectedImages.map((img, index) => (
            <Grid
              key={index}
              container
              className={this.state.classes.primary_container}
            >
              <Grid item xs={4}>
                <GridList cellHeight={160} spacing={100} cols={1}>
                  <GridListTile
                    className={this.state.classes.gridListTileStyle}
                  >
                    <img
                      src={img.imgUrl}
                      alt={img.imgUrl}
                      style={{ height: '80%', border: '2px solid gray' }}
                    />
                  </GridListTile>
                </GridList>
              </Grid>
              <Grid item xs={8}>
                <Grid container>
                  {/* start for print */}
                  <Grid item xs={12}>
                    Print <hr />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="4 X 6 (Rs 20)"
                      // value={0}
                      onBlur={e => this.handlePrintFrame(img.id, 'p4by6', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="5 X 7 (Rs 30)"
                      // value={0}
                      onBlur={e => this.handlePrintFrame(img.id, 'p5by7', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="8 X 10 (Rs 65)"
                      // value={0}
                      onBlur={e => this.handlePrintFrame(img.id, 'p8by10', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    Frame
                    <hr />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="4 X 6 (Rs 200)"
                      // value={0}
                      onChange={e => this.handlePrintFrame(img.id, 'f4by6', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="5 X 7 (Rs 300)"
                      // value={0}
                      onChange={e => this.handlePrintFrame(img.id, 'f5by7', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="outlined-number"
                      label="8 X 10 Rs(500)"
                      // value={0}
                      onChange={e => this.handlePrintFrame(img.id, 'f8by10', e)}
                      type="number"
                      className={this.state.classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Fragment>
      );
    } else {
      imagesWithAllMeta = <h1>Please select the pictures</h1>;
    }

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={8}>
            {/* FOR DISPLAYING PICTURES */}
            <Paper style={paperStyle}>
              {/* CONTAINER FOR BUTTONS */}
              <Grid container>
                <Grid item xs />
                <Grid item xs />
                <Grid item xs>
                  <Button
                    variant="contained"
                    size="small"
                    className={this.state.classes.button_primary}
                    onClick={this.getMorePhotosHandler}
                  >
                    <AddToQueue
                      className={classNames(this.state.classes.leftIcon)}
                    />
                    Get More Photos
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    size="small"
                    className={this.state.classes.button_secondary}
                  >
                    <AddShoppingCart
                      className={classNames(this.state.classes.leftIcon)}
                    />
                    PROCESS WITH CART
                  </Button>
                </Grid>
              </Grid>
              {/* BUTTONS CONTAINER ENDS */}

              {/* CONTAINER FOR PICTURES DISPLAY */}
              <Fragment>
                we will reside code here in loop <br />
                {imagesWithAllMeta}
              </Fragment>
            </Paper>
          </Grid>
          {/* FOR SECONDARY GRID QUICK ORDER */}
          <Grid item xs={4}>
            <Paper style={paperStyle}>Hello from 4th grid</Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

OrderView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderView);
