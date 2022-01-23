import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

import Home from "./component/Home/Home";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import NotFound from "./component/NotFound/NotFound";

import "./App.scss";


export default function App() {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      localStorage.setItem("userInfo", "USER");
    }
  }, []);

  return (
    <div className="app">
      <React.Suspense fallback={() => <>loading</>}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                access={route.access}
                private={route.private}
                render={(props) => {
                  return (
                    <PrivateRoute
                      component={route.component}
                      access={route.access}
                    />
                  );
                }}
              />
            ) : null;
          })}
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </React.Suspense>
    </div>
  );
}
