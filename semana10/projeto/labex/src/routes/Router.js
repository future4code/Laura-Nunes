import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminHomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ListTripPage from "../pages/ListTripPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
