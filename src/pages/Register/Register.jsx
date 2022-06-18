import { useState } from "react";
import AuthCard from "../../components/AuthCard/AuthCard";
import classes from "./Register.module.css";
import avatar from "../../assets/user-avatar.png";
import Input from "./Input";
import { useUserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { registerUser } = useUserContext();

  // const checkInputFill = () => {
  //   if (nameValue.trim().length == 0) {
  //     toast.error("Name is empty");
  //   } else if (emailValue.trim().length == 0) {
  //     toast.error("Email is empty");
  //   } else if (passwordValue.trim().length == 0) {
  //     toast.error("Password is empty");
  //   }
  // };

  const onSubmit = (e) => {
    if (emailValue.includes("@student.usv.ro")) {
      // e.preventDefault();
      if (nameValue && emailValue && passwordValue) {
        registerUser(nameValue, emailValue, passwordValue)
          .then(() => {
            toast.info("Verifica emailul pentru logare!");
          })
          .catch(() => {
            toast.error(
              "Problema!!!!!!!!!! andrea e urata :( :D da o iubesc <3 :D :P SPPER SA UITI ASTA AICI :D"
            );
          });
      }
    } else {
      toast.error("Invalid email address");
    }
    // setNameValue("");
    // setEmailValue("");
    // setPasswordValue("");
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
          <img src={avatar} className={classes.avatar} />
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
                value={passwordValue}
                onChange={(newValue) => setPasswordValue(newValue)}
              />
              <button
                className={classes.formButton}
                onClick={() => {
                  // checkInputFill();
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
