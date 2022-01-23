import React from "react";
import {  withRouter } from "react-router-dom";


import Header from "../Header/Header";
import CreateCategory from "./CreateCategory/CreateCategory";

import "./AdminPanel.scss";


const AdminPanel = (props) => {
  return (
    <>
      <Header />

      <div className="br-admin-panel">
          <CreateCategory />
      </div>
    </>
  );
};

export default withRouter(AdminPanel);
