import React, { Component } from 'react';
import './style.scss';
import Header from 'components/UI/Header/index';
import Filter from 'components/UI/Filter/index';
import ProgressBar from 'components/UI/ProgressBar/index';
import cocacola1 from 'Assets/Images/UserAccount/cocacola1.png';
import cocacola2 from 'Assets/Images/UserAccount/cocacola2.png';
import cocacolalogo from 'Assets/Images/UserAccount/cocacolalogo.png';
type State = {
};
type MyProps = {};
class Account extends Component<MyProps, State>{
  constructor(props: object) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="MTS-page-container">
        <Header title="surveys" />
        <div className="MTS-page-body-container">
          <div className="MTS-filter-container">
            <Filter />
            </div>
          <div className="MTS-survey-category">
            <div className="MTS-survey-heading">
              <h2 className="MTS-heading-2"> Category </h2>
            </div>
            <div className="MTS-survey-category-row">
              <div className="MTS-survey-card MTS-survey-card-active">
                <div className="MTS-survey-card-header">
                  <img src={cocacola1} alt="survey photos" className="MTS-survey-card-img" />
                </div>
                <div className="MTS-survey-card-body">
                  <div className="MTS-survey-card-heading">
                    <h4>
                      EverRatchet Clip: Do you like coca-cola? Why?
                    </h4>
                  </div>
                  <div className="MTS-survey-card-progress-bar-container">
                    <ProgressBar progress={5} type="blue" />
                    <div className="MTS-survey-card-progress-bar-text">
                      Total paid to <span>200 participants </span>
                    </div>
                  </div>
                  <div className="MTS-survey-card-from">
                    From <img src={cocacolalogo} alt="Logo" className="MTS-survey-card-from-img" />
                  </div>
                </div>
                <div className="MTS-survey-card-footer">
                  <div className="MTS-survey-card-footer-text">
                    Earn $10
                  </div>
                </div>
              </div>
              <div className="MTS-survey-card">
                <div className="MTS-survey-card-header">
                  <img src={cocacola2} alt="survey photos" className="MTS-survey-card-img" />
                </div>
                <div className="MTS-survey-card-body">
                  <div className="MTS-survey-card-heading">
                    <h4>
                      EverRatchet Clip: Do you like coca-cola? Why?
                    </h4>
                  </div>
                  <div className="MTS-survey-card-progress-bar-container">
                    <ProgressBar progress={80} type="blue" />
                    <div className="MTS-survey-card-progress-bar-text">
                      Total paid to <span>200 participants </span>
                    </div>
                  </div>
                  <div className="MTS-survey-card-from">
                    From <img src={cocacolalogo} alt="Logo" className="MTS-survey-card-from-img" />
                  </div>
                </div>
                <div className="MTS-survey-card-footer MTS-survey-card-footer-inactive">
                  <div className="MTS-survey-card-footer-text">
                    Earn $10
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="MTS-survey-category">
            <div className="MTS-survey-heading">
              <h2 className="MTS-heading-2"> Category </h2>
            </div>
            <div className="MTS-survey-category-row">
              <div className="MTS-survey-card MTS-survey-card-active">
                <div className="MTS-survey-card-header">
                  <img src={cocacola1} alt="survey photos" className="MTS-survey-card-img" />
                </div>
                <div className="MTS-survey-card-body">
                  <div className="MTS-survey-card-heading">
                    <h4>
                      EverRatchet Clip: Do you like coca-cola? Why?
                    </h4>
                  </div>
                  <div className="MTS-survey-card-progress-bar-container">
                    <ProgressBar progress={20} type="blue" />
                    <div className="MTS-survey-card-progress-bar-text">
                      Total paid to <span>1000 participants </span>
                    </div>
                  </div>
                  <div className="MTS-survey-card-from">
                    From <img src={cocacolalogo} alt="Logo" className="MTS-survey-card-from-img" />
                  </div>
                </div>
                <div className="MTS-survey-card-footer">
                  <div className="MTS-survey-card-footer-text">
                    Earn $10
                  </div>
                </div>
              </div>
              <div className="MTS-survey-card">
                <div className="MTS-survey-card-header">
                  <img src={cocacola2} alt="survey photos" className="MTS-survey-card-img" />
                </div>
                <div className="MTS-survey-card-body">
                  <div className="MTS-survey-card-heading">
                    <h4>
                      EverRatchet Clip: Do you like coca-cola? Why?
                    </h4>
                  </div>
                  <div className="MTS-survey-card-progress-bar-container">
                    <ProgressBar progress={80} type="blue" />
                    <div className="MTS-survey-card-progress-bar-text">
                      Total paid to <span>200 participants </span>
                    </div>
                  </div>
                  <div className="MTS-survey-card-from">
                    From <img src={cocacolalogo} alt="Logo" className="MTS-survey-card-from-img" />
                  </div>
                </div>
                <div className="MTS-survey-card-footer MTS-survey-card-footer-inactive">
                  <div className="MTS-survey-card-footer-text">
                    Earn $5
                  </div>
                </div>
              </div>
              <div className="MTS-survey-card">
                <div className="MTS-survey-card-header">
                  <img src={cocacola2} alt="survey photos" className="MTS-survey-card-img" />
                </div>
                <div className="MTS-survey-card-body">
                  <div className="MTS-survey-card-heading">
                    <h4>
                      EverRatchet Clip: Do you like coca-cola? Why?
                    </h4>
                  </div>
                  <div className="MTS-survey-card-progress-bar-container">
                    <ProgressBar progress={80} type="red" />
                    <div className="MTS-survey-card-progress-bar-text">
                      Total paid to <span>200 participants </span>
                    </div>
                  </div>
                  <div className="MTS-survey-card-from">
                    From <img src={cocacolalogo} alt="Logo" className="MTS-survey-card-from-img" />
                  </div>
                </div>
                <div className="MTS-survey-card-footer MTS-survey-card-footer-inactive">
                  <div className="MTS-survey-card-footer-text">
                    Earn $5
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    )
  }
}

export default Account;