import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

import './style.css'

const GoToTop = () => {
  const [scrolled, setScrolled] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false)
    })
  })
  return (
    <a href='#app' className={`go-to-top ${scrolled && "go-to-top_scrolled"}`}>
      <BiArrowToTop />
      <p>Go To Top</p>
    </a>
  )
}

export default GoToTop
