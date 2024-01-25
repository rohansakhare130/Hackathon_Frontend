import React from 'react';
import ButtonA from '../atoms/ButtonA';
import { useNavigate } from 'react-router-dom';
import "../asset/css/comman/boxfdpage.css";
import Out1 from '../asset/images/out-img.png';
const BoxFDpage = (props) => {
   
  return (
    <div className="boxFD-cont">
            <div className="boxFD-heder-main">
                <img src={Out1} className="boxFD-img-1" alt={"logo"} />
                <p className="boxFD-text1">Delete</p>
            </div>
            <p className="boxFD-text3">Are you sure you want to delete?</p>

            <div className="boxFD-button-main">
                <ButtonA
                    name="Cancel"
                    className="boxFD-button2"
                    
                />
                <ButtonA
                    name="Confirm"
                    className="boxFD-button2 bt2"
                  
                />
            </div>
        </div>
  )
}

export default BoxFDpage