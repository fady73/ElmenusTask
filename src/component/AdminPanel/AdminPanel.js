import React, { useEffect } from "react";
import {  withRouter } from "react-router-dom";
import { getAllMenus } from "../../action";
import { connect } from "react-redux";

import Header from "../Header/Header";
import CreateCategory from "./CreateCategory/CreateCategory";

import "./AdminPanel.scss";
import ListCategory from "./ListCategory/ListCategory";


const AdminPanel = (props) => {
  const {getMenus,menusList}=props

  useEffect(()=>{
    getMenus()
  },[]);

  return (
    <>
      <Header />
      <div className="br-admin-panel">
          <CreateCategory />
          <ListCategory listItems={menusList}/>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMenus: () => dispatch(getAllMenus()),
});

const mapStateToProps = ({ Menus }) => {
  return { ...Menus };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminPanel));