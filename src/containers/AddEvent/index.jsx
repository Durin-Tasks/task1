import React from 'react'
import { BsLightbulb } from 'react-icons/bs'
import './style.css'

import { checkFields, handleChange } from '../../helpers/inputs.js'

const AddEvent = ({handleClose, event, setEvent, setEvents}) => {

  function changeDate(e) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULLY", "AUG", "SEPT", "OCT", "NOV", "DEC"]
    const date = new Date(e.target.value)
    const day = date?.getDate()
    const month = date?.getMonth()
    console.log(date, day, month)
    setEvent((event) => ({ ...event, date: { day, month: months[month] } }))
  }

  function changeTime(e){
    if(event.to !== ""){
      e.target.value < event.from
      ? handleChange(e, setEvent)
      : alert("From date has to be less than to date !")
    } else {
      handleChange(e, setEvent)
    }
  }

  function changeEndTime(e){
    if(event.from !== ""){
      e.target.value > event.from
      ? handleChange(e, setEvent)
      : alert("To date has to be greater than from date !")
    } else {
      handleChange(e, setEvent)
    }
  }

  function handleAddEvent() {
    const fields = {
      title: event.title, 
      description: event.description, 
      from: event.from, 
      to: event.to, 
      address: event.address,
      day: event.date.day,
      month: event.date.month
    }

    if (checkFields(fields)) {
      setEvents((events) => ([...events, event]))
      handleClose()
    }
  }
  
  return (
    <div className='add-event'>
      <div 
        className='add-event--bg-closer'
        onClick={handleClose}>
      </div>
      <div className='add-event--content'>
        <div className="add-event--header">
          <BsLightbulb />
          <h3>Add Event</h3>
        </div>
        <form>
          <input
            className='input-row' 
            value={event.title}
            onChange={(e) => handleChange(e, setEvent)}
            placeholder='Event Title' 
            type="text" 
            name="title" 
            id="" />
          <textarea
            className='input-row' 
            value={event.description}
            onChange={(e) => handleChange(e, setEvent)}
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
                value={event.from}
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
                value={event.to}
                onChange={changeEndTime}
                id="to" />
            </div>
          </div>
          <input
            className='input-row'
            value={event.address}
            onChange={(e) => handleChange(e, setEvent)}
            placeholder='Event Address'
            type="text" 
            name="address" 
            id="" />
        </form>
        <div className="add-event--footer">
          <button onClick={handleAddEvent}>Confirmer</button>
          <button onClick={handleClose}>Annuler</button>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
