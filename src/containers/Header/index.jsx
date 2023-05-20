import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { AddButton } from '../../components'
import { EventsContext } from '../../context'

import AddEvent from '../AddEvent'

import './style.css'

const Header = () => {
  const { eventOn, openEvent } = useContext(EventsContext)

  const [search, setSearch] = useState({
    key: "",
    message: "",
    on: false
  })

  function performSearch(e) {
    setSearch((search) => ({ ...search, on: true, key: e.target.value }))
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
        handleClick={openEvent}
      />
      {eventOn && 
        <AddEvent />
      }
    </header>
  )
}

export default Header
