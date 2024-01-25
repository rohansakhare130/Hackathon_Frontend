import React from 'react';
import TextinputA from '../atoms/TextinputA';
import ButtonA from '../atoms/ButtonA';
import "../asset/css/container/forgetpage.css";
import { Link } from 'react-router-dom';
const Forgetpage = () => {
  return (
    <div className="forget-container">
      <div className="forget-box-main">
        <p className="forget-heder-text">Did you forget your password?</p>
        <p className="forget-text1">Enter your email address and we'll send you a link to restore password</p>
        <TextinputA
          label="Email Address"
          className1="label1"
          className="boxsize1"
        />

        <ButtonA
          name="Request reset link"
          className="Fbtn"
        />

        <Link to="/login" className="Forget-text2">
          <p >Back to log in</p>
        </Link>
      </div>
    </div>
  )
}

export default Forgetpage