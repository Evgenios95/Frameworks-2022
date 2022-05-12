import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();
const BasketContext = React.createContext();
const BasketUpdateContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function useBasket() {
  return useContext(BasketContext);
}

export function useBasketUpdate() {
  return useContext(BasketUpdateContext);
}

export const UserProvider = ({ children }: any) => {
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
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        <BasketContext.Provider value={basketContent}>
          <BasketUpdateContext.Provider value={setBasket}>
            {children}
          </BasketUpdateContext.Provider>
        </BasketContext.Provider>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
