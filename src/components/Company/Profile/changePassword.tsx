import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import './style.scss';
import MTSButton from 'components/UI/Button';
import MTSInputPassword from 'components/UI/Password';
type State = {
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
};
type MyProps = {};
class ChangePassword extends Component<MyProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',

    }
  }
  onChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }
  isDisable=()=>{
    return !this.state.currentPassword || !this.state.newPassword || !this.state.confirmPassword
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header title="Change Email" createSurvey={true} path="Coca-cola . Profile" />
        <div className="MTS-page-body-container">
          <div className="MTS-profile-page-container-change-password ">

            <div className="MTS-com-prof-company-field">
              <MTSInputPassword label="Current Password" name="currentPassword"  onChange={(e: any) => this.onChange(e)} value={this.state.currentPassword} />
            </div>
            <div className="MTS-com-prof-company-field">
              <MTSInputPassword label="New Password" name="newPassword" onChange={(e: any) => this.onChange(e)} value={this.state.newPassword} />
            </div>
            <div className="MTS-com-prof-company-field">
              <MTSInputPassword label="Confirm Password" name="confirmPassword" onChange={(e: any) => this.onChange(e)} value={this.state.confirmPassword} />
            </div>
            <div className="MTS-com-prof-button">
              <MTSButton type="Filled" disabled={this.isDisable()} size="md" title="Update Password" fontStyle="regular" />

            </div>
          </div>
          <div className="MTS-forget-passowrd-text">
            <a href="/forgetPassword" className="MTS-forget-pass-link">Forget Password</a>
          </div>
        </div>
      </div>
    )
  }
}
export default ChangePassword;