import React, { useState } from 'react'
import '../includes/css/Style.css'
import { useNavigate } from 'react-router-dom'

const PlayersSelection = () => {
  
  const navigate = useNavigate();
  const [striker, getStriker] = useState("")
  const [nonstriker, getNonStriker] = useState("")
  const [bowler, getBowler] = useState("")
  
  
  const TeamAnm = sessionStorage.getItem("TeamAnm")
  const TeamBnm = sessionStorage.getItem("TeamBnm")

  const TeamTossWon = sessionStorage.getItem("TossWon")
  const TeamChoose = sessionStorage.getItem("TeamChose")

  let BatTeamPl=''
  let BowlTeamPl=''

  const getArrayFromSessionStorage = (value) => {
    const array = sessionStorage.getItem(value);
    return JSON.parse(array);
  }
  
  const Bowler = (arr, search, search2) => {
    const indices = [];
    arr.forEach((element, index) => {
      if (element === search || element === search2) {
        indices.push(BowlTeamPl[index]);
      }
    });
    return indices;
  }

  if (TeamTossWon === TeamAnm) {
    if (TeamChoose === "Bat") {
      sessionStorage.setItem("BatTeam", TeamAnm)
      sessionStorage.setItem("BowlTeam", TeamBnm)
      BatTeamPl=getArrayFromSessionStorage(TeamAnm)
      BowlTeamPl=getArrayFromSessionStorage(TeamBnm)
    }
    else {
      sessionStorage.setItem("BatTeam", TeamBnm)
      sessionStorage.setItem("BowlTeam", TeamAnm)
      BatTeamPl=getArrayFromSessionStorage(TeamBnm)
      BowlTeamPl=getArrayFromSessionStorage(TeamAnm)
    }
  }
  else {
    if (TeamChoose === "Bowl") {
      sessionStorage.setItem("BatTeam", TeamAnm)
      sessionStorage.setItem("BowlTeam", TeamBnm)
      BatTeamPl=getArrayFromSessionStorage(TeamAnm)
      BowlTeamPl=getArrayFromSessionStorage(TeamBnm)
    }
    else {
      sessionStorage.setItem("BatTeam", TeamBnm)
      sessionStorage.setItem("BowlTeam", TeamAnm)
      BatTeamPl=getArrayFromSessionStorage(TeamBnm)
      BowlTeamPl=getArrayFromSessionStorage(TeamAnm)
    }
  }


  

  // const TeamApl = getArrayFromSessionStorage(TeamAnm)
  // const TeamBpl = getArrayFromSessionStorage(TeamBnm)

  const TeamBplroll = getArrayFromSessionStorage(TeamBnm+"Roll")

  const finalBowler = Bowler(TeamBplroll, "bowl", "all")

  const bowlerteam = finalBowler.map((value, i) => {
    return <button key={i} data-bs-dismiss="modal" value={value} onClick={(e) => getBowler(e.target.value)} className="btn btn-primary mb-2">{value}</button>;
  });

  const HandleSubmit = () => {
    sessionStorage.setItem("striker", striker)
    sessionStorage.setItem("nonstriker", nonstriker)
    sessionStorage.setItem("bowler", bowler)

    navigate('/master')
  }

  return (
    <div className='custom-container'>
      <div className='custom justify-content-center d-grid'>
        <h2 className='custom-form-caption'>Selection of Players</h2>
        <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#striker">
          {(striker && "Striker : " + striker) || "Striker"}
        </button>

        <div className="modal fade" id="striker" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header">
                <em className="modal-title fs-5" id="exampleModalLabel"><b>Select Striker</b></em>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-grid">
                <em className='text-center'>For Team {sessionStorage.getItem("BatTeam")}...</em>
                {BatTeamPl.map((value, index) => (
                  (value === nonstriker) ? (null) : (<button key={index} name='striker' onClick={(e) => { getStriker(e.target.value) }} value={value} data-bs-dismiss="modal" className='btn btn-primary mb-2'>{value}</button>)
                ))}
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#nonstriker">
          {(nonstriker && "Non-Striker : " + nonstriker) || "Non-Striker"}
        </button>

        <div className="modal fade" id="nonstriker" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content ">
              <div className="modal-header">
                <em className="modal-title fs-5" id="exampleModalLabel"><b>Select Non-Striker</b></em>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-grid">
                <em className='text-center'>For Team CSK...</em>
                {BatTeamPl.map((value, index) => (
                  (striker === value) ? (null) : (<button key={index} name='nonstriker' data-bs-dismiss="modal" value={value} onClick={(e) => { getNonStriker(e.target.value) }} className='btn btn-primary mb-2'>{value}</button>)
                ))}
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#bowler">
          {(bowler && "Bowler : " + bowler) || "Bowler"}
        </button>

        <div className="modal fade" id="bowler" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content ">
              <div className="modal-header">
                <em className="modal-title fs-5" id="exampleModalLabel"><b>Select Bowler</b></em>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-grid">
                <em className='text-center'>For Team MI...</em>
                {bowlerteam}
              </div>
            </div>
          </div>
        </div>
        {striker && nonstriker && bowler &&
          <div>
            <button type="button" style={{ width: "220.26px" }} className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Submit
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <h3><em>Striker is {striker}</em></h3>
                    <h3><em>Non-Striker is {nonstriker}</em></h3>
                    <h3><em>Bowler is {bowler}</em></h3>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                    <button type="button" className="btn btn-success" onClick={HandleSubmit}>Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default PlayersSelection