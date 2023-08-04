import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();

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
                    <input
                        required
                        type="text"
                        className={style.input}
                        placeholder="Username"
                    />
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                </div>
                <div className={style.group}>
                    <input
                        required
                        type="text"
                        className={style.input}
                        placeholder="Password"
                    />
                    <span className={style.highlight}></span>
                    <span className={style.bar}></span>
                </div>
                <button
                    className={style.learn_more}
                    onClick={() => {
                        navigate("/Home");
                    }}
                >
                    <span className={style.circle} aria-hidden="true">
                        <span className={`${style.icon} ${style.arrow}`}></span>
                    </span>
                    <span className={style.button_text}>Login</span>
                </button>
                <button className={style.learn_more}>
                    <span className={style.circle} aria-hidden="true">
                        <span className={`${style.icon} ${style.arrow}`}></span>
                    </span>
                    <span className={style.button_text}>Register</span>
                </button>
                <button
                    type="button"
                    className={style.cta}
                    onClick={handleForgotPasswordClick}
                >
                    <span className={style.hover_underline_animation}>
                        Forgot Password
                    </span>
                    <svg
                        viewBox="0 0 46 16"
                        height="10"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal"
                    >
                        <path
                            transform="translate(30)"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                            data-name="Path 10"
                            id="Path_10"
                        ></path>
                    </svg>
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
