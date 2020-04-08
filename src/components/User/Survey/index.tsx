import React from "react";
import Header from 'components/UI/Header/index';
import ProgressBar from 'components/UI/ProgressBar/index';
import { MTSCheckbox, MTSRadioButton } from 'components/UI/Checkbox/index';
import MTSButton from 'components/UI/Button/index';
import Cocacolalogo from 'Assets/Images/UserAccount/cocacolalogo.png';
import "./style.scss"
import { useMediaQuery } from "react-responsive";
interface SurvayProps {

}
const Survay: React.SFC<SurvayProps> = () => {
    const onChange = (e: any) => {
        [e.target.name] = e.target.value;
    }
    const isMobile = useMediaQuery({
        query: '(max-device-width: 576px)'
      })
    return (
        <div className="MTS-page-container MTS-Page-container-padding-0">
            <Header title="" />
            <div className="MTS-page-body-container MTS-page-body-container-padding-16" >
                <div className="MTS-survey-top">
                   <div>
                    <h1>
                        EverRatchet Clip: Do you like coca-cola? Why?
                    </h1>
                    <h4 className="MTS-heading-4 MTS-survey-reward">
                        Finish this survey to earn <span>$10</span>
                    </h4>
                    </div>
                    <div className="MTS-survey-logo-container">
                       <span>From</span> <img src={Cocacolalogo} alt="Cocacola Logo"/>
                    </div>
                </div>
                <div className="MTS-survey-progress">
                    <ProgressBar progress={50} />
                </div>
                <div className="MTS-survey-question-fill">
                    Question 0/4
                </div>

                <div className="MTS-survey-form-container">
                    <form action="" className="MTS-survey-form">
                        <div className="MTS-survay-form-quetion-outter-container">
                        <div className="MTS-survay-form-question-container">
                            <div className="MTS-survay-form-question">
                                1. What is the best restaurant in your area?
                            </div>
                            <div className="MTS-survay-form-option-container">
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="McDonalds" name="McDonalds" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="KFC" name="McDonalds" onChange={onChange} value={true} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="Burger King" name="McDonalds" onChange={onChange} value={false} />
                                </div>
                            </div>
                        </div>
                        <div className="MTS-survay-form-question-container">
                            <div className="MTS-survay-form-question">
                                2. What risks are worth taking?
                            </div>
                            <div className="MTS-survay-form-option-container">
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="McDonalds" name="McDonalds" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="KFC" name="KFC" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="Burger King" name="Burger King" onChange={onChange} value={false} />
                                </div>
                            </div>
                        </div>
                        <div className="MTS-survay-form-question-container">
                            <div className="MTS-survay-form-question">
                                3. What’s the saddest scene in a movie or TV series?
                            </div>
                            <div className="MTS-survay-form-option-container">
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="McDonalds" name="McDonalds" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="KFC" name="KFC" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSRadioButton label="Burger King" name="Burger King" onChange={onChange} value={false} />
                                </div>
                            </div>
                        </div>
                        <div className="MTS-survay-form-question-container">
                            <div className="MTS-survay-form-question">
                            4. If you owned a restaurant, what kind of food would it serve?
                            </div>
                            <div className="MTS-survay-form-option-container">
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="McDonalds" name="McDonalds" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="KFC" name="KFC" onChange={onChange} value={false} />
                                </div>
                                <div className="MTS-survay-form-option">
                                    <MTSCheckbox label="Burger King" name="Burger King" onChange={onChange} value={false} />
                                </div>
                            </div>
                        </div>
                        </div>
                       
                    </form>
                </div>
            </div>
            <div className="MTS-survey-form-footer-row">
                            <MTSButton title="Submit and earn $5" fontStyle="regular" type="Filled" size={isMobile ?"sm":"md"} disabled/>

                            <MTSButton title="Save and continue later" fontStyle="regular" type="outline" size="md"/>
                        </div>
        </div>
    )
}
export default Survay;