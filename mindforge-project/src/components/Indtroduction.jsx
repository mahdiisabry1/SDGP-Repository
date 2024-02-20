/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import './Introduction.css'

const Indtroduction = () => {

  return (
    <div className='outerLayer'>
        <div className='innerLayer'>
            <h1 className='TheBanner'><marquee behavior="scroll" direction="right" scrollamount="30">Welcome to MindForge</marquee></h1>
            <p className='paragrapgh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto molestiae unde inventore expedita a ipsum! Fuga dicta dolore, tempora molestias at ipsam placeat praesentium dignissimos consectetur neque eveniet? Quisquam, error praesentium? A consequuntur repellat molestias non dolorem aliquam rem voluptates? Aut magni, blanditiis perferendis impedit iusto provident perspiciatis incidunt?</p>
            <div>
              <button className='learn-more'><a href="/"> Explore </a></button>
            </div>
            <div>
              <button className='learn-more'><a href="/"> Get Started </a></button>
            </div>
        </div>
    </div>
  )
}

export default Indtroduction