import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { AddButton } from '../../components'
import { handleChange } from '../../helpers/inputs'

import './style.css'

const Header = () => {
  
  const [search, setSearch] = useState({
    key: "",
    message: "",
    on: false
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
        <input value={search.key} name="key" onChange={performSearch} type="text" />
        {search.on 
          ? <button>
              <CgClose onClick={closeSearch} />
            </button>
          : <BiSearch />
        }
      </div>
      <AddButton />
    </header>
  )
}

export default Header
