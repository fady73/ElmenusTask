import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthorized } from "../../utils/helper";

export default function PrivateRoute({
  component: Component,
  access,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const userInfo = localStorage.getItem('userInfo');
          if (
            !userInfo ||
            !isAuthorized(userInfo, access)
          ) {
            return <Redirect to={{ pathname: "/" }} />;
          }
          return <Component {...props} />;
        }
      }
    />
  );
}
