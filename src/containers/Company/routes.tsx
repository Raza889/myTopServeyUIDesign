import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import Login from "components/Company/Auth/Login"
import ForgotPassword from "components/Company/Auth/ForgotPassword"
import ResetPassword from "components/Company/Auth/ResetPassword"
import AccountInformation from 'components/Company/Registration/Account';
import Account from 'components/Company/Account/index'
import NewSurvey from 'components/Company/NewSurvey/index'
import NewCompanyAccount from 'components/Company/Account/new';
import SurveyCreated from 'components/Company/Survey/index';
import SurveyDashboard from 'components/Company/SurveyDashboard/index';
import CompanyProfile from 'components/Company/Profile/index';
import ChangePassword from 'components/Company/Profile/changePassword';
import ChangeEmail from "components/Company/Profile/changeEmail";
import Billing from "components/Company/Profile/billing";
const Routes: React.SFC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Account />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/forgotpassword`}>
        <ForgotPassword />
      </Route>
      <Route path={`${path}/resetpassword`}>
        <ResetPassword />
      </Route>
      <Route path={`${path}/registration`}>
        <AccountInformation />
      </Route>
      <Route path={`${path}/newSurvay`}>
        <NewSurvey />
      </Route>
      <Route path={`${path}/Surveycreated`}>
        <SurveyCreated />
      </Route>
      <Route path={`${path}/SurveyDashboard`}>
        <SurveyDashboard />
      </Route>
      <Route path={`${path}/profile/changePassword`}>
        <ChangePassword />
      </Route>
      <Route path={`${path}/profile/changeEmail`}>
        <ChangeEmail />
      </Route>
      <Route path={`${path}/profile/billing`}>
        <Billing />
      </Route>
      <Route path={`${path}/profile`}>
        <CompanyProfile />
      </Route>
      {/* temporary path */}
      <Route path={`${path}/new`}>
        <NewCompanyAccount />
      </Route>
 
    </Switch>
)}


export default Routes;
