import React from 'react'
import { useState,useEffect } from 'react'
import '../includes/css/Style.css'
import all_teams from "../includes/img/all_teams.jpg"
import dhoni from "../includes/img/dhoni.jpg"
import sachin from "../includes/img/sachin.jpg"
import kohli from "../includes/img/kohli.jpg"
import yuvi from "../includes/img/yuvi.jpg"

const Index = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slide"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        <img src={all_teams} alt='IMG' />
        <img src={dhoni} alt='IMG'/>
        <img src={sachin} alt='IMG' />
        <img src={kohli} alt='IMG'/>
        <img src={yuvi} alt='IMG' />
      </div>
    </div>
  )
}

export default Index