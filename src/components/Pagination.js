import React from "react";

const Pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a href="!#">{number}</a>
        </li>
      ))}
    </>
  );
};

export default Pagination;
