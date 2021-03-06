import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";
import PostDetailsPage from "../pages/PostDetailsPage";

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
          <PostDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
