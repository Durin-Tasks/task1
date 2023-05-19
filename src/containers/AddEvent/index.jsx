import React, { useState } from 'react'
import { BsLightbulb } from 'react-icons/bs'
import './style.css'

import { handleChange } from '../../helpers/inputs.js'

const AddEvent = ({handleClose, event, setEvent}) => {
  const [unparsedDatas, setUnparsedData] = useState({
    date: "",
    from: "",
    to: ""
  })

  function changeDate(e){
    handleChange(e, setUnparsedData)
  }

  function changeTime(e){
    if(unparsedDatas.to !== ""){
      e.target.value < unparsedDatas.from
      ? handleChange(e, setUnparsedData)
      : alert("From date has to be less than to date !")
    } else {
      handleChange(e, setUnparsedData)
    }
  }

  function changeEndTime(e){
    if(unparsedDatas.from !== ""){
      e.target.value > unparsedDatas.from
      ? handleChange(e, setUnparsedData)
      : alert("To date has to be greater than from date !")
    } else {
      handleChange(e, setUnparsedData)
    }
  }

  function handleAddEvent(){
    alert("event added !")
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
            value={unparsedDatas.date}
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
                value={unparsedDatas.from}
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
                value={unparsedDatas.to}
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
