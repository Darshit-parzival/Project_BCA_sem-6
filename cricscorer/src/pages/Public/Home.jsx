import React from 'react'
import { Link } from 'react-router-dom'
import '../includes/css/Style.css'

const Home = () => {
  return (
    <div>
      <div className='custom-home'>
        <div className='container'>
          <div className='custom-home-txt'>
            <h6>Make your Cricket experience Beautifull...</h6>
              <Link className='btn btn-primary' to='/hostIndex'>Click to Start Match</Link>
            <div>
              <Link to='/master' className='btn btn-success'>All is set!! Now you're ready to go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home