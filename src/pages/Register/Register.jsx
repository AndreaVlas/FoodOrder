import { useState } from "react";
import AuthCard from "../../components/AuthCard/AuthCard";
import classes from "./Register.module.css";
import Input from "./Input";
import { useUserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { registerUser } = useUserContext();

  const checkInputFill = () => {
    if (
      nameValue.trim().length === 0 ||
      emailValue.trim().length === 0 ||
      passwordValue.trim().length === 0
    ) {
      toast.error("Completați vă rog toate casetele!");
    }
  };

  const onSubmit = (e) => {
    if (emailValue === "") {
      return;
    }
    if (
      emailValue.includes("@student.usv.ro") ||
      emailValue.includes("@usm.ro")
    ) {
      if (nameValue && emailValue && passwordValue) {
        registerUser(nameValue, emailValue, passwordValue)
          .then(() => {
            toast.info("Verifică emailul pentru logare!");
          })
          .catch(() => {
            toast.error("Contul este deja creat cu acest email");
          });
      }
    } else {
      toast.error("Adresă de email invalidă!");
    }
  };
  return (
    <AuthCard
      leftSideContent={
        <>
          <h2 className={classes.title}>Ne bucurăm să te vedem!</h2>
          <h3 className={classes.message}>
            Înscrieți-vă pentru a utiliza toate caracteristicile aplicației{" "}
          </h3>
        </>
      }
      rightSideContent={
        <>
          <h1 className={classes.cart_form__title}>Creare cont.</h1>
          <div className={classes.cart_form__component}>
            <h1 className={classes.cart_form__quest}>
              Aveți deja un cont?{" "}
              <h1
                className={classes.cart_form__sign}
                onClick={() => navigate("/login")}
              >
                Login
              </h1>
            </h1>
          </div>
          <div className={classes.form}>
            <div className={classes.inputs}>
              <Input
                label="Nume și prenume"
                value={nameValue}
                onChange={(newValue) => setNameValue(newValue)}
              />
              <Input
                label="Email"
                value={emailValue}
                onChange={(newValue) => setEmailValue(newValue)}
              />
              <Input
                label="Parolă"
                type="password"
                value={passwordValue}
                onChange={(newValue) => setPasswordValue(newValue)}
              />
              <button
                className={classes.formRegisterButton}
                onClick={() => {
                  checkInputFill();
                  onSubmit();
                }}
              >
                Register
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};
export default Register;
