import React, { useState } from 'react'
import Logo from '../includes/img/Logo.png'
import '../includes/css/Style.css'
import { HostIndexProcess } from '../includes/Action/features/hostIndexProcess'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const HostIndex = () => {

  const navigate = useNavigate();
  const Dispatch = useDispatch()

  const [teamA, setTeamA] = useState({ name: '', players: '' })
  const [teamB, setTeamB] = useState({ name: '', players: '' })
  const [over, setOver] = useState("")
  const [errmsg, setErrMsg] = useState(null)

  const onChangeTeamA = e => {
    setTeamA({ ...teamA, [e.target.name]: e.target.value })
  }
  const onChangeTeamB = e => {
    setTeamB({ ...teamB, [e.target.name]: e.target.value })
  }
  const onChangeOver = e => {
    setOver(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()

    HostIndexProcess(teamA, teamB, over, setErrMsg, navigate, Dispatch)
  }


  return (
    <div className='custom-container hostindex'>
      <div className='custom host-index-container'>
        <h2 className='custom-form-caption hostindex-title'><span>Host Index</span></h2>
        <div className='custom-logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='custom-form'>
            <h2 className='custom-form-caption team'>Team A</h2>
            <input type="text" placeholder='Name of the Team' className='custom-form-field' name='name' value={teamA.name} onChange={onChangeTeamA} required />
            <input type="number" placeholder='Numbers of Players' className='custom-form-field' name='players' value={teamA.players} onChange={onChangeTeamA} required />
          </div>
          <hr className='text-dark' />
          <div className='custom-form mt-3'>
            <h2 className='custom-form-caption team'>Team B</h2>
            <input type="text" placeholder='Name of the Team' className='custom-form-field' name='name' value={teamB.name} onChange={onChangeTeamB} required />
            <input type="number" placeholder='Numbers of Players' className='custom-form-field' name='players' value={teamB.players} onChange={onChangeTeamB} required />
          </div>
          <hr className='text-dark' />
          <div className='custom-form mt-3'>
            <input type="number" placeholder='Total Over' className='custom-form-field' value={over} onChange={onChangeOver} required />
          </div>
          <button className='custom-form-submit'>SUBMIT</button>
          {errmsg && <div className='custom-error'>
            <h4>{errmsg}</h4>
          </div>}
        </form>
      </div>
    </div>
  )
}

export default HostIndex