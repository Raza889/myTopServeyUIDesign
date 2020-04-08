import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import './style.scss';
import MTSButton from 'components/UI/Button';
import MTSInputPassword from 'components/UI/Password';
import MTSInput from 'components/UI/Input';
type State = {
  currentEmail: string,
  newEmail: string,
  Password: string,
};
type MyProps = {};
class ChangeEmail extends Component<MyProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      currentEmail: '',
      newEmail: '',
      Password: '',

    }
  }
  onChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }
  isDisable=()=>{
    return !this.state.currentEmail || !this.state.newEmail || !this.state.Password
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header title="Change Email" createSurvey={true} path="Coca-cola . Profile" />
        <div className="MTS-page-body-container">
          <div className="MTS-profile-page-container-change-password ">

            <div className="MTS-com-prof-company-field">
              <MTSInput type="email" label="Current Email" name="currentEmail"  onChange={(e: any) => this.onChange(e)} value={this.state.currentEmail} />
            </div>
            <div className="MTS-com-prof-company-field">
              <MTSInput type="email" label="New Email" name="newEmail" onChange={(e: any) => this.onChange(e)} value={this.state.newEmail} />
            </div>
            <div className="MTS-com-prof-company-field">
              <MTSInputPassword label="Confirm Password" name="Password" onChange={(e: any) => this.onChange(e)} value={this.state.Password} />
            </div>
            <div className="MTS-com-prof-button">
              <MTSButton type="Filled" disabled={this.isDisable()} size="md" title="Submit" fontStyle="regular" />

            </div>
          </div>
          
        </div>
      </div>
    )
  }
}
export default ChangeEmail;