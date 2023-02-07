import axios from "axios";
import { loginSuccess } from '../features/userSlice';

export const login = async (data, dispatch, navigate,setLoginErr) => {
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

export const logout=(navigate)=>{
    sessionStorage.setItem("username", null)
    navigate("/signin");
}