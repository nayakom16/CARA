import React from 'react'
import { feature } from '../../assets/assets'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
      {feature.map((item)=>{
         return(
          <div className='feature-container'>
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Features
