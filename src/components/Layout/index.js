import React from "react";

import MainPage from "../MainPage";
import Navbar from "../Navbar";

import "./index.scss"

const layout = ({ children }) => {
  return (
    <main className="MainLayout">
      {children}
      <Navbar />
      <MainPage />
    </main>
  );
};

export default layout;
