import { FirstStep } from "../api/hostApi"

export const HostIndexProcess = (teamA, teamB, over, setErrMsg, navigate, Dispatch) => {

    if ((teamA.players < 12 && teamA.players > 1) || (teamB.players < 12 && teamB.players > 1)) {

        if (over < 51 && over > 1) {
            FirstStep({teamA, teamB, over}, navigate, Dispatch)
        } else
            setErrMsg("Over must be 2 to 50")
    } else
        setErrMsg("players must be 2 to 11")
}