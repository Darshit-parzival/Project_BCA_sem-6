import { hostSuccess } from "../features/hostSlice"
import { tossSuccess } from "../features/tossSlice"
import axios from "axios";

export const FirstStep = async (data, navigate, Dispatch) => {

    sessionStorage.setItem("TeamAnm", data.teamA.name)
    sessionStorage.setItem("TeamApl", data.teamA.players)
    sessionStorage.setItem("TeamBnm", data.teamB.name)
    sessionStorage.setItem("TeamBpl", data.teamB.players)
    sessionStorage.setItem("over", data.over)

    Dispatch(hostSuccess(data.teamA.name))
    
    const reqbody1 = {
        "schema": {
            "player_name": "String",
            "roll": "String",
            "iscap": "Number",
            "run": "Number",
            "wicket": "Number",
            "batball": "Number",
            "throwball": "Number",
            "givenrun": "Number",
            "isout": "String",
            "four": "Number",
            "six": "Number"
        },
        "collection": data.teamA.name,
    }
    const reqbody2 = {
        "schema": {
            "player_name": "String",
            "roll": "String",
            "iscap": "Number",
            "run": "Number",
            "wicket": "Number",
            "batball": "Number",
            "throwball": "Number",
            "givenrun": "Number",
            "isout": "String",
            "four": "Number",
            "six": "Number"
        },
        "collection": data.teamB.name,
    }

    await axios.post("http://localhost:5000/api/auth/teamName", reqbody1)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    
    await axios.post("http://localhost:5000/api/auth/teamName", reqbody2)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    
        navigate("/playersName")
}
    
    export const SecondStep = (navigate, tossWon, teamChose, Dispatch) => {
        
        sessionStorage.setItem("TossWon", tossWon)
        sessionStorage.setItem("TeamChose", teamChose)
        
        Dispatch(tossSuccess(tossWon))

    navigate("/playersSelection")
}