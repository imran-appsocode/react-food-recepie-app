import React from 'react'
import  './recipe.component.css'

const recepie = ({title, calories, image, ingredients}) => {
    return (
        <div className='recipe'>
            <h4>{title}</h4>
            <p className='calories'>Calories: {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}

            </ol>
            <img className='image' src={image} alt="" />
        </div>
    )
}

export default recepie;