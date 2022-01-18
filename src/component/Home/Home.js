import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";


import { getAllMenus } from "../../action/index";

import "./Home.css";

const Home = (props) => {
  const { getMenus } = props;
 

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      <div className="br-home">
        
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
