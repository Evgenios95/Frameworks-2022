import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Basket } from "./pages/Basket";
import { Navbar } from "./components/Navbar";

import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { ProductDescription } from "./pages/ProductDescription";
import React from "react";

function App() {
  const loggedIn = JSON.parse(localStorage.getItem("user")!) || false;
  const [user, setUser] = useState(loggedIn);
  const initialBasket = user
    ? user.basket
    : localStorage.getItem("basket") || [];
  const [basketContent, setBasket] = useState(initialBasket);

  useEffect(() => {
    setBasket(initialBasket);
  }, [user]);

  return (
    <div className={"App"}>
      <Navbar setUser={setUser} user={user} basket={basketContent} />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/product/:id" element={<ProductDescription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
