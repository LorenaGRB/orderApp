import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm/MealItemForm';

const MealItem = (props) => {
    const price = `$${ props.price.toFixed(2) }`;
    return (
        <li key = { props.key } className = { classes.meal }>
            <div>
                <h3>{ props.name }</h3>
                <div className = { classes.description }>{ props.description }</div>
                <div className = { classes.price }>{ price }</div>
            </div>
            <MealItemForm id = { props.id }/>
        </li>
    )
}

export default MealItem