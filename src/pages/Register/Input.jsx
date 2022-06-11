import { useState } from "react";
import classes from "./Input.module.css";


const Input =(props) =>{
    return(
        <>
       {props.label && <div className={classes.label}>{props.label}</div>}
        <input type="text" className={classes.input} value={props.value} onChange={(event)=>{props.onChange(event.target.value)}}></input> 
        </>
    )
}

export default Input;
