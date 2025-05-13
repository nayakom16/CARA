import React from 'react'
import './VideoAbout.css'
import { assets } from '../../../assets/assets'

const VideoAbout = () => {
  return (
    <div className='about-container-video'>
      <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
            <video autoPlay loop muted src={assets.about_video}></video>
        </div>
    </div>
  )
}

export default VideoAbout
