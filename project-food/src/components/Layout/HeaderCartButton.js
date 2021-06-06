import { useContext, useEffect, useState } from "react";
import CartIcon from "../../assets/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBump, setBtnBump] = useState(false);
  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ""}`;
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
