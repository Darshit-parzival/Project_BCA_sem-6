import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Adminlogin } from '../includes/Action/api/adminApi';
import Logo from '../includes/img/Logo.png';

const AdminSignIn = ({getIsAdminPanel}) => {

    getIsAdminPanel(false);

    const Admin = useSelector(state => state.Admin);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginErr, setLoginErr] = useState("");
    const navigate=useNavigate();
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        Adminlogin({email, password}, dispatch, navigate,setLoginErr);
    }

  return (
        <div className='custom-container'>
            <div className='custom'>
                <div className='custom-logo'>
                    <img src={Logo} alt="LOgo" />
                </div>
                <form className='custom-form' onSubmit={handleSubmit}>
                    <h2 className='custom-form-caption'>Admin Login</h2>
                    <input type="email" placeholder='Email' name='email' className='custom-form-field' value={email} onChange={onChangeEmail} required />
                    <input type="password" placeholder='Password' name='password' className='custom-form-field' value={password} onChange={onChangePassword} required />
                    <button className='custom-form-submit'>LOGIN</button>
                    <div className='custom-redirect'>
                        <Link to='/forgot' className='custom-redirect-link'>Forgot Password?</Link>
                    </div>
                    <div className='custom-redirect'>
                        <h2>{loginErr}</h2>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AdminSignIn