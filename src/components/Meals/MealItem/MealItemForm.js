import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useContext, useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const cartCtx = useContext();

  const submitHandler = (e) => {};

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button onSubmit={submitHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
