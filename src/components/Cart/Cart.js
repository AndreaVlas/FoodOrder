import React, { useContext, useState } from "react";
import { useUserContext } from "../../context/userContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import DatePicker from "../UI/DatePicker";

const Cart = (props) => {
  const { user } = useUserContext();
  const [date, setDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} lei`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = async () => {
    setIsSubmitting(true);
    const isoDate = new Date(date);
    const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    await fetch(
      "https://foodorderapp-c2463-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          orderedItems: cartCtx.items,
          date: dateTimeFormat.format(isoDate),
          email: user?.email,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Suma totală</span>
        <span>{totalAmount}</span>
      </div>
      <DatePicker onChange={setDate} value={date} />
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Închide
        </button>
        {hasItems && date && (
          <button className={classes.button} onClick={orderHandler}>
            Comandă
          </button>
        )}
      </div>
    </React.Fragment>
  );
  const isSubmittingModalContent = <p>Se trimit datele...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Datele au fost trimise cu succes!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onClose}>
          Închide
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
