import "./style.css";
import React, { useState } from "react";
import { RegisterForm } from "../RegisterForm";
import Logo from "../../assets/logo.png";
import { LoginForm } from "../LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const AuthWrapper = () => {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <div className="navbar-user-wrapper">
      <button
        className="product-button user-action-button"
        onClick={() => setModalType("login")}
      >
        Log in
      </button>
      <button
        className="product-button user-action-button"
        onClick={() => setModalType("register")}
      >
        Register
      </button>

      {modalType && (
        <div className="modal-wrapper">
          <div className="modal">
            <button className="close-modal" onClick={() => setModalType(null)}>
              <FontAwesomeIcon icon={faClose} />
            </button>

            {modalType === "login" && <LoginForm setModalType={setModalType} />}

            {modalType === "register" && (
              <RegisterForm setModalType={setModalType} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
