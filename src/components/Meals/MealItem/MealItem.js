import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;
  const vegOrNot = props.isVeg ? 'Veg' : 'Non Veg';

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      img: props.img,
      rating: props.rating,
      veg:props.isVeg
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}(<strong>{vegOrNot}</strong>)</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.img}>
          <img src={props.img} alt="" />
        </div>
        <div className={classes.price}>Rating: {props.rating}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
