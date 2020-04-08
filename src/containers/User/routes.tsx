import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import Login from "components/User/Auth/Login"
import ForgetPassword from 'components/User/Auth/ForgotPassword'
import ResetPassword from 'components/User/Auth/ResetPassword'
import AccountInformation from 'components/User/Registration/Account'
import Landing from 'components/User/Account/LandingPage'
import Profile from 'components/User/Profile/index'
import Survay from 'components/User/Survey/index'
import SurvaySuccess from 'components/User/Survey/success'

const Routes: React.SFC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Landing />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/forgetpassword`}>
        <ForgetPassword />
      </Route>
      <Route path={`${path}/resetpassword`}>
        <ResetPassword />
      </Route>
      <Route path={`${path}/registration`}>
        <AccountInformation />
      </Route>
      <Route path={`${path}/survey`}>
        <Survay />
      </Route>
      <Route path={`${path}/surveysuccess`}>
        <SurvaySuccess />
      </Route>
      <Route path={`${path}/profile`}>
        <Profile />
      </Route>

    </Switch>
)}


export default Routes;
