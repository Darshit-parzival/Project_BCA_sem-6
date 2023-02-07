import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../includes/img/Logo.png'
import '../includes/css/Style.css'

const Forgot = () => {
    return (
        <div className='custom-container'>
            <div className='custom'>
                <div className='custom-logo'>
                    <img src={Logo} alt="LOgo" />
                </div>
                <form className='custom-form'>
                    <h2 className='custom-form-caption'>Recover your Account</h2>
                    <input type="email" placeholder='Email' className='custom-form-field' required />
                    <button className='custom-form-submit'>GET OTP</button>
                    <div className='custom-redirect'>
                        <Link to='/signin' className='custom-redirect-link'>Back to LOGIN</Link>
                    </div>
                    <div className='custom-redirect'>
                        <Link to='/signup' className='custom-redirect-link'>Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot