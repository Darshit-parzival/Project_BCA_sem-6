import { registration } from "../api/userApi";

export const userRegistrationValidation = (name, email, password, setPasswordErr, setRegisterSuccess, navigate, setUserExist) => {
    
    const SendRes = () => {
        registration({ name, email, password }, navigate, setRegisterSuccess, setUserExist)
    }

    if (password.length >= 8) {

        if (/[a-z]/.test(password)) {

            if (/[0-9]/.test(password)) {

                if (/[A-Z]/.test(password)) {

                    if (/[#?!@$%^&*-]/.test(password)) {

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