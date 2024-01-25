import React from 'react';
import  '../asset/css/atom/button.css';

const ButtonA = (props) => {
  return (
    <div className={props?.parentClass} >
      <button className={`btn  ${props.classbtn}`} {...props}>
        {props.name}
      </button>
    </div>
  );
}

export default ButtonA;
