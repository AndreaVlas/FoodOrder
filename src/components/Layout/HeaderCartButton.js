import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

const HeaderCartButton = (props) => {
  const navigate = useNavigate();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { signOut } = useUserContext();

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const logout = (email, password) => {
    signOut(email, password).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className={classes.headerButtons}>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Coșul de cumpărături</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      <button onClick={logout} className={btnClasses}>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
