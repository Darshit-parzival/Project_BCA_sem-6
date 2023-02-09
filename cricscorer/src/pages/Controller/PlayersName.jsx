import React, { useState } from 'react'

const PlayersName = () => {

  const TeamApl = parseInt(sessionStorage.getItem("TeamApl"), 10)
  const TeamBpl = parseInt(sessionStorage.getItem("TeamBpl"), 10)

  const TeamA = sessionStorage.getItem("TeamAnm")
  const TeamB = sessionStorage.getItem("TeamBnm")

  const TeamAindex = Array.from({ length: TeamApl }, (_, i) => 1)
  const TeamBindex = Array.from({ length: TeamBpl }, (_, i) => 1)

  const [teamAnmfinal, setTeamANmFinal] = useState(Array(TeamApl).fill(''))
  const [teamBnmfinal, setTeamBNmFinal] = useState(Array(TeamApl).fill(''))

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

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log(teamAnmfinal)
    console.log(teamBnmfinal)
  }

  return (
    <div className='custom-container'>
      <div className='custom d-block w-34'>
        <form className='custom-form d-grid w-auto' onSubmit={HandleSubmit}>
          <div className='d-flex'>
            <div className='p-2 justify-content-center border border-3'>
              <h2 className='custom-form-caption'>{TeamA}</h2>
              <div className='d-flex '>
                <div style={{paddingRight:"10px"}}>
                  {TeamAindex.map((input, index) => (
                    <input type="text" key={index} onChange={(e) => HandleInputAChange(index, e.target.value)} value={teamAnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' required />))}
                </div>
                <div>
                  <div className="dropdown">
                    {TeamAindex.map((button,index)=>(
                      <button className="btn btn-secondary dropdown-toggle" key={index} style={{marginBottom:"10px",height:"50px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Roll
                    </button>))}
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" value="bat">Batsman</button></li>
                      <li><button className="dropdown-item" value="bowl">Bowler</button></li>
                      <li><button className="dropdown-item" value="all">All Rounder</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-2 justify-content-center border border-3'>
              <h2 className='custom-form-caption'>{TeamB}</h2>
              {TeamBindex.map((input, index) => (
                <input type="text" key={index} onChange={(e) => HandleInputBChange(index, e.target.value)} value={teamBnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' required />))}
            </div>
          </div>
          <button className='custom-form-submit'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default PlayersName