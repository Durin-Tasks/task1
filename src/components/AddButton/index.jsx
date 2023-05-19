import React from 'react'
import { BiMessageAdd } from 'react-icons/bi'

import './style.css'

const AddButton = ({ handleClick }) => {
  return (
    <button className='flexed add-button' onClick={handleClick}>
      <span>Add Event</span>
      <BiMessageAdd />
    </button>
  )
}

export default AddButton
