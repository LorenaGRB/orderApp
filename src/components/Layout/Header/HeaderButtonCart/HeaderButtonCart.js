import React from 'react'
import CartIcon from '../../../Cart/SVGicons/CartIcon'
import classes from './HeaderButtonCart.module.css'

const HeaderButtonCart = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}
export default HeaderButtonCart;