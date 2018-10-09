import React from 'react';
// import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import MediaCard from './MediaCard';

// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// };

const MakeRow = props => {
  // const { classes, ids } = props;
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <div>
          <MediaCard />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <MediaCard />
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default MakeRow;
