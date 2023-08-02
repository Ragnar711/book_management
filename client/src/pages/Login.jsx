import React, { useState } from "react";
import style from "./Login.module.css";

const Login = () => {
    const [showForgotPasswordModal, setShowForgotPasswordModal] =
        useState(false);

    const handleForgotPasswordClick = () => {
        setShowForgotPasswordModal(true);
    };

    const handleModalClose = () => {
        setShowForgotPasswordModal(false);
    };

    return (
        <div className={style.container}>
            <form className={style.form}>
                <h2>Login</h2>
                <div className={style.group}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id={style.username} required />
                </div>
                <div className={style.group}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id={style.password} required />
                </div>
                <div className={style.buttonGroup}>
                    <button type="submit" className={style.login}>
                        Login
                    </button>
                </div>
                <button type="button" className={style.registerButton}>
                    Register
                </button>
                <button
                    type="button"
                    className={style.forgotLink}
                    onClick={handleForgotPasswordClick}
                >
                    Forgot Password
                </button>

                {showForgotPasswordModal && (
                    <div className={style.modalOverlay}>
                        <div className={style.modalContent}>
                            <h2>Forgot Password</h2>
                            <p>Enter your email to get a verification email:</p>
                            <input type="email" placeholder="Email" />
                            <button type="button">
                                Get Verification Email
                            </button>
                            <span
                                className={style.closeModalButton}
                                onClick={handleModalClose}
                            >
                                &times;
                            </span>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
