import "./App.css";
import React from "react";
import Welcome from "./pages/Welcome";
import PlainLayout from "./pages/Layouts/PlainLayout";
import AppLayout from "./pages/Layouts/AppLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhoneConfirm from "./pages/PhoneConfirm";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNoti from "./pages/AllowNoti";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <Route
        exact
        path={[
          "/",
          "/get_username",
          "/phone_confirm",
          "/code_confirm",
          "/allow_noti",
        ]}>
        <PlainLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/phone_confirm" component={PhoneConfirm} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route exact path="/allow_noti" component={AllowNoti} />
          </Switch>{" "}
        </PlainLayout>
      </Route>
      <Route exact path={["/home", "/explore", "/profile"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </AppLayout>
      </Route>
    </Router>
  );
}

export default App;
