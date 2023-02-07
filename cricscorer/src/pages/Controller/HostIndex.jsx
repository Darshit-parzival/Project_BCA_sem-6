import React, { useState } from 'react'
import Logo from '../includes/img/Logo.png'
import '../includes/css/Style.css'

const HostIndex = () => {

  const [teamA, setTeamA] = useState("")
  const [teamANumbers, setTeamANumbers] = useState("")
  const [teamBNumbers, setTeamBNumbers] = useState("")
  const [teamB, setTeamB] = useState("")
  const [over, setOver] = useState("")

  const onChangeTeamA = (e) => {
    setTeamA(e.target.value)
  }
  const onChangeTeamANumbers = (e) => {
    setTeamANumbers(e.target.value)
  }
  const onChangeTeamBNumbers = (e) => {
    setTeamBNumbers(e.target.value)
  }
  const onChangeTeamB = (e) => {
    setTeamB(e.target.value)
  }
  const onChangeOver = (e) => {
    setOver(e.target.value)
  }

  console.log("TA:",teamA,"TB",teamB,"O",over,"TAN",teamANumbers,"TBN",teamBNumbers)

  return (
    <div className='custom-container hostindex'>
      <div className='custom'>
        <h2 className='custom-form-caption hostindex-title'>Host Index</h2>
        <div className='custom-logo'>
          <img src={Logo} alt="LOgo" />
        </div>
        <form >
          <div className='custom-form'>
            <h2 className='custom-form-caption team'>Team A</h2>
            <input type="text" placeholder='Name of the Team' className='custom-form-field' value={teamA} onChange={onChangeTeamA} required />
            <input type="number" min='2' max='11' placeholder='Numbers of Players' className='custom-form-field' value={teamANumbers} onChange={onChangeTeamANumbers} required />
          </div>
          <hr className='text-dark' />
          <div className='custom-form mt-3'>
            <h2 className='custom-form-caption team'>Team B</h2>
            <input type="text" placeholder='Name of the Team' className='custom-form-field' value={teamB} onChange={onChangeTeamB} required />
            <input type="number" min='2' max='11' placeholder='Numbers of Players' className='custom-form-field' value={teamBNumbers} onChange={onChangeTeamBNumbers} required />
          </div>
          <hr className='text-dark' />
          <div className='custom-form mt-3'>
            <input type="number" min='2' max='11' placeholder='Total Over' className='custom-form-field' value={over} onChange={onChangeOver} required />
          </div>
          <button className='custom-form-submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default HostIndex