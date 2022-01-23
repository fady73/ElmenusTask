import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllMenus } from "../../action";

import Header from "../Header/Header";
import CreateCategory from "./CreateCategory/CreateCategory";
import ListCategory from "./ListCategory/ListCategory";

import "./AdminPanel.scss";

const AdminPanel = (props) => {
  const { getMenus, menusList } = props;

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      <Header />
      <div className="br-admin-panel">
        <CreateCategory />
        <ListCategory listItems={menusList} />
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
