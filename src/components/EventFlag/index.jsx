import React, { useEffect, useState } from 'react'

import './style.css'

const EventFlag = () => {
  const [scrolled, setScrolled] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 25 ? setScrolled(true) : setScrolled(false)
    })
  })

  return (
    <div className={`event-flag ${scrolled && "event-flag_scrolled"}`}>
      <p>EVENTS</p>
    </div>
  )
}

export default EventFlag
