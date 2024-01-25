import React, { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo2 from '../asset/images/Group.png';
import Logo3 from '../asset/images/Group1.png';
import '../asset/css/navbar/navbar.css';
import { TiHomeOutline } from "react-icons/ti";
import { BiCategory, BiSolidRightArrow } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";

const Navbar = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <header>
            {/*--Silder Bar*/}
            <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
                <div className={'nav-links '} >
                    <Link className="link1" to="/home" >
                        <div className="nav-mains1">
                            <div className="nav-main-bar">
                                <TiHomeOutline className="nav-main-bars1" /> Home
                            </div>
                            <BiSolidRightArrow className="nav-icon1" />
                        </div>
                    </Link>

                    <Link className="link1" to="/category" >
                        <div className="nav-mains1">
                            <div className="nav-main-bar">
                                <BiCategory className="nav-main-bars1" /> Category
                            </div>
                            <BiSolidRightArrow className="nav-icon1" />
                        </div>
                    </Link>

                    <Link className="link1" to="/product" >
                        <div className="nav-mains1">
                            <div className="nav-main-bar">
                                <BsFillBoxSeamFill className="nav-main-bars1" /> Products
                            </div>
                            <BiSolidRightArrow className="nav-icon1" />
                        </div>
                    </Link>
                </div>
            </nav>

            {/*heder bar*/}
            <nav className={color ? 'navbar1 navbar-bg1' : 'navbar1'}>
                <div className="nav-logos-container">
                    <div className="nav-logo">
                        <img src={Logo2} className="head-logo" alt={"logo"} />
                        <img src={Logo3} className="head-logo ls1" alt={"logo"} />
                    </div>
                    <div className="icon-logo-main">
                        <BsPersonCircle className="icon-logo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar