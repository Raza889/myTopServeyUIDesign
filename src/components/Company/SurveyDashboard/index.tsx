import React, { Component } from 'react';
import Header from 'components/UI/Header/index';

import './style.scss'
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
class SurveyDashboard extends Component<MyProps, State>{
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
        <Header title="Survey" path="Coca-cola" createSurvey={true} />
        <div className="MTS-page-body-container">
          <div className="MTS-survey-dashboard-container">

            {this.state.status === 'inactiveInformation' &&
              <div className="MTS-survey-dashboard-status-container">
                <div className="MTS-survey-dashboard-status-svg">
                  <Svg SvgName="board" />
                </div>
                <div className="MTS-survey-dashboard-status-text">
                  <h6 className="MTS-heading-6 MTS-heading-6-bold">Required information about the company.</h6>
                  It is necessary to fill in the data about the company for the possibility of payment and publication of the survey
                </div>
                <div className="MTS-survey-dashboard-status-button">
                  <MTSButton title="Add Information" type="outline" size="md" onClick={()=>{this.setState({status:"inactivePay"})}} fontStyle="regular" />
                </div>
              </div>
            }
            {this.state.status === 'inactivePay' &&
              <div className="MTS-survey-dashboard-status-container">
                <div className="MTS-survey-dashboard-status-svg">
                  <Svg SvgName="doller-white" />
                </div>
                <div className="MTS-survey-dashboard-status-text">
                  <h6 className="MTS-heading-6 MTS-heading-6-bold">Payment is expected</h6>
                  To publish a survey, you need to pay the amount of rewards for all respondents
                </div>
                <div className="MTS-survey-dashboard-status-button">
                  <MTSButton title="Payment detail" type="outline" size="md" onClick={()=>{this.setState({status:"active",noOfQues:786})}} fontStyle="regular" />
                </div>
              </div>
            }
            <div className="MTS-sur-dash-row">
              <div className="MTS-sur-dash-row-left">
                {(this.state.status === 'inactiveInformation' || this.state.status === 'inactivePay')
                  &&
                  <div className="MTS-sur-dash-status MTS-sur-dash-status-inactive">
                    Inactive
                </div>
                }
                {this.state.status === "active"
                  &&
                  <div className="MTS-sur-dash-status MTS-sur-dash-status-active">
                    active
                </div>
                }
                {this.state.status === "completed"
                  &&
                  <div className="MTS-sur-dash-status MTS-sur-dash-status-completed">
                    completed
                </div>
                }
                <div className="MTS-sur-dash-attr-container">
                  <div className="MTS-sur-dash-attr-heading">
                    Survey Name
                  </div>
                  <div className="MTS-sur-dash-attr-val">
                    EverRatchet Clip: Do you like coca-cola? Why?
                  </div>
                </div>
                <div className="MTS-sur-dash-stats-row">
                  <div className="MTS-sur-dash-attr-container">
                    <div className="MTS-sur-dash-attr-heading">
                      Category
                  </div>
                    <div className="MTS-sur-dash-attr-val">
                      Eat
                  </div>
                  </div>
                  <div className="MTS-sur-dash-attr-container">
                    <div className="MTS-sur-dash-attr-heading">
                      Questions
                  </div>
                    <div className="MTS-sur-dash-attr-val">
                      2
                  </div>
                  </div>

                  <div className="MTS-sur-dash-attr-container">
                    <div className="MTS-sur-dash-attr-heading">
                      Responents
                  </div>
                    <div className="MTS-sur-dash-attr-val">
                      {this.state.noOfQues}/1500
                  </div>
                  </div>
                  <div className="MTS-sur-dash-attr-container">
                    <div className="MTS-sur-dash-attr-heading">
                      Reward
                  </div>
                    <div className="MTS-sur-dash-attr-val">
                      $3 per respondent
                  </div>
                  </div>
                </div>
                <div className="MTS-sur-dash-button">
                  {(this.state.status === "active" || this.state.status === "completed") ?
                    <MTSButton title="Download statistics (.csv)" fontStyle="regular" size="md" onClick={()=>{this.setState({status:"completed",noOfQues:1500})}} type="Filled" />
                    :
                    <MTSButton title="Edit Survey" fontStyle="regular" size="md" type="Filled" />
                  }
                </div>
              </div>
              <div className="MTS-sur-dash-row-right">
                <img src={cocacola1} alt="" />
              </div>
            </div>
            <div className="MTS-divider"></div>
            {(this.state.status === "active" || this.state.status === "completed") ?
              <div className="MTS-sur-dash-question-container">
                <div className="MTS-sur-dash-attr-heading MTS-sur-dash-attr-heading-bold">
                  Questions
            </div>
                <div className="MTS-sur-dash-attr-container MTS-sur-dash-attr-container-question">
                  <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-question">
                    1. What is the best restaurant in your area?
              </div>
                  <div className="MTS-sur-dash-question-ans-container">
                    <div className="MTS-sur-dash-ans-box">
                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">KFC</div>
                        <div className="MTS-sur-dash-attr-stat">
                          28% (542 votes)
                    </div>
                      </div>
                      <ProgressBar progress={28} type="blue" size="sm" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">

                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">McDonalds</div>
                        <div className="MTS-sur-dash-attr-stat">
                          20% (326 votes)
                    </div>
                      </div>
                      <ProgressBar progress={20} type="blue" size="sm" />

                    </div>
                    <div className="MTS-sur-dash-ans-box">

                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">Enzo</div>
                        <div className="MTS-sur-dash-attr-stat">
                          52% (2009 votes)
                    </div>
                      </div>
                      <ProgressBar progress={52} type="blue" size="sm" />

                    </div>
                  </div>
                </div>
                <div className="MTS-divider"></div>
                <div className="MTS-sur-dash-attr-container MTS-sur-dash-attr-container-question">
                  <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-question">
                    2. What risks are worth taking?
              </div>
              <div className="MTS-sur-dash-question-ans-container">
                    <div className="MTS-sur-dash-ans-box">
                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">KFC</div>
                        <div className="MTS-sur-dash-attr-stat">
                          28% (542 votes)
                    </div>
                      </div>
                      <ProgressBar progress={28} type="blue" size="sm" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">

                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">McDonalds</div>
                        <div className="MTS-sur-dash-attr-stat">
                          20% (326 votes)
                    </div>
                      </div>
                      <ProgressBar progress={20} type="blue" size="sm" />

                    </div>
                    <div className="MTS-sur-dash-ans-box">

                      <div className="MTS-sur-dash-stat-status">
                        <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-normal">Enzo</div>
                        <div className="MTS-sur-dash-attr-stat">
                          52% (2009 votes)
                    </div>
                      </div>
                      <ProgressBar progress={52} type="blue" size="sm" />

                    </div>
                  </div>
                </div>
              </div>

              :
              <div className="MTS-sur-dash-question-container">
                <div className="MTS-sur-dash-attr-heading MTS-sur-dash-attr-heading-bold">
                  Questions
              </div>
                <div className="MTS-sur-dash-attr-container MTS-sur-dash-attr-container-question">
                  <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-question">
                    1. What is the best restaurant in your area?
                </div>
                  <div className="MTS-sur-dash-question-ans-container">
                    <div className="MTS-sur-dash-ans-box">
                      <MTSCheckbox value={false} name="Answer 1" label="Answer 1" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">
                      <MTSCheckbox value={false} name="Answer 2" label="Answer 2" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">
                      <MTSCheckbox value={false} name="Answer 3" label="Answer 3" />
                    </div>
                  </div>
                </div>
                <div className="MTS-divider"></div>
                <div className="MTS-sur-dash-attr-container MTS-sur-dash-attr-container-question">
                  <div className="MTS-sur-dash-attr-val MTS-sur-dash-attr-val-question">
                    2. What risks are worth taking?
                </div>
                  <div className="MTS-sur-dash-question-ans-container">
                    <div className="MTS-sur-dash-ans-box">
                      <MTSRadioButton value={false} name="Answer 1" label="Answer 1" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">
                      <MTSRadioButton value={false} name="Answer 2" label="Answer 2" />
                    </div>
                    <div className="MTS-sur-dash-ans-box">
                      <MTSRadioButton value={false} name="Answer 3" label="Answer 3" />
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default SurveyDashboard;