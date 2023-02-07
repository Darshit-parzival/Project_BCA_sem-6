import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../includes/img/Logo.png'
import '../includes/css/Style.css'
import axios from 'axios'


const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [passworderr, setPasswordErr] = useState("");
    const [registermsg, setRegisterSuccess] = useState("");
    const [userexist, setUserExist] = useState("");

    const passwordValidation = (pass) => {

        if (pass.length >= 8) {

            if (/[a-z]/.test(pass)) {

                if (/[0-9]/.test(pass)) {

                    if (/[A-Z]/.test(pass)) {

                        if (/[#?!@$%^&*-]/.test(pass)) {

                                    setPasswordErr(null);
                                    SendRes();
                        }
                        else
                            setPasswordErr("Password must contains a Special Character")
                    }
                    else
                        setPasswordErr("Password must contais a Capital Letter")
                }
                else
                    setPasswordErr("Password must contain a number");
            }
            else
                setPasswordErr("Password must contains a Letter");
        }
        else
            setPasswordErr("Password must be 8 character long");
    }


    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const SendRes = async () => {
        const url = `http://localhost:5000/api/auth/userregister`;
        const res = await axios.post(url, { name, email, password });

        if (res.data === 'User Created Successfully') {
            setRegisterSuccess("Account created successfully")
            await sleep("3000")
            navigate('/signin')
        }
        else {
            setUserExist('User Already Existed')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (confirmpassword === password) {
            passwordValidation(password);
        }
        else
            setPasswordErr("Password not matched");
    }

    return (
        <div className='custom-container'>
            <div className='custom'>
                <div className='custom-logo'>
                    <img src={Logo} alt="LOgo" />
                </div>
                <form className='custom-form' onSubmit={handleSubmit}>
                    <h2 className='custom-form-caption'>Create Your Accout Here!</h2>
                    <input type="text" placeholder='Name' className='custom-form-field' value={name} onChange={onChangeName} required />
                    <input type="email" placeholder='Email' className='custom-form-field' value={email} onChange={onChangeEmail} required />
                    <input type="password" placeholder='Password' className='custom-form-field' value={password} onChange={onChangePassword} required />
                    <input type="password" placeholder='Confirm Password' className='custom-form-field' value={confirmpassword} onChange={onChangeConfirmPassword} required />
                    <button className='custom-form-submit'>CREATE ACCOUNT</button>
                    <div className='custom-redirect'>
                        <Link to='/signin' className='custom-redirect-link'>Already have an Account?</Link>
                    </div>
                    {passworderr && <div className='custom-error'>
                        <h4>{passworderr}</h4>
                    </div>}
                    {userexist && <div className='custom-error'>
                        <h4>{userexist}</h4>
                    </div>}
                    {registermsg && <div className='custom-success'>
                        <h4>{registermsg}</h4>
                    </div>}
                </form>
            </div>
        </div>
    )
}

export default Signup