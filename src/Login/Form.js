import classes from "./Form.module.css";
import email from "./images/email.png";
import password from "./images/password.png";

const Form = () => {
  return (
    <div className={classes.cart_form}>
      <h1 className={classes.cart_form__title}>Get's started.</h1>
      <div className={classes.cart_form__component}>
        <h1 className={classes.cart_form__quest}>
          Don't have an account yet?{" "}
          <h1 className={classes.cart_form__sign}>Sign up</h1>
        </h1>
        <div className={classes.cart_form_input}>
          <h1 className={classes.cart_formEmail}>Email</h1>
          <input type="text" className={classes.cart_formEmail_Input} />
          <img src={email} className={classes.emailImg} />
          <h1 className={classes.cart_formPassword}>Password</h1>
          <input type="text" className={classes.cart_formPassword_Input} />
          <img src={password} className={classes.passwordImg} />
          <button className={classes.cart_formButton}></button>
          <h3 className={classes.buttonText}>Login</h3>
        </div>
      </div>
    </div>
  );
};

export default Form;
