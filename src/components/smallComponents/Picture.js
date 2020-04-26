import React from 'react';
const Picture = (props) => {
  return (
    <div className='picture'>
      <img src={props.src} className='picture' alt="ss"/>
      {props.children}
    </div>
  )
}
export default Picture;
