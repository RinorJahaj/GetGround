export const listBooks =
  (pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "BOOK_REQUEST" });

      const reqParam = {
        method: "POST",
        params: { page: 1, itemsPerPage: 5 },
        headers: { "Content-Type": "application/json" },
      };

      let currentPage = reqParam.params.page;
      let itemsPerPage = reqParam.params.itemsPerPage;

      const res = await fetch(
        `http://nyx.vima.ekt.gr:3000/api/books?pageNumber=${pageNumber}`,
        reqParam
      );

      const data = await res.json();
      const { books } = data;

      const idxOfLastBook = currentPage * itemsPerPage;
      const idxOfFirstBook = idxOfLastBook - itemsPerPage;
      const currentBooks = books.slice(idxOfFirstBook, idxOfLastBook);

      dispatch({
        type: "BOOK_REQUEST_SUCCESS",
        payload: currentBooks,
      });
    } catch (error) {
      dispatch({
        type: "BOOK_REQUEST_FAIL",
        payload: "FAILED",
      });
    }
  };
