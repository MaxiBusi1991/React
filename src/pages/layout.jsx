import React from "react";
import Header from "../components/HEADER";

const layout = () => {
  return (
    <>
      <h2>layout.jsx</h2>
      <div className="border-container">
        <Header />
        Main
        <footer>footer</footer>
      </div>
    </>
  );
};

export default layout;
