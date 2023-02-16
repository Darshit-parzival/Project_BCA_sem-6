import React, { useState } from 'react'
import '../includes/css/Style.css'
import {useNavigate} from 'react-router-dom'
import {SecondStep} from '../includes/Action/api/hostApi'

const Toss = () => {

  const navigate = useNavigate()

  const TeamA = sessionStorage.getItem("TeamAnm")
  const TeamB = sessionStorage.getItem("TeamBnm")

  const [tossWon, setTossWon] = useState('')
  const [teamChose, setTeamChose] = useState('')

  const HandleTeamA = () => {
    setTossWon(TeamA)
  }

  const HandleTeamB = () => {
    setTossWon(TeamB)
  }

  const HandleFinalA = () => {
    setTeamChose("Bat")
  }

  const HandleFinalB = () => {
    setTeamChose("Bowl")
  }

  const HandleSubmit = () => {
    SecondStep(navigate,tossWon,teamChose)
  }
  return (
    <div className='custom-container'>
      <div className='custom d-block p-3'>
        <span>
          <h1 className='text-center'>Who won Toss?</h1>
        </span>
        <div className='d-flex justify-content-center mt-5'>
          <button className='btn toss-A me-5' onClick={HandleTeamA}>{TeamA}</button>
          <button className='btn toss-B ms-5' onClick={HandleTeamB}>{TeamB}</button>
        </div>
        <em>
          {tossWon && <h1 className='text-center mt-5'>And '{tossWon}' Choose...</h1>}
        </em>
        {tossWon && <div className='d-flex justify-content-center mt-5'>
          <button className='btn toss-A me-5' onClick={HandleFinalA}>Bat</button>
          <button className='btn toss-B ms-5' onClick={HandleFinalB}>Bowl</button>
        </div>}
        {teamChose && tossWon && <div className='d-grid justify-content-center mt-5'>
          <span>
            <h5>Team {tossWon} Choose {teamChose}...</h5>
          </span>
          <button className='btn btn-success' onClick={HandleSubmit}>Submit</button>
        </div>}
      </div>
    </div>
  )
}

export default Toss