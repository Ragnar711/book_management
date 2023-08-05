import "./Filters.css";

const Filters = () => {
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
            <button class="fancy">
                <span class="top-key"></span>
                <span class="text">Add Book</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </button>
        </div>
    );
};

export default Filters;
