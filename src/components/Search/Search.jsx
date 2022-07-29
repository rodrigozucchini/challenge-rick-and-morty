import React from 'react'
import './Search.css'

const Search = ({text, setText}) => {

  const handleInputChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form className="search" >
        <div className="icone-search"></div>
        <input 
          name="name"
          placeholder='Search User' 
          type="text"
          value={text}
          onChange={handleInputChange}
        />
    </form>
  )
}

export default Search
