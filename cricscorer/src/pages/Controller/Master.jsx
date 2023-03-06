import React, { useState } from 'react'
import '../includes/css/Style.css'

const Master = () => {

  const [wicket,getwicket]=useState(0)
  const [ball,getBall]=useState(0)
  const [striker,getStriker]=useState(sessionStorage.getItem('striker'))
  const [nonstriker,getNonStriker]=useState(sessionStorage.getItem('nonstriker'))
  const [Bowler,getBowler]=useState(sessionStorage.getItem('bowler'))
  const [run,getRun]=useState(0)
  const totalover=parseInt(sessionStorage.getItem("over"))

  function overCount(val){
    const com_over=Math.floor(val/6)
    const rem_ball=val%6

    return `${com_over}.${rem_ball}`
  }

  function Swap(){
    getNonStriker(striker)
    getStriker(nonstriker)
  }

  return (
    <div className='custom-container' >
      <div className='custom'>
        <div className='d-grid'>
          <span><h5>{run} - {wicket} ({overCount(ball)})</h5></span>
          <h5 className='mt-2'><em>CSK Opt to bat</em></h5>
          <span className='mt-2'>Batters: (team)</span>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Run</th>
                <th scope="col">Ball</th>
                <th scope="col">4s</th>
                <th scope="col">6s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{striker}*</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{nonstriker}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <span className='mt-2'>Bowler: (team)</span>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Run</th>
                <th scope="col">Ball</th>
                <th scope="col">4s</th>
                <th scope="col">6s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Bowler}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='me-5 justify-content-center'>
          <h1><em className='p-5' style={{margin:"100px"}}>Controls</em></h1>
          <div className='mt-3 d-flex'>
            <h5><em className='me-5'>Runs:</em></h5>
            <button className='btn btn-primary me-2' onClick={()=>{getBall(ball+1)}}>dot</button>
            <button className='btn btn-primary me-2' >1</button>
            <button className='btn btn-primary me-2' >2</button>
            <button className='btn btn-primary me-2' >3</button>
            <button className='btn btn-primary me-2' >4</button>
            <button className='btn btn-primary me-2' >6</button>
          </div>
            <hr style={{color:"black"}} />
          <div className='mt-3 d-flex'>
            <h5><em className='me-5'>Out:</em></h5>
            <button className='btn btn-primary'>Wicket</button>
          </div>
            <hr style={{color:"black"}} />
          <div className='mt-3 d-flex'>
            <h5><em className='me-5'>Extra:</em></h5>
            <button className='btn btn-primary me-2'>WideBall</button>
            <button className='btn btn-primary me-2'>No Ball</button>
            <button className='btn btn-primary me-2'>Leg by</button>
            <button className='btn btn-primary me-2'>Overthrow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Master