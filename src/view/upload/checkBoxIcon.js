import React from 'react';
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';

const checkBoxIcon = ({ imgIndex, indexArray }) => {
  return indexArray.includes(imgIndex) ? (
    <CheckBox />
  ) : (
    <CheckBoxOutlineBlank />
  );
};

export default checkBoxIcon;
