import React, { useState } from 'react'

const PlayersName = () => {

  sessionStorage.setItem("TeamAnm", "CSK")
  sessionStorage.setItem("TeamApl", "5")
  sessionStorage.setItem("TeamBnm", "MI")
  sessionStorage.setItem("TeamBpl", "5")
  sessionStorage.setItem("over", "5")

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

  const [teamAWc, setTeamAWc] = useState(Array(TeamA).fill(''))
  const [teamBWc, setTeamBWc] = useState(Array(TeamB).fill(''))

  const [teamACap, setTeamACap] = useState(Array(TeamA).fill(''))
  const [teamBCap, setTeamBCap] = useState(Array(TeamB).fill(''))

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

  const HandleWcA=(index,value)=>{
    const UpdatedTeamAWc=[...teamAWc]
    UpdatedTeamAWc[index]=value
    setTeamAWc(UpdatedTeamAWc)
  }

  const HandleWcB=(index,value)=>{
    const UpdatedTeamBWc=[...teamBWc]
    UpdatedTeamBWc[index]=value
    setTeamBWc(UpdatedTeamBWc)
  }

  const HandleCapA=(index,value)=>{
    const UpdatedTeamACap=[...teamACap]
    UpdatedTeamACap[index]=value
    setTeamACap(UpdatedTeamACap)
  }

  const HandleCapB=(index,value)=>{
    const UpdatedTeamBCap=[...teamBCap]
    UpdatedTeamBCap[index]=value
    setTeamBCap(UpdatedTeamBCap)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='custom-container'>
      <div className='custom d-block' style={{ width: "99%" }}>
        <form className='custom-form d-grid w-auto' onSubmit={HandleSubmit}>
          <div className='d-flex'>
            <div className='p-2 justify-content-center border border-3'>
              <h1 className='custom-form-caption'>{TeamA}</h1>
              <div className='d-flex'>
                <div style={{ paddingRight: "10px" }}>
                  <span><h4>Player's Names</h4></span>
                  {TeamAindex.map((input, index) => (
                    <input type="text" key={index} onChange={(e) => HandleInputAChange(index, e.target.value)} value={teamAnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' />))}
                </div>
                <div className='vertical'></div>
                <div>
                  <span><h4>Roll</h4></span>
                  {TeamAindex.map((select, index) => (
                    <select className="btn btn-secondary rollradio" key={index} name="roll" onChange={(e) => HandleRollA(index, e.target.value)}>
                      <option hidden>Roll</option>
                      <option value="bat">Batsman</option>
                      <option value="bowl">Bowler</option>
                      <option value="all">All Rounder</option>
                    </select>))}
                </div>
                <div className='vertical'></div>
                <div className='d-grid'>
                  <span><h4>WicketKeeper</h4></span>
                  {TeamAindex.map((input, index) => (
                    <input type="radio" key={index} value="wicketkeeper" name='wicketkeeper' className='rollradio' onChange={(e) => HandleWcA(index, e.target.value)} />
                  ))}
                </div>
                <div className='vertical'></div>
                <div className='d-grid'>
                  <span><h4>Captain</h4></span>
                  {TeamAindex.map((input, index) => (
                    <input type="radio" key={index} value="captain" name='captain' className='rollradio' onChange={(e)=>HandleCapA(index,e.target.value)}/>
                  ))}
                </div>
              </div>
            </div>
            <div className='p-2 justify-content-center border border-3'>
              <h1 className='custom-form-caption'>{TeamB}</h1>
              <div className='d-flex'>
                <div style={{ paddingRight: "10px" }}>
                  <span><h4>Player's Names</h4></span>
                  {TeamBindex.map((input, index) => (
                    <input type="text" key={index} onChange={(e) => HandleInputBChange(index, e.target.value)} value={teamBnmfinal[index]} placeholder='Player Name' name='name' className='custom-form-field' />))}
                </div>
                <div className='vertical'></div>
                <div>
                  <span><h4>Roll</h4></span>
                  {TeamBindex.map((select, index) => (
                    <select className="btn btn-secondary rollradio" key={index} name="roll" onChange={(e) => HandleRollB(index, e.target.value)} >
                      <option hidden>Roll</option>
                      <option value="bat">Batsman</option>
                      <option value="bowl">Bowler</option>
                      <option value="all">All Rounder</option>
                    </select>))}
                </div>
                <div className='vertical'></div>
                <div className='d-grid p-1'>
                  <span><h4>WicketKeeper</h4></span>
                  {TeamBindex.map((input, index) => (
                    <input type="radio" key={index} value="wicketkeeper" name='wicketkeeper' className='rollradio' onChange={(e) => HandleWcB(index, e.target.value)} />
                  ))}
                </div>
                <div className='vertical'></div>
                <div className='d-grid p-1'>
                  <span><h4>Captain</h4></span>
                  {TeamBindex.map((input, index) => (
                    <input type="radio" key={index} value="captain" name='captain' className='rollradio' onChange={(e)=>HandleCapB(index,e.target.value)}/>
                  ))}
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