import AuthCard from "../../components/AuthCard/AuthCard";
import classes from "./Login.module.css";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import salad from "../../assets/salad.png";
import food from "../../assets/food.png";
import Register from "../Register/Register";
import { useEffect, useRef } from "react";
import { useUserContext } from "../../context/userContext";
import { toast } from "react-toastify";

import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "verifyEmail") {
      const userEmail = localStorage.getItem("emailVerification") || "";
      emailRef.current.value = userEmail;
      localStorage.removeItem("emailVerification");
    }
  }, []);

  const { signInUser } = useUserContext();

  const checkInputFill = () => {
    if (
      emailRef.current.value.trim().length == 0 ||
      passwordRef.current.value.trim().length == 0
    ) {
      toast.error("Completați vă rog toate casetele!");
    }
  };

  const onSubmit = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      signInUser(email, password)
        .then((a) => {
          navigate("/menus");
          // console.log(a.user);
          // if (a.user.emailVerified === true) {
          //   navigate("/menus");
          // } else {
          //   toast.error("Vă rugăm confirmați emailul!");
          // }
        })
        .catch((err) => {
          const errorCode = err.code;
          if (
            errorCode === "auth/user-not-found" ||
            errorCode === "auth/wrong-password"
          ) {
            toast.error("Email sau parola gresita");
          } else {
            toast.error("Serviciu momentan indisponibil");
          }
        });
    }
  };

  return (
    <form>
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
            <h1 className={classes.cart_form__title}>Înregistrare.</h1>
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
                  type="password"
                  className={classes.cart_formPassword_Input}
                  ref={passwordRef}
                />
                <img src={password} className={classes.passwordImg} />
                <button
                  type="button"
                  className={classes.cart_formButton}
                  onClick={() => {
                    checkInputFill();
                    onSubmit();
                  }}
                >
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
