import axios from "axios";
import { hostSuccess } from "../features/hostSlice"
import { tossSuccess } from "../features/tossSlice"

export const FirstStep = async (data, navigate, Dispatch) => {

    sessionStorage.setItem("TeamAnm", data.teamA.name)
    sessionStorage.setItem("TeamApl", data.teamA.players)
    sessionStorage.setItem("TeamBnm", data.teamB.name)
    sessionStorage.setItem("TeamBpl", data.teamB.players)
    sessionStorage.setItem("over", data.over)


    await axios.post("http://localhost:5000/api/auth/teamA", {"name": "abc"})
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

    Dispatch(hostSuccess(data.teamA.name))

    navigate("/playersName")
}

export const SecondStep = (navigate, tossWon, teamChose, Dispatch) => {

    sessionStorage.setItem("TossWon", tossWon)
    sessionStorage.setItem("TeamChose", teamChose)

    Dispatch(tossSuccess(tossWon))

    navigate("/playersSelection")
}