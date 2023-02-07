import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../includes/Action/api/userApi'
import '../includes/css/Style.css'
import Logo from '../includes/img/Logo.png'

export const Navbar = () => {
    const navigate = useNavigate();

    const LogOut = () => {
        logout(navigate);
    }

    let uid = "null"

    if (sessionStorage.getItem('username')) {
        uid = sessionStorage.getItem('username')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={Logo} alt="LOGO" className='navbar-logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {uid!=="null" && <li className="nav-item">
                                <Link className="nav-link navbar-font" to='home'>Home</Link>
                            </li>}
                            <li className="nav-item">
                                <Link className="nav-link navbar-font" to='contact'>Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbar-font" to='about'>About us</Link>
                            </li>
                        </ul>
                        {uid==="null" && <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                            <li className="nav-item dropdown">
                                <h2 className="nav-link dropdown-toggle navbar-font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign In/Sign Out
                                </h2>
                                <ul className="dropdown-menu navbar-signinsignout-dropdown">
                                    <li><Link className="dropdown-item navbar-font" to='/signin'>Sign In</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item navbar-font" to='/signup'>Sign Up</Link></li>
                                </ul>
                            </li>
                        </ul>}
                        {uid!=="null" && <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                            <li className="nav-item dropdown">
                                <h2 className="nav-link dropdown-toggle navbar-font" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {uid}
                                </h2>
                                <ul className="dropdown-menu navbar-signinsignout-dropdown">
                                    <li><Link className="dropdown-item navbar-font" to='/profile'>Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item navbar-font" onClick={LogOut}>Sign Out</button></li>
                                </ul>
                            </li>
                        </ul>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
