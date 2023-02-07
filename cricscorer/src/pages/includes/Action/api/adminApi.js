import axios from "axios";
import { loginSuccess } from '../features/adminSlice';

export const Adminlogin = async (data, dispatch, navigate,setLoginErr) => {
    console.log(data)
    const res = await axios.post("http://localhost:5000/api/auth/adminlogin", data);

    if (res.data.response === 'correct') {
        setLoginErr(null)
        sessionStorage.setItem("Admin", res.data.name)
        dispatch(loginSuccess(res.data.name));
        navigate("/adminhome")
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

export const Adminlogout=(navigate)=>{
    sessionStorage.setItem("Admin", null);
    navigate("/admin");
}