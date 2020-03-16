import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {
    const items = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient} />
    })
    return items
}
