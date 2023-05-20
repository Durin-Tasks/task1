import React, { useContext } from 'react'
import { BsLightbulb } from 'react-icons/bs'
import './style.css'

import { EventsContext } from '../../context'

const AddEvent = () => {
  
  const {
    closeEvent,
    event,
    changeEvent,
    addEvent,
    changeDate,
    changeTime,
    changeEndTime
  } = useContext(EventsContext)
  
  return (
    <div className='add-event'>
      <div 
        className='add-event--bg-closer'
        onClick={closeEvent}>
      </div>
      <div className='add-event--content'>
        <div className="add-event--header">
          <BsLightbulb />
          <h3>Add Event</h3>
        </div>
        <form>
          <input
            className='input-row' 
            value={event?.title}
            onChange={changeEvent}
            placeholder='Event Title' 
            type="text" 
            name="title" 
            id="" />
          <textarea
            className='input-row' 
            value={event?.description}
            onChange={changeEvent}
            placeholder='Event Description'
            type="text" 
            name="description" 
            id="" />
          <input
            className='input-row' 
            placeholder='Event Date'
            type="date" 
            name="date"
            onChange={changeDate}
            id="" />
          <div className="flexed input-row">
            <div className='input-set'>
              <label htmlFor='from'>From</label>
              <input
                className='input-row' 
                placeholder='Event From'
                type="time" 
                name="from" 
                value={event?.from}
                onChange={changeTime}
                id="from"/>
            </div>
            <div className='input-set'>
              <label htmlFor="to">To</label>
              <input
                className='input-row' 
                placeholder='Event To'
                type="time" 
                name="to"
                value={event?.to}
                onChange={changeEndTime}
                id="to" />
            </div>
          </div>
          <input
            className='input-row'
            value={event?.address}
            onChange={changeEvent}
            placeholder='Event Address'
            type="text" 
            name="address" 
            id="" />
        </form>
        <div className="add-event--footer">
          <button onClick={addEvent}>Submit</button>
          <button onClick={closeEvent}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
