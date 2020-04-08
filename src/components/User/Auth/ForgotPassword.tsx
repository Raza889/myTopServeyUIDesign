import React, { Component } from 'react'
import MSTButton from 'components/UI/Button';
import MTSInput from 'components/UI/Input/index';
import MTSCard from 'components/UI/Card/Card';
import ResetSuccess from './SetNewPassword';
import { Link } from 'react-router-dom';
import { MTSCardBody , MTSCardHeader , MTSCardFooter } from 'components/UI/Card/Card';

import './style.scss';


type State = {
  email: string,
  success: boolean
};
type MyProps = {};
class Login extends Component<MyProps, State>{
  constructor(props: object) {
    super(props);
    this.state = {
        email: '',
        success: false,
    }
  }
  
  handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }

  isDisabled = (): boolean => {
    return !this.state.email
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
          ? <ResetSuccess />
          : <MTSCard user={true}>
              <MTSCardHeader>
                  Forgot your password?
              </MTSCardHeader>
              <MTSCardBody>
              <div className="password-container">
                <div className="password-text">
                  <p>Please enter your email address to get password reset Instructons.</p>
                </div>
                <MTSInput
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  errorMessage="Email invalid"
                  required
                  label="Email"
                />
              </div>
              <div className="resetpassword-btn">
                <MSTButton
                  title="Reset Password"
                  fontStyle='bold'
                  type='Filled'
                  onSubmit={this.handleSubmit}
                  size='lg'
                  disabled={this.isDisabled()}
                />
              </div>
              </MTSCardBody>
                <MTSCardFooter>
                  <div className='forget-password-footer-text'>
                    Never Mind. 
                    <Link to='/company/login' className="back-to-login">Cancel
                    </Link>
                  </div>
                  </MTSCardFooter>
            </MTSCard>
      }
      </div>
    )
  }
}

export default Login;