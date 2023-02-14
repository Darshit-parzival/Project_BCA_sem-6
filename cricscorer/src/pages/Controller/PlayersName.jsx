import React, { useState } from 'react'

const PlayersName = () => {

  const TeamApl = parseInt(sessionStorage.getItem("TeamApl"), 10)
  const TeamBpl = parseInt(sessionStorage.getItem("TeamBpl"), 10)

  const TeamA = sessionStorage.getItem("TeamAnm")
  const TeamB = sessionStorage.getItem("TeamBnm")

  const TeamAindex = Array.from({ length: TeamApl }, (_, i) => 1)
  const TeamBindex = Array.from({ length: TeamBpl }, (_, i) => 1)

  const [teamAnmfinal, setTeamANmFinal] = useState(Array(TeamApl).fill(''))
  const [teamBnmfinal, setTeamBNmFinal] = useState(Array(TeamBpl).fill(''))

  const [teamAroll, setTeamARoll] = useState(Array(TeamApl).fill(''))
  const [teamBroll, setTeamBRoll] = useState(Array(TeamBpl).fill(''))

  const [Roll] = useState(null)

  const HandleInputAChange = (key, value) => {
    const UpdatedTeamANm = [...teamAnmfinal]
    UpdatedTeamANm[key] = value
    setTeamANmFinal(UpdatedTeamANm)
  }

  const HandleInputBChange = (key, value) => {
    const UpdatedTeamBNm = [...teamBnmfinal]
    UpdatedTeamBNm[key] = value
    setTeamBNmFinal(UpdatedTeamBNm)
  }

  const HandleRollA = (index, value) => {
    const UpdatedTeamARoll = [...teamAroll]
    UpdatedTeamARoll[index] = value
    setTeamARoll(UpdatedTeamARoll)
  }

  const HandleRollB = (index, value) => {
    const UpdatedTeamBRoll = [...teamBroll]
    UpdatedTeamBRoll[index] = value
    setTeamBRoll(UpdatedTeamBRoll)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(teamAroll)
    console.log(teamBroll)
  }

  return (
    <div className='custom-container'>
      <div className='custom d-block w-34'>
        <form className='custom-form d-grid w-auto' onSubmit={HandleSubmit}>
          <div className='d-flex'>
            <div className='p-2 justify-content-center border border-3'>
              <h2 className='custom-form-caption'>{TeamA}</h2>
              <div className='d-flex '>
                <div style={{ paddingRight: "10px" }}>
                  {TeamAindex.map((input, index) => (
                    <input type="text" key={index} onChange={(e) => HandleInputAChange(index, e.target.value)} value={teamAnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' />))}
                </div>
                <div>
                  {TeamAindex.map((select,index) => (
                    <select className="btn btn-secondary" key={index} name="roll" onChange={(e) => HandleRollA(index, e.target.value)} style={{ marginBottom: "10px", height: "50px", width: "auto" }}>
                      <option hidden>{Roll || "Roll"}</option>
                      <option value="bat">Batsman</option>
                      <option value="bowl">Bowler</option>
                      <option value="all">All Rounder</option>
                    </select>))}
                </div>
              </div>
            </div>
            <div className='p-2 justify-content-center border border-3'>
              <h2 className='custom-form-caption'>{TeamB}</h2>
              <div className='d-flex '>
                <div style={{ paddingRight: "10px" }}>
                  {TeamBindex.map((input, index) => (
                    <input type="text" key={index} onChange={(e) => HandleInputBChange(index, e.target.value)} value={teamAnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' />))}
                </div>
                <div>
                  {TeamBindex.map((select, index) => (
                    <select className="btn btn-secondary" key={index} name="roll" onChange={(e) => HandleRollB(index, e.target.value)} style={{ marginBottom: "10px", height: "50px", width: "auto" }}>
                      <option hidden>{Roll || "Roll"}</option>
                      <option value="bat">Batsman</option>
                      <option value="bowl">Bowler</option>
                      <option value="all">All Rounder</option>
                    </select>))}
                </div>
              </div>
            </div>
          </div>
          <button className='custom-form-submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default PlayersName