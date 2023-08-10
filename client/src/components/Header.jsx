import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>
                    Welcome
                    <span className={styles.name}>John Doe</span>
                </h1>
                <hr />
            </div>
            <button
                id={styles.logout}
                onClick={() => {
                    navigate("/");
                }}
            >
                <p>Logout</p>
                <svg
                    stroke-width="4"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default Header;
