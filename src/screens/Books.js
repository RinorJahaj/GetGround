import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book";
import { listBooks } from "../actions/booksActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const Books = () => {
  const dispatch = useDispatch();

  const booksList = useSelector((state) => state.booksList);
  const { loading, error, books } = booksList;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>Error</h3>
      ) : (
        <div>
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
