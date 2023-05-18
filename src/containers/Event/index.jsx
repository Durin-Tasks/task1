import React, { useState } from 'react'
import { BiHide, BiLineChart, BiPlus } from 'react-icons/bi'
import textCutter from '../../helpers/textCutter'

import './style.css'

const Event = ({ title, description, date, from, to, address}) => {

  const [detailsOn, setDetailsOn] = useState(false)

  const shortDesc = textCutter(description)

  return (
    <div className='flexed event'>
      <div className="flexed event--infos">
        <div className="event--infos--date">
          <h1>
            {date.day}<span>TH</span> {date.month}
          </h1>
        </div>
        <div className='flexed event--infos-right'>
          <div className="flexed event--infos--details">
            <h2>{title}</h2>
            <p>{detailsOn ? description : shortDesc}</p>
            <button 
              className={`btn--event-details ${detailsOn && "btn--event-details_hide"}`}
              onClick={() => setDetailsOn((d) => !d)}
            >
              {detailsOn ? <BiHide /> : <BiPlus/>}
              {detailsOn ? "Hide" : "Event"} Details
            </button>
          </div>
          <div className="flexed event--infos--time">
            <h2>{from} - {to}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
