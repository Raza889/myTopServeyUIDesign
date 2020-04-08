import React, { Component } from 'react'
import MSTButton from 'components/UI/Button';
import MTSCard from 'components/UI/Card/Card';
import { MTSCardBody } from 'components/UI/Card/Card';

import './style.scss';

import Emoji from "Assets/Images/success.png";


type State = { email: string };
type MyProps = {};
class ForgetEmail extends Component<MyProps, State>{
  constructor(props: object) {
    super(props);
    this.state = {
        email: '',
    }
  }
  
  handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }

  render() {
    return (
      <div>
        <MTSCard  className='align-ver-center'>
          <MTSCardBody>
          <div className="password-container">
            <div className="password-heading">
                <img src={Emoji} alt="emoji" className=""/>
            </div>
            <div className="password-heading margin-bottom-20">
            <h3 className="MTS-heading-3">Success!</h3>
            </div>
            <div className="password-text">
              <p>You can log in to your account using your new password.</p>
            </div>
          </div>
          <div className="resetpassword-btn">
            <MSTButton
              title="Login"
              fontStyle='bold'
              to="/company/login"
              type='Filled'
              size='lg'
            />
          </div>
          </MTSCardBody>
        </MTSCard>
      </div>
    )
  }
}

export default ForgetEmail;