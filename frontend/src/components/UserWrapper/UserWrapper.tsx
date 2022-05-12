import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import { useUser, useUserUpdate } from "../../UserProvider";

export const UserWrapper = () => {
  const user = useUser();
  const setUser = useUserUpdate();
  return (
    <motion.div
      className={"userInfo"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={"usernameDisplay"}>
        <p>Currently logged in as</p>
        <h1>{user.username}</h1>
      </div>
      <button
        className={"logoutButton"}
        onClick={() => {
          localStorage.removeItem("user");
          setUser(false);
        }}
      >
        Log out
      </button>
    </motion.div>
  );
};
