import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

FunctionButton.propTypes = {
  pictureSrc: PropTypes.string,
  doSetCurrentPic: PropTypes.func,
  id: PropTypes.number
};

FunctionButton.defaultProps = {
  pictureSrc: '',
  doSetCurrentPic: () => {},
  id: 0
};

export default function FunctionButton({pictureSrc, doSetCurrentPic, id}) {

  const [pictureId, setPictureId]= useState(null);
  const [label, setLabel]= useState(null);

  useEffect(()=>{
    buttonLabel(pictureSrc);
  },[pictureSrc]);

  const buttonLabel = (src) => {
    setPictureId(id);
    src.includes('200x100') ? setLabel('Small'):setLabel('Large');
  };

    return (
      <div>
        <button
          onClick= {() => doSetCurrentPic(id)}
          id = {pictureId}
        >
          {label}
        </button>
      </div>
    )
}
