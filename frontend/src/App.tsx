import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Basket } from "./pages/Basket";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./UserProvider";
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
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
