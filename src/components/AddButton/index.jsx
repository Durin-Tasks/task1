import React from 'react'
import { BiMessageAdd } from 'react-icons/bi'


import './style.css'

const AddButton = () => {
  return (
    <button className='flexed add-button'>
      Add Event
      <BiMessageAdd />
    </button>
  )
}

export default AddButton
