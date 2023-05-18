import React from 'react'
import { RiMessageFill } from 'react-icons/ri'

import './style.css'

const AddButton = () => {
  return (
    <div className='flexed add-button'>
      Add Event
      <RiMessageFill />
    </div>
  )
}

export default AddButton
