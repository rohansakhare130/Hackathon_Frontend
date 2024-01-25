import React from 'react'
import Logo1 from '../asset/images/logo2.png';
import "../asset/css/container/homepage.css";
import { useNavigate } from 'react-router-dom';
import ButtonA from '../atoms/ButtonA';


const Home = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const handleLogout = () => {
    navigate('/logout');
  };
  return (
    <div className="home-container">
      <div className="h-butn-container">
        <ButtonA
          name="Log Out"
          classbtn="h-butn1"
          onClick={handleLogout}
        />
      </div>

      <div className="home-mains">
        <img src={Logo1} className="home-img-2" alt={"logo"} />
        <p className="home-text1">Welcome to Digitalflake Admin</p>
      </div>

     
    </div>
  )
}

export default Home