import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route path={"/feed"}>
          <FeedPage />
        </Route>
        <Route path={"/post/:postId"}>
          <p>post details</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
