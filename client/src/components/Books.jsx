import React from "react";
import styles from "./Books.module.css";
import FlipCard from "./FlipCard";

const Books = () => {
    const renderFlipCards = () => {
        const numberOfFlipCards = 30;
        const gapBetweenCards = 15;

        const flipCards = [];
        for (let i = 0; i < numberOfFlipCards; i++) {
            flipCards.push(
                <div
                    key={i}
                    style={{ marginLeft: i > 0 ? `${gapBetweenCards}px` : 0 }}
                >
                    <FlipCard />
                </div>
            );
        }
        return flipCards;
    };

    return <div className={styles.container}>{renderFlipCards()}</div>;
};

export default Books;
