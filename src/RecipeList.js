import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
    const {
        recipes,
        handleAddRecipe,
        handleDeleteRecipe
    } = props

    const items = recipes.map(recipe => {
        return <Recipe
            key={recipe.id}
            handleDeleteRecipe={handleDeleteRecipe}
            {...recipe}
        />
    })

    return (
        <>
            <div>{items}</div>
            <button onClick={handleAddRecipe}>Add recipe</button>
        </>
    )
}
