import salad from './images/salad.png';
import food from './images/food.png';
import classes from "./Header.module.css";
import Form from './Form';

const Header = () => {
  return <div className={classes.cart}>
      <div className={classes.cart_design}>
      <img src={salad} className = {classes.cart_design__saladImage} />
      <img src={food} className = {classes.cart_design__foodImage} />
      <h1 className={classes.cart_design__title}>"Ștefan cel Mare" University</h1>
          </div>
          <Form />
      </div>;

};

export default Header;
