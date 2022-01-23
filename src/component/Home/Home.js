import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getAllMenus } from "../../action/index";

import { Tabs, Tab } from "react-bootstrap";

import Header from "../Header/Header";
import MenuItemList from "./MenuItemList/MenusItemList";

import "./Home.scss";

const Home = (props) => {
  const { getMenus, menusList } = props;

  useEffect(() => {
    // for first time call to save it on the store 
    // beacuse we don't use api that save all operation so we must stop calling api when return to here 
    // so we should do this if we  use api to save create and edit and deleted operation we will delete this line
    getMenus();
  }, []);

  return (
    <>
      <div className="br-home">
        <Header />
        <div className="br-home__listing-menu">
          {menusList && (
            <Tabs
              id="controlled-tab-example"
              className="mb-3 mt-2 br-home__listing-menu__tabs"
            >
              {menusList.map((item) => (
                <Tab eventKey={item.id} title={item.name} key={item.id}>
                  <MenuItemList items={item.items} />
                </Tab>
              ))}
            </Tabs>
          )}
        </div>
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
