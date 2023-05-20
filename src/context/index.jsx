import React, { useState, createContext } from 'react'
import { events, initEvent } from '../Datas/events'
import months from '../Datas/months'
import { checkFields } from '../helpers/inputs'

export const EventsContext = createContext()

export const EventsProvider = ({ children }) => {

  const [allEvents, setAllEvents] = useState(events)
  const [event, setEvent] = useState(initEvent)
  const [eventOn, setEventOn] = useState(false)
  
  function changeEvent(e) {
    const {name, value} = e.target;

    setEvent((event) => ({ ...event, [name]: value }))
  }

  function changeDate(e) {  
    const date = new Date(e.target.value)
    const day = date?.getDate()
    const month = date?.getMonth()
    console.log(date, day, month)
    setEvent((event) => ({ ...event, date: { day, month: months[month] } }))
  }

  function changeTime(e){
    if(event.to !== ""){
      e.target.value < event.from
      ? changeEvent(e)
      : alert("From date has to be less than to date !")
    } else {
      changeEvent(e)
    }
  }

  function changeEndTime(e){
    if(event.from !== ""){
      e.target.value > event.from
      ? changeEvent(e)
      : alert("To date has to be greater than from date !")
    } else {
      changeEvent(e)
    }
  }

  function addEvent() {
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
      setAllEvents((allEvents) => ([ event, ...allEvents ]))
      closeEvent()
      setEvent(initEvent)
    }
  }

  function openEvent() {
    setEventOn(true)
  }

  function closeEvent() {
    setEventOn(false)
  }


  return (
    <EventsContext.Provider value={{allEvents, event, eventOn, changeEvent, changeDate, changeTime, changeEndTime, addEvent, openEvent, closeEvent}}>
      {children}
    </EventsContext.Provider>
  )
}