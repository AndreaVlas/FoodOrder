import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Register from "./pages/Register/Register";
import { useUserContext } from "./context/userContext";
import Login from "./pages/Login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { user } = useUserContext();

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/menus"
            element={
              <CartProvider>
                {cartIsShown && <Cart onClose={hideCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <main>
                  <Meals />
                </main>
              </CartProvider>
            }
          />
          <Route
            path="*"
            element={
              user ? (
                <Navigate to="/menus" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
