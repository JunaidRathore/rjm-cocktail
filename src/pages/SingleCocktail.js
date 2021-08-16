import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading,setLoading] = React.useState(true)
  const [ar,setAr] = React.useState([])
  const {id} = useParams()  
  React.useEffect(()=>{
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        console.log(data.drinks[0])
        setAr(data.drinks[0])
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  },[id])
     
   if (loading) {
    return <Loading />
  }
  if (!ar) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }   
  else{  
    const {strDrinkThumb,strDrink,strAlcoholic,strCategory,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = ar
    const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">Back home</Link>
      <h2 className="section-title">a1</h2>
      <div className="drink">
        <img src={strDrinkThumb} alt="a1" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {strCategory}
          </p><p>
            <span className="drink-data">Info:</span>
            {strAlcoholic}
          </p><p>
            <span className="drink-data">Glass:</span>
            {strGlass}
          </p><p>
            <span className="drink-data">Instructions:</span>
            {strInstructions}
          </p><p>
            <span className="drink-data">Ingredients:</span>
            {
              ingredients.map((ingredient,i)=>{
                return <span key={i}>{ingredient }</span>
              })
            }
          </p>
        </div>
      </div>
    </section>
  )
  }
}

export default SingleCocktail
