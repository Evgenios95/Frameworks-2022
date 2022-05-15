import "./style.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

interface UserWrapperProps {
  user: string | boolean | any;
  setUser: (user: string | boolean | any) => void;
}

export const UserWrapper = ({ user, setUser }: UserWrapperProps) => {
  return (
    <div className={"user-info"}>
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
    </div>
  );
};
