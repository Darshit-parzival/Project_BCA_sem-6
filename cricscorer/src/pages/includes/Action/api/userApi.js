import axios from "axios";
import { loginSuccess } from '../features/userSlice';

export const login = async (data, dispatch, navigate, setLoginErr) => {

    const res = await axios.post("http://localhost:5000/api/auth/userlogin", data);

    if (res.data.response === 'correct') {
        setLoginErr(null)
        sessionStorage.setItem("username", res.data.name)
        dispatch(loginSuccess(res.data.name));
        navigate("/home")
    }
    else {
        if (res.data.response === 'incorrect') {
            setLoginErr("Password is incorrect")
        }
        else {
            setLoginErr("User not found")
        }
    }
}

export const logout = (navigate) => {
    sessionStorage.setItem("username", null)
    navigate("/signin");
}

export const registration = async (data, navigate, setRegisterSuccess, setUserExist) => {

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    
    const url = `http://localhost:5000/api/auth/userregister`;
    const res = await axios.post(url, data);

    if (res.data === 'User Created Successfully') { 
        setRegisterSuccess("Account created successfully")
        await sleep("3000")
        navigate('/signin')
    }
    else {
        setUserExist('User Already Existed')
    }
}