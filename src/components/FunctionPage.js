import React, { useState } from 'react';
import Picture from './smallComponents/Picture';
import FunctionButton from './smallComponents/FunctionButton';

export default () => {

  const [currentPic, setCurrentPic] = useState(null);
  const pictures =
    [
      {id: 1, src: 'http://via.placeholder.com/200x100'},
      {id: 2, src: 'http://via.placeholder.com/400x200'},
      {id: 3, src: 'http://via.placeholder.com/600x100'}
    ];

  const doSetCurrentPic = (id) => {
    setCurrentPic(id);
  };

  return (
    <div>
      <div className='squares'>
        {pictures.map(picture =>
          <Picture key={picture.id} src={picture.src}>
            <FunctionButton
              pictureSrc={picture.src}
              doSetCurrentPic={doSetCurrentPic}
              id={picture.id}
            />
          </Picture>
        )}

      </div>
      <div>
        <p>Current selected picture ID is {currentPic}</p>
      </div>
    </div>
  );
}
