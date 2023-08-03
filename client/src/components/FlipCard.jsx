import React from "react";
import styles from "./Books.module.css";

const FlipCard = () => {
    return (
        <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                    <p className={styles.title}>FLIP CARD</p>
                    <p>Hover Me</p>
                </div>
                <div className={styles.flip_card_back}>
                    <p className={styles.title}>BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
