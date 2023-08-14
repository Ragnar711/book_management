import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddBook.css";

const AddBookDialog = ({ open, onClose, onAddBook }) => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [genre, setGenre] = useState("");
    const [readStatus, setReadStatus] = useState("");

    const handleAddBook = () => {
        const newBook = {
            name,
            author,
            date,
            review,
            image: imageFile,
            genre,
            readStatus,
        };

        onAddBook(newBook);
        onClose();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Book</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill in the book details:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Author"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <TextField
                    margin="dense"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <div className="image-upload">
                    <label htmlFor="imageFile">Image:</label>
                    <input
                        type="file"
                        id="imageFile"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="review">
                    <label htmlFor="review">Review:</label>
                    <input
                        type="number"
                        id="review"
                        min="0"
                        max="5"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    {Array.from({ length: parseInt(review) }).map(
                        (_, index) => (
                            <span key={index}>⭐</span>
                        )
                    )}
                </div>
                <div className="genre">
                    <label htmlFor="genre">Genre:</label>
                    <select
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">Select Genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                        <option value="sci-fi">Sci-Fi</option>
                    </select>
                </div>
                <div className="read-status">
                    <label>Read Status:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="readStatus"
                                value="read"
                                checked={readStatus === "read"}
                                onChange={(e) => setReadStatus(e.target.value)}
                            />{" "}
                            Read
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="readStatus"
                                value="unread"
                                checked={readStatus === "unread"}
                                onChange={(e) => setReadStatus(e.target.value)}
                            />
                            Unread
                        </label>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAddBook}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddBookDialog;
