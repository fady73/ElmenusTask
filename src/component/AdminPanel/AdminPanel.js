import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

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
