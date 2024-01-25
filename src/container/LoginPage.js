import React, { useState } from 'react'
import Logo from '../asset/images/logo2.png';
import "../asset/css/container/loginpage.css";
import Textinput from '../atoms/TextinputA';
import TextField from '@material-ui/core/TextField';
import { Link, useNavigate } from 'react-router-dom';
import ButtonA from '../atoms/ButtonA';


const LoginPage = () => {
    const navigate = useNavigate(); // Use useNavigate hook

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({email:formData.email, password:formData.password })
        // };
        // const response = await fetch("http://localhost:7000/login", requestOptions);
        // console.log('Form submitted:', formData);
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-box-main">
                <div className="login-heder">
                    <img src={Logo} className="login-img-1" alt={"logo"} />
                    <p className="login-text">Welcome to Digitalflake Admin</p>
                </div>
                {/* <Textinput
                    label="Email ID"
                    className1="label"
                    className="boxsize"

    /> */}

                { /*<Textinput
                label="Password"
                className1= "label"
                className="boxsize"
    />*/}

                <form onSubmit={handleLogin} >
                    <div className="boxsize">
                        <TextField
                            required
                            id="outlined-read-only-input"
                            label="Email ID"
                            name="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>

                    <TextField
                        required
                        id="outlined-read-only-input"
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Link to="/forget" className="login-texts-f">
                        <p className="login-texts-forget">Forgot Password?</p>
                    </Link>
                    <ButtonA
                        name="Log in"
                        classbtn="Lbtn"
                    />
                </form>

            </div>

        </div>
    )
}

export default LoginPage