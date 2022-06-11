import classes from "./AuthCard.module.css";

const AuthCard = (props) => {
  return (
    <div className={classes.cart}>
      <div className={classes.cart_header}>{props.leftSideContent}</div>
      <div className={classes.cart_content}>{props.rightSideContent}</div>
    </div>
  );
};

export default AuthCard;
