import React from "react";
import { Link, withRouter } from "react-router-dom";

import NotFoundImg from "../../assets/404.jpg";

import "./NotFound.scss";

const NotFound = (props) => {

  return (
    <>
      <div className="br-not-found">
        <div className="br-not-found__title">Not Found Broken Url</div>
        <img src={NotFoundImg} alt="not found"/>
        <Link to="/">Back to Home</Link>

      </div>
    </>
  );
};

export default withRouter(NotFound);
