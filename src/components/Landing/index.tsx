import React, { Component } from 'react';
import Header from 'components/UI/Header/index';

// import './style.scss'
import Svg from 'Assets/Images/Sprite';
import MTSButton from 'components/UI/Button';
import cocacola1 from 'Assets/Images/UserAccount/cocacola1.png';
import { MTSCheckbox, MTSRadioButton } from 'components/UI/Checkbox';
import ProgressBar from 'components/UI/ProgressBar';

type State = {
  status: string,
  noOfQues:number,
};
type MyProps = {};
class LandingPage extends Component<MyProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      status: 'inactiveInformation',
      noOfQues: 0,
    }
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header auth={false} title="MYTOPSURVEY" path="Coca-cola" createSurvey={true} />
        <div className="MTS-page-body-container">
        

        </div>
      </div>
    )
  }
}
export default LandingPage;