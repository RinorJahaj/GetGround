export const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case "BOOK_REQUEST":
      return {
        loading: true,
        books: [],
      };
    case "BOOK_REQUEST_SUCCESS":
      return {
        loading: false,
        books: action.payload,
      };
    case "BOOK_REQUEST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
