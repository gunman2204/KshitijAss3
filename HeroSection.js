import React from 'react'
import herosectionimage from './image/bcgvideo.mp4'

export default function HeroSection() {
  return (
    <div className='hero d-flex'>
        <div className="box flex" id='box1'>
            <div id='herotext'>
            <p className="text">The only app that</p>
            <p className="text text2">gets your money into shape</p>
            <p className="text3">Manage money on the go in the Bachat app</p>
            </div>
        </div>
        <div className="box flex" id='box2'>
            <video src={herosectionimage}  autoPlay loop muted ></video>
        </div>
      
    </div>
  )
}
