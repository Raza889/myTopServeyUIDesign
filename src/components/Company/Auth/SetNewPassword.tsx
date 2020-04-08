import React, { Component } from 'react'
import MSTButton from 'components/UI/Button';
import MTSCard from 'components/UI/Card/Card';
import { MTSCardBody , MTSCardFooter } from 'components/UI/Card/Card';

import './style.scss';

import Emoji from "Assets/Images/Emoji.png";
import facebook from 'Assets/Images/facebook.png';
import Twitter from 'Assets/Images/twitter.png';
import Linkedin from 'Assets/Images/linkedin.png';

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
        <MTSCard style={{padding:"16px"}} className="align-ver-center">
          <MTSCardBody>
          <div className="password-container">
            <div className="password-heading">
              <h3 className="MTS-heading-3">Great</h3>
                <img src={Emoji} alt="emoji" className="MTS-emoji-icon"/>
            </div>
            <div className="password-heading margin-bottom-20">
            <h3 className="MTS-heading-3">set your new password</h3>
            </div>
            <div className="password-text">
              <p>Click on the button to set a new password.</p>
            </div>
          </div>
          <div className="resetpassword-btn">
            <MSTButton
              title="Set new password"
              fontStyle='bold'
              to="/company/resetpassword"
              type='Filled'
              size='lg'
            />
          </div>
          </MTSCardBody>
            <MTSCardFooter>
            <div className='forget-password-footer-text'>
                With best regards,
                <h5 className="MTS-heading-5">
                  MyTopSurvey Crew
                </h5>
              </div>
              <div className="MTS-social-icon-row">
                <img src={Twitter} alt="twitter" className="MTS-social-icon twitter"/>
                <img src={facebook} alt="facebook" className="MTS-social-icon"/>
                <img src={Linkedin} alt="linkedin" className="MTS-social-icon"/>
              </div>
              <div className="MTS-footer-copy-right-text forget-password-footer-text">
                Copyright &copy; MyTopSurvey. All rights reserved.
              </div>
              </MTSCardFooter>
        </MTSCard>
      </div>
    )
  }
}

export default ForgetEmail;