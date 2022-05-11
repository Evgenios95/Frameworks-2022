import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Basket } from "./pages/Basket";
import { Navbar } from "./components/Navbar";

import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { ProductDescription } from "./pages/ProductDescription";
import React from "react";
import axios from "axios";

function App() {
  const loggedIn = JSON.parse(localStorage.getItem("user")!) || false;
  const [user, setUser] = useState(loggedIn);
  const initialBasket = user
    ? user.basket
    : JSON.parse(localStorage.getItem("basket")!) || [];
  const [basketContent, setBasket] = useState(initialBasket);

  useEffect(() => {
    setBasket(initialBasket);
  }, [user]);

  useEffect(() => {
    async function fetchUser(uid: any) {
      if (user) {
        const url = "/basket/" + uid;
        const userBasketReq = await axios.get(url);
        setBasket(userBasketReq.data);
      } else {
      }
    }

    fetchUser(user.userID);
  }, []);

  return (
    <div className={"App"}>
      <Navbar setUser={setUser} user={user} basket={basketContent} />
      <Routes>
        <Route path="/" element={<Home setBasket={setBasket} />} />
        <Route path="/catalog" element={<Catalog setBasket={setBasket} />} />
        <Route
          path="/basket"
          element={
            <Basket
              basket={basketContent}
              setBasket={setBasket}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDescription setBasket={setBasket} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
