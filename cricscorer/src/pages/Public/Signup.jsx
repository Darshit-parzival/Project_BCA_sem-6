import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../includes/img/Logo.png'
import '../includes/css/Style.css'
import { userRegistrationValidation } from '../includes/Action/features/validations'

const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [passworderr, setPasswordErr] = useState("");
    const [registermsg, setRegisterSuccess] = useState("");
    const [userexist, setUserExist] = useState("");

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

    const handleSubmit = (e) => {

        e.preventDefault();

        if (confirmpassword === password) {
            userRegistrationValidation(name, email, password, setPasswordErr, setRegisterSuccess, navigate, setUserExist);
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