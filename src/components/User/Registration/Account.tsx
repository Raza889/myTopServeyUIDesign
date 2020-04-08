import React, { Component } from 'react'
import MSTButton from '../../UI/Button/index';
import MTSInput from '../../UI/Input/index';
import { MTSCheckbox } from 'components/UI/Checkbox/index';
import MTSPasswordInput from '../../UI/Password/index';
import { Link } from 'react-router-dom';
import MTSCard from '../../UI/Card/Card';
import AddAccountInformation from "./AddInformation"
import { MTSCardHeader, MTSCardFooter, MTSCardBody } from 'components/UI/Card/Card'

import './style.scss';


type State = {
  email: string,
  password: string,
  disabled: boolean,
  term: boolean,
  next: boolean
};
type MyProps = {};
class Account extends Component<MyProps, State>{
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
      term: false,
      next: false
    }
  }

  handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }

  handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(state => ({
      term: !state.term,
    }))
  }

  isDisabled = (): boolean => {
    return !this.state.email || !this.state.password
  }

  next = () => {
    this.setState({
      next: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.next
            ? <AddAccountInformation />
            : <MTSCard title="Login" user={true}>
              <MTSCardHeader>
                Register
              </MTSCardHeader>
              <div className="MTS-tab-container">
                <div className="MTS-tab MTS-tab1">
                  <div className="tab-number">1</div>
                  <div className="MTS-tab-title">Account</div>
                </div>
                <div className="MTS-tab MTS-tab2 ">
                  <div className="tab-number tab-number-inactive">2</div>
                  <div className="MTS-tab-title MTS-tab-disabled">Your info</div>
                </div>
                <div className="MTS-tab MTS-tab2 ">
                  <div className="tab-number tab-number-inactive">3</div>
                  <div className="MTS-tab-title MTS-tab-disabled">Getting paid</div>
                </div>
              </div>
              <MTSCardBody>
                <MTSInput
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                  errorMessage="Email invalid"
                  label="Email"
                />
                <MTSPasswordInput name="password" onChange={this.handleChange} value={this.state.password} required label="Password" />
                <div className="MTS-Login-remember-row justify-flex-start alignItemFlex-Start">
                  <MTSCheckbox
                    onChange={this.handleCheckbox}
                    value={this.state.term}
                    label={``}
                    name="terms"
                  />
                  <div className="d-flex">
                    I have read and accept MyTopsurvey
                    <Link to="/company/forgotpassword" className="MTS-link MTS-link-md ml-4" > term of use</Link>
                  </div>
                </div>
                <div className="flex-row flex-wrap MTS-Login-button-row">
                  <MSTButton
                    title="Continue"
                    className=''
                    fontStyle='bold'
                    type='Filled'
                    onSubmit={this.next}
                    size='lg'
                    disabled={this.isDisabled()}
                  />
                </div>
              </MTSCardBody>
              <MTSCardFooter>
                <div className='forget-password-footer-text'>
                  <Link to='/company/login' className="back-to-login">Cancel and return to login</Link>
                </div>
              </MTSCardFooter>
            </MTSCard>
        }
      </div>
    )
  }
}

export default Account;