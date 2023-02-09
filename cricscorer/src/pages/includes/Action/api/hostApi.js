export const FirstStep = (teamA, teamB, over, navigate) => {

    sessionStorage.setItem("TeamAnm",teamA.name)
    sessionStorage.setItem("TeamApl",teamA.players)
    sessionStorage.setItem("TeamBnm",teamB.name)
    sessionStorage.setItem("TeamBpl",teamB.players)
    sessionStorage.setItem("over",over)

    navigate("/playersName")
}


