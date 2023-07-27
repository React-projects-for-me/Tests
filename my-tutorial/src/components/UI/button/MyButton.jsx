import React from 'react';
import classes from './MyButton.module.css'


const MyButton = (props) => {
    return ( 
    <button {...props} className={classes.myBtn}>
        {props.tittle}
    </button> );
}
 
export default MyButton;