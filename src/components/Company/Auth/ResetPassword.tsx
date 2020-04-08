import React, { Component } from 'react'
import MSTButton from 'components/UI/Button';
import MTSPasswordInput from 'components/UI/Password/index';
import Success from './Success';
import MTSCard from 'components/UI/Card';

import './style.scss';


type IState = {
  confirmPassword: string,
  password: string,
  success: boolean
};
type MyProps = {};
class Login extends Component<MyProps, IState>{
  constructor(props: object) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      success: false,
    }
  }
  
  handleChange = <T extends keyof IState>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: IState[P]; })
  }

  isDisabled = (): boolean => {
    return !this.state.password || !this.state.confirmPassword
  }

  handleSubmit = () => {
    this.setState({
      success: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.success
          ? <Success />
          : <MTSCard title="Set a new password?" className="MTS-Login-field-mobile-container">
              <div className="password-container">
                <MTSPasswordInput
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                  label="New Password"
                />
                <MTSPasswordInput
                  name="confirmPassword"
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                  required
                  label="Confirm New Password"
                />
              </div>
              <div className="resetpassword-btn">
                <MSTButton
                  title="Reset Password"
                  fontStyle='bold'
                  onSubmit={this.handleSubmit}
                  type='Filled'
                  size='lg'
                  disabled={this.isDisabled()}
                />
              </div>
            </MTSCard>
        }
      </div>
    )
  }
}

export default Login;