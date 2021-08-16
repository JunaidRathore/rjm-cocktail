import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cock,loading} = useGlobalContext()
  console.log(cock)
  if (loading){
    return <Loading />
  }
  if(cock.length === 0){
    console.log('No Cocktails Matched Your Search Criteria')
    return <h2 className="section-title">No Cocktails Matched Your Search Criteria</h2>
  }
  else{
    return (
     <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {
            cock.map((drink,i)=>{
              return <Cocktail key={i} {...drink} />
            })
          }
        </div>
      </section>
    )
  }
}

export default CocktailList
