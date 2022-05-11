import "./style.css";
import React from "react";

interface UserWrapperProps {
  user: string | boolean | any;
  setUser: (user: string | boolean | any) => void;
}

export const UserWrapper = ({ user, setUser }: UserWrapperProps) => {
  return (
    <div className={"userInfo"}>
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
    </div>
  );
};
