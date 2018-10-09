import React, { Fragment } from 'react';
import {
  GridList,
  Zoom,
  GridListTile,
  Button,
  Dialog,
  IconButton,
} from '@material-ui/core';

const imagePreviw = ({
  imgUrls = [],
  isImageOpen = false,
  currentImg = '',
  handleImgClose = f => f,
  handleImgOpen = f => f,
}) => {
  let imageListContent;
  if (imgUrls.length > 0) {
    imageListContent = (
      <GridList cols={3}>
        {imgUrls.map((img, index) => (
          <GridListTile
            title="title"
            key={index}
            subtitle={
              <span>
                by <strong>'user'</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleImgOpen(img)}>
                <Zoom in color="white" />
              </IconButton>
            }
          >
            <img src={img} alt="" />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  const actions = [
    <Button label="Close" primary={true} onClick={handleImgClose()} />,
  ];
  return (
    <Fragment>
      {imageListContent}
      <Dialog
        actions={actions}
        modal={false}
        open={isImageOpen}
        onRequestClose={handleImgClose()}
      >
        <img src={currentImg} alt="" style={{ width: '100%' }} />
      </Dialog>
    </Fragment>
  );
};

export default imagePreviw;
