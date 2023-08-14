import "./Filters.css";
import Dialog from "../pages/AddBook";
import { useState } from "react";

const Filters = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleAddBook = (newBook) => {
        console.log("Adding book:", newBook);
    };
    return (
        <div className="filters">
            <h2>Filters</h2>
            <div className="filter-item">
                <label htmlFor="bookName">Book Name:</label>
                <input type="text" id="bookName" />
            </div>
            <div className="filter-item">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" />
            </div>
            <div className="filter-item">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" />
            </div>
            <div className="filter-item">
                <label htmlFor="review">Review:</label>
                <input type="number" id="review" min="0" max="5" />
            </div>
            <div className="filter-item">
                <label>Genre:</label>
                <select>
                    <option value="">All Genres</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>
            </div>
            <div className="filter-item">
                <label>Read Status:</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="readStatus"
                            value="all"
                            defaultChecked
                        />{" "}
                        All
                    </label>
                    <label>
                        <input type="radio" name="readStatus" value="read" />{" "}
                        Read
                    </label>
                    <label>
                        <input type="radio" name="readStatus" value="unread" />{" "}
                        Unread
                    </label>
                </div>
            </div>
            <button className="fancy" onClick={handleDialogOpen}>
                <span className="top-key"></span>
                <span className="text">Add Book</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>

            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                onAddBook={handleAddBook}
            />
        </div>
    );
};

export default Filters;
