import { useState } from "react";
import AuthCard from "../../components/AuthCard/AuthCard";
import classes from "./Register.module.css";
import avatar from "../../assets/user-avatar.png";
import Input from "./Input";

const Register =() =>{
    const [emailValue, setEmailValue] = useState("");
    return(
    <AuthCard
    leftSideContent={
        <>
       <h2 className={classes.title}>Ne bucurăm să te vedem!</h2>
       <h3 className={classes.message}>Înscrieți-vă pentru a utiliza toate caracteristicile aplicației </h3>
      </>
    }
    rightSideContent={
        <>
        <img src={avatar} className={classes.avatar}/>
        <div className={classes.form}>
        <div className={classes.inputs}>
        <Input label="Nume și prenume" value={emailValue} onChange={(newValue) => setEmailValue(newValue)}/>
        <Input label="Email" value={emailValue} onChange={(newValue) => setEmailValue(newValue)}/>
        <Input label="Parolă" value={emailValue} onChange={(newValue) => setEmailValue(newValue)}/>
        <button className={classes.formButton}>Register</button>
        </div>
        </div>
        </>
    }
    />
    )
};
export default Register;
