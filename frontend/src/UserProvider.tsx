import React, { useEffect, useState, useContext, ReactNode } from "react";
import axios from "axios";

export interface LoggedInUserProps {
  userID: number;
  username: string;
  basket: number[];
}

interface UserProviderProps {
  children?: ReactNode;
}

const UserContext = React.createContext<LoggedInUserProps>(
  JSON.parse(localStorage.getItem("user")!) || false
);

//@ts-ignore
const UserUpdateContext = React.createContext<(val) => void>();

const BasketContext = React.createContext<number[]>([]);

//@ts-ignore
const BasketUpdateContext = React.createContext<(val) => void>();

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

export const UserProvider = ({ children }: UserProviderProps) => {
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
    async function fetchUser(uid: number) {
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
