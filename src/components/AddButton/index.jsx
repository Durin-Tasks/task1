import React from 'react'
import { BiMessageAdd } from 'react-icons/bi'

import './style.css'

const AddButton = () => {
  return (
    <button className='flexed add-button'>
      <span>Add Event</span>
      <BiMessageAdd />
    </button>
  )
}

export default AddButton
