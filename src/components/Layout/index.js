import React from "react";
import MainPage from "../MainPage";
import Navbar from "../Navbar";

import "./index.scss";

const Layout = ({ children }) => {
  return (
    <main className="MainLayout">
      {children}
      <Navbar />
      <MainPage />
    </main>
  );
};

export default Layout;
