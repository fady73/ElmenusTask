import React from "react";
import { withRouter } from "react-router";

import { Navbar, Container, Nav, Button } from "react-bootstrap";

import Logo from '../../assets/logo.png';

import "./Header.css";

const Header = (props) => {
  const { history } = props;
  return (
    <>
      <Navbar  className="br-header"  expand="lg">
        <Container>
        <hr className="br-header__line"/>

          <Navbar.Brand href="/">
            <img  className="br-header__logo" src={Logo} alt="logo"/></Navbar.Brand>
            <hr className="br-header__line"/>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
            <hr className="br-header__line"/>

              <Button
              className="br-header__btn-login"
                variant="secondary"
                onClick={() => history.push("/login")}
              >
                Admin
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default withRouter(Header);
