import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const numberOfAlreadyAddedItems =
      props.currentAddedItems.find((item) => item.id === props.id)?.amount || 0;

    console.log(numberOfAlreadyAddedItems);

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    let finalToBeAddedNumber = enteredAmountNumber;

    if (numberOfAlreadyAddedItems + enteredAmountNumber >= 5) {
      const maxItemsThatCanBeAdded = 5 - numberOfAlreadyAddedItems;
      finalToBeAddedNumber = Math.min(
        maxItemsThatCanBeAdded,
        enteredAmountNumber
      );
    }

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(finalToBeAddedNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Cantitate"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Adaugă</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
