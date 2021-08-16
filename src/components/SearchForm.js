import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {handleSearchValue,value} = useGlobalContext()
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" name="name" value={value} onChange={handleSearchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
