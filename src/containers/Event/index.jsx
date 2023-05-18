import React from 'react'
import { BiPlus } from 'react-icons/bi'

import './style.css'

const Event = () => {
  return (
    <div className='flexed event'>
      <div className="flexed event--infos">
        <div className="event--infos--date">
          <h1>11TH NOV</h1>
        </div>
        <div className='flexed event--infos-right'>
          <div className="flexed event--infos--details">
            <h2>Sunday Supper Club</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam, quasi commodi quas rem aliquid.</p>
            <button className='btn--event-details'>
              <BiPlus />
              Event Details
            </button>
          </div>
          <div className="flexed event--infos--time">
            <h2>16:00 - 19:00</h2>
            <p>144 W Elm St, Chicago, 11. 60610, USA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
