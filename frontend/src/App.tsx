import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Basket } from "./pages/Basket";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./utils/providers/UserProvider";
import { Footer } from "./components/Footer";
import { ProductDescription } from "./pages/ProductDescription";
import React from "react";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
