import React,{ Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../../assets/images/meals.jpg'
import HeaderButtonCart from './HeaderButtonCart/HeaderButtonCart'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderButtonCart />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Table full of food!!'/>
            </div>
        </Fragment>
    )
}
export default Header;