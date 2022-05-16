import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import { LoggedInUserProps, useUser, useUserUpdate } from "../../UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const UserWrapper = () => {
  const user: LoggedInUserProps | boolean = useUser();
  const setUser: (user: boolean) => void = useUserUpdate();

  return (
    <motion.div
      className={"user-info"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="logout-button-wrapper">
        <button
          className={"product-button user-action-button"}
          onClick={() => {
            localStorage.removeItem("user");
            setUser(false);
          }}
        >
          Log out
        </button>
      </div>

      <div className="username-display">
        <FontAwesomeIcon className="user-icon" icon={faUserCircle} />
        <div>{user.username}</div>
      </div>
    </motion.div>
  );
};
