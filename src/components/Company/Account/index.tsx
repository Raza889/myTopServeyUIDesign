import React from 'react';
import Header from 'components/UI/Header/index';
import Filter from 'components/UI/Filter/index';
import cocacola1 from 'Assets/Images/UserAccount/cocacola1.png';
import cocacola2 from 'Assets/Images/UserAccount/cocacola2.png';
import cardHeader from 'Assets/Images/CompanyAccount/cardHeader.png';
import "./style.scss";
import ProgressBar from 'components/UI/ProgressBar';
interface landingProps {

}
const CompanyLanding: React.SFC<landingProps> = () => {

    return (
        <div className="MTS-page-container height-100">
            <Header title="Coca-cola" createSurvey={true}/>
            <div className="MTS-page-body-container">

                <Filter isCompany={true} />
                <div className="MTS-survey-category">
                    <div className="MTS-survey-heading">
                        <h2 className="MTS-heading-2 MTS-heading-survey MTS-heading-survey-active">
                            Active
                            <span>
                                4
                            </span>
                        </h2>
                    </div>
                    <div className="MTS-survey-category-row">
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company">
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
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company ">
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
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company ">
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
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company ">
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
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="MTS-survey-heading">
                        <h2 className="MTS-heading-2 MTS-heading-survey MTS-heading-survey-completed">
                            Completed
                            <span>
                                2
                            </span>
                        </h2>
                    </div>
                    <div className="MTS-survey-category-row">
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company">
                            <div className="MTS-survey-card-header MTS-card-header-default">
                                <img src={cardHeader} alt="survey photos" className="MTS-survey-card-img MTS-card-default-img" />
                            </div>
                            <div className="MTS-survey-card-body">
                                <div className="MTS-survey-card-heading">
                                    <h4>
                                        EverRatchet Clip: Do you like coca-cola? Why?
                                    </h4>
                                </div>
                                <div className="MTS-survey-card-progress-bar-container">
                                    <ProgressBar progress={5} type="green" />
                                    <div className="MTS-survey-card-progress-bar-text">
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company ">
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
                                    <ProgressBar progress={80} type="green" />
                                    <div className="MTS-survey-card-progress-bar-text">
                                        <span>200/1000  </span> respondents
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="MTS-survey-heading">
                        <h2 className="MTS-heading-2 MTS-heading-survey MTS-heading-survey-inactive">
                            Inactive
                            <span>
                                2
                            </span>
                        </h2>
                    </div>
                    <div className="MTS-survey-category-row">
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company">
                            <div className="MTS-survey-card-header">
                                <div className="MTS-card-waiting">
                                    Waiting for payment
                                </div>
                                <img src={cocacola1} alt="survey photos" className="MTS-survey-card-img" />
                            </div>
                            <div className="MTS-survey-card-body">
                                <div className="MTS-survey-card-heading">
                                    <h4>
                                        EverRatchet Clip: Do you like coca-cola? Why?
                                    </h4>
                                </div>
                                <div className="MTS-survey-card-progress-bar-container">
                                    <ProgressBar progress={0} type="green" />
                                    <div className="MTS-survey-card-progress-bar-text">
                                        <span>0/1000  </span> respondents
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="MTS-survey-card MTS-survey-card-active MTS-survey-card-company ">
                            <div className="MTS-survey-card-header">
                            <div className="MTS-card-waiting">
                                    Waiting for payment
                                </div>
                                <img src={cocacola2} alt="survey photos" className="MTS-survey-card-img" />
                            </div>
                            <div className="MTS-survey-card-body">
                                <div className="MTS-survey-card-heading">
                                    <h4>
                                        EverRatchet Clip: Do you like coca-cola? Why?
                                    </h4>
                                </div>
                                <div className="MTS-survey-card-progress-bar-container">
                                    <ProgressBar progress={0} type="green" />
                                    <div className="MTS-survey-card-progress-bar-text">
                                        <span>0/1000  </span> respondents
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default CompanyLanding;