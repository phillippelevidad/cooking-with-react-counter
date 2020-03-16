import React, { useState } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleAddRecipe() {
    setRecipes(current => [...current, {
      id: uuidv4(),
      title: 'New',
      cookTime: '0:00',
      servings: 1,
      instructions: null,
      ingredients: [] 
    }])
  }

  function handleDeleteRecipe(id) {
    setRecipes(current => current.filter(recipe => recipe.id !== id))
  }

  return <RecipeList
    recipes={recipes}
    handleAddRecipe={handleAddRecipe}
    handleDeleteRecipe={handleDeleteRecipe}
  />
}

const sampleRecipes = [{
  id: uuidv4(),
  title: 'Plain chicken',
  cookTime: '1:45',
  servings: 3,
  instructions: '1. Put salt\n2. Put in oven\n3. Eat',
  ingredients: [{
    id: uuidv4(), name: 'Chicken', amount: '2 pounds'
  }, {
    id: uuidv4(), name: 'Salt', amount: '1 tbs'
  }]
}, {
  id: uuidv4(),
  title: 'Plain pork',
  cookTime: '0:45',
  servings: 5,
  instructions: '1. Put salt\n2. Put in oven\n3. Eat',
  ingredients: [{
    id: uuidv4(), name: 'Pork', amount: '3 pounds'
  }, {
    id: uuidv4(), name: 'Salt', amount: '2 tbs'
  }]
}]

export default App;
