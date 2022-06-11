import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MainPage from "./Login/MainPage";
import AuthCard from "./components/AuthCard/AuthCard";
import Register from "./pages/Register/Register";

function App() {
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler =() =>{
  //   setCartIsShown(true);
  // }

  // const hideCartHandler =()=>{
  //   setCartIsShown(false);
  // }
  return (
    <div>
      <Register />
      <MainPage />
    </div>
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler}/>}
    //   <Header onShowCart = {showCartHandler}/>
    //   <main>
    //     <Meals />
    //   </main>
    //   </CartProvider>
  );
}

export default App;
