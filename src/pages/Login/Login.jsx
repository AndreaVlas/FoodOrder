import AuthCard from "../../components/AuthCard/AuthCard";
import classes from "./Login.module.css";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import salad from "../../assets/salad.png";
import food from "../../assets/food.png";
import Register from "../Register/Register";
import { useRef } from "react";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { signInUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      signInUser(email, password).then(() => {
        navigate("/menus");
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <AuthCard
        leftSideContent={
          <>
            <img src={salad} className={classes.cart_design__saladImage} />
            <img src={food} className={classes.cart_design__foodImage} />
            <h1 className={classes.cart_design__title}>
              Universitatea "Ștefan cel Mare"
            </h1>
          </>
        }
        rightSideContent={
          <div>
            <h1 className={classes.cart_form__title}>Să începem.</h1>
            <div className={classes.cart_form__component}>
              <h1 className={classes.cart_form__quest}>
                Nu aveți încă un cont?{" "}
                <h1
                  className={classes.cart_form__sign}
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </h1>
              </h1>
              <div className={classes.cart_form_input}>
                <h1 className={classes.cart_formEmail}>Email</h1>
                <input
                  type="text"
                  className={classes.cart_formEmail_Input}
                  ref={emailRef}
                />
                <img src={email} className={classes.emailImg} />
                <h1 className={classes.cart_formPassword}>Parolă</h1>
                <input
                  type="text"
                  className={classes.cart_formPassword_Input}
                  ref={passwordRef}
                />
                <img src={password} className={classes.passwordImg} />
                <button type="submit" className={classes.cart_formButton}>
                  Login
                </button>
              </div>
            </div>
          </div>
        }
      />
    </form>
  );
};

export default Login;
