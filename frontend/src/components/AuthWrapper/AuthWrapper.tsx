import "./style.css";
import React, { useState } from "react";
import { RegisterForm } from "../RegisterForm";
import Logo from "../../assets/logo.png";
import { LoginForm } from "../LoginForm";

export interface AuthWrapperProps {
  setUser: () => void;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({
  setUser,
}: AuthWrapperProps) => {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <div className="navbarUserWrapper">
      <button onClick={() => setModalType("login")}>Log in</button>
      <button onClick={() => setModalType("register")}>Register</button>

      {modalType && (
        <div className="modalWrapper">
          <div className="modal">
            <button className="closeModal" onClick={() => setModalType(null)}>
              <img src={Logo} alt={"Logo"} />
            </button>

            {modalType === "login" && (
              <LoginForm closeModalFunction={setModalType} setUser={setUser} />
            )}

            {modalType === "register" && <RegisterForm />}
          </div>
        </div>
      )}
    </div>
  );
};
