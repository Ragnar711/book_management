import React from "react";
import Header from "../components/Header";
import Books from "../components/Books";
import Filters from "../components/Filters";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <Filters />
                <Books />
            </div>
        </div>
    );
};

export default Home;
