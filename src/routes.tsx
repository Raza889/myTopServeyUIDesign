import React from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AppContainer from "containers/App";
import CompanyContainer from "containers/Company";
import UserContainer from "containers/User";
import Landing from "components/Landing/index";
import 'commonStyle/baseStyle.scss'

const Routes: React.SFC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <AppContainer />
      </Route>
      <Route path="/landing">
        <Landing />
      </Route>
      <Route path="/company">
        <CompanyContainer />
      </Route>
      <Route path="/user">
        <UserContainer />
      </Route>
    </Switch>
  </Router>
)


export default Routes;
