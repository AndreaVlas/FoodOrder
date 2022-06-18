import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import DatePicker from "../UI/DatePicker";

const Cart = (props) => {
  const [date, setDate] = useState("");
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} lei`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // const orderHandler = (userData) => {
  //   fetch(
  //     "https://foodorderapp-c2463-default-rtdb.firebaseio.com/orders.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         user: userData,
  //         orderedItems: cartCtx.items,
  //       }),
  //     }
  //   );
  // };

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
  console.log(date);
  return (
    <Modal onClose={props.onClose}>
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
          <button className={classes.button}>Comandă</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
