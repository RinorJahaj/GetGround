import React from "react";
import Header from "./components/Header";
import Books from "./screens/Books";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <div>
      <Header />
      <Books />
    </div>
  );
};

export default App;
