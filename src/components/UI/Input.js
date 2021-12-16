import React from 'react';
import classes from './Input.module.css';
const input = React.forwardRef((props, ref) =>{
return (<div className={classes.input}>
    <label htmlFor ={props.input.id}>{props.label}</label>
    <input ref={ref}{...props.input}/>
</div>
);
})

//{...props.input} using this in that mode it means that
//when you declare a type of 'text' for example,
//the code maje sure that input type text is being added.
export default input;