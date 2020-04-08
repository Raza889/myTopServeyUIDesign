import React, { Component } from 'react'
import MSTButton from '../../UI/Button/index';
import MTSInput from '../../UI/Input/index';
import { MTSCheckbox } from 'components/UI/Checkbox';
import MTSPasswordInput from '../../UI/Password/index';
import { Link } from 'react-router-dom';
import MTSCard from '../../UI/Card/index';

import './style.scss';


type State = {
  email: string,
  password: string,
  disabled: boolean,
  remember: boolean
};
type MyProps = {};
class Login extends Component<MyProps, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            email: '',
            password: '',
            disabled: true,
            remember: false
        }
    }

    handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          [e.target.name]: e.target.value,
        } as { [P in T]: State[P]; })
    }

    handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState(state => ({
        remember: !state.remember,
      }))
  }

    isDisabled = (): boolean => {
      return !this.state.email || !this.state.password
    }

    render() {
        return (
            <MTSCard title="Login">
                <MTSInput 
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                  errorMessage="Email invalid"
                  label="Email"
                />
                <MTSPasswordInput
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required label="Password"
                />
                <div className="MTS-Login-remember-row flex-wrap">
                  <MTSCheckbox
                    onChange={this.handleCheckbox}
                    value={this.state.remember}
                    label="Remember me"
                    name="check"
                  />
                  <div className="MTS-Login-forget-link">
                      <Link to="/company/forgotpassword" className="MTS-link MTS-link-md MTS-link-bold" > Forget Password?</Link>
                  </div>
                </div>
                <div className="flex-row flex-wrap MTS-Login-button-row">
                    <MSTButton title="Register as a company" fontStyle='regular' className='MTS-Login-button' type='outline' size='lg' to="/company/registration" />
                    <MSTButton title="Login" className='MTS-Login-button' fontStyle='bold' type='Filled' size='lg' disabled={this.isDisabled()} />
                </div>
            </MTSCard>

        )
    }
}

export default Login;