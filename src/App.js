import React, { useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import RecepieComponent from './recepei'

const App = () => {
  const app_id = 'b4ec0dd4';
  const app_key = '4508936520382f8a4ebfa858aaeb7461'
  const [recipes , setRecipes ] = useState([])
  const [search , setSearch ] = useState('')
  const [query , setQuery ] = useState('mutton')
  const urlToHit = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=6&calories=591-722&health=alcohol-free`;

  // setting input field value to search variable
  const setSearchValue = e => {
    setSearch(e.target.value)
  }
  // getting recipes and passing it to query
  useEffect(  () => {
    getRecipe();
  }, [query])

  // function using for getting recipes from the API
  const getRecipe = async () => {
    const response = await fetch(urlToHit)
    const recipeData = await response.json()
    setRecipes(recipeData.hits)
  }
  // function calls only when form will be submit
  const setQueryValue = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={setQueryValue} className='search-form'>
        <input type="text" className='search-bar' value={search} onChange={setSearchValue}/>
        <button type="submit" className='search-button' > Search </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
          <RecepieComponent
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
}

export default App;
