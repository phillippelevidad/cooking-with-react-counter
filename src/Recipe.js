import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        id,
        title,
        cookTime,
        servings,
        instructions,
        ingredients,
        handleDeleteRecipe
    } = props

    return (
        <div>
            <h3>{title}</h3>
            <button>Edit</button>
            <button onClick={() => handleDeleteRecipe(id)}>Delete</button>
            <dl>
                <dt>Cook Time</dt>
                <dd>{cookTime}</dd>

                <dt>Servings</dt>
                <dd>{servings}</dd>

                <dt>Instructions</dt>
                <dd>{instructions}</dd>

                <dt>Ingredients</dt>
                <dd><IngredientList ingredients={ingredients} /></dd>
            </dl>
        </div>
    )
}
