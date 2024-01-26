import React from 'react'
import "../asset/css/include/logout.css"
import "../asset/css/comman/boxfdpage.css";
import Out1 from '../asset/images/out-img.png';
import ButtonA from '../atoms/ButtonA';
import { useNavigate } from 'react-router-dom';
const Deletepage = () => {
    const navigate = useNavigate(); // Use useNavigate hook
    const handlecancel = () => {
      navigate('/product');
    };
    const handleconfirm = () => {
      navigate('/product');
    };
    return (
        <div className="Logout-main">
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
                        onClick={handlecancel}
                    />
                    <ButtonA
                        name="Confirm"
                        className="boxFD-button2 bt2"
                         onClick={handleconfirm}
                    />
                </div>
            </div>
        </div>
    )
}

export default Deletepage