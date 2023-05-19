import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { AddButton } from '../../components'

import AddEvent from '../AddEvent'

import { handleChange } from '../../helpers/inputs'

import './style.css'

const Header = () => {
  const [search, setSearch] = useState({
    key: "",
    message: "",
    on: false
  })

  const [eventOn, setEventOn] = useState(false)
  const [newEvent, setNewEvent] = useState({
    on: false, 
    form: {
      title: "",
      description: "",
      date: {
        day: "",
        month: ""
      },
      from: "",
      to: "",
      address: ""
    }
  })

  function performSearch(e){
    handleChange(e, setSearch);
    setSearch((search) => ({ ...search, on: true }))
  }
  function closeSearch(){
    setSearch((search) => ({ ...search, on: false, key: "" }));
  }

  return (
    <header className='flexed'>
      <div className="flexed searcher">
        <input placeholder='Search Event' value={search.key} name="key" onChange={performSearch} type="text" />
        {search.on 
          ? <button>
              <CgClose onClick={closeSearch} />
            </button>
          : <BiSearch />
        }
      </div>
      <AddButton 
        handleClick={() => setEventOn(true)}
      />
      {eventOn && 
        <AddEvent 
          handleClose={() => setEventOn(false)}
          event={newEvent}
          setEvent={setNewEvent}
        />
      }
    </header>
  )
}

export default Header
