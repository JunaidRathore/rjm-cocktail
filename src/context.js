import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cock,setCock] = useState([])
  const [loading,setLoading] = useState(true)
  const [isChange,setIsChange] = useState(false)
  const [value,setValue] = useState('')
  useEffect(()=>{
    setLoading(true)
    fetch(url).then(res=>res.json()).then(cock=>{
      setCock(cock.drinks)
      if(isChange){
        const newCock = cock.drinks.filter(drink=>drink.strDrink.toLowerCase().includes(value.toLowerCase())) 
    setCock(newCock)
      }
      // if(cock.length === 0 && !isChange){
      //   setLoading(true)
      // }
    })
    setLoading(false)
  },[value])

  let handleSearchValue = (e)=>{
    const name = e.target.value
    setValue(name)
    // const newCock = cock.filter(drink=>drink.strDrink.toLowerCase().includes(value.toLowerCase())) 
    // setCock(newCock)
    setIsChange(true)
    setLoading(true)


  }
  return <AppContext.Provider 
    value={{
      cock,
      value,
      handleSearchValue,
      loading
    }}
    >
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
