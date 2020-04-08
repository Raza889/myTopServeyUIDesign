import React from 'react';
import Header from 'components/UI/Header/index'
import MTSButton from 'components/UI/Button/index'
import "./style.scss"
import Svg from 'Assets/Images/Sprite';
import cocacolalogo from 'Assets/Images/UserAccount/cocacolalogo.png'
interface SurvayProps {

}
const SurvaySuccess: React.SFC<SurvayProps> = () => {

    return (
        <div className="MTS-page-container height-100">
            <Header title="" />
            <div className="MTS-success-page-container">
                <div className="MTS-sucess-page">
                    <div className="MTS-model-popup-tick">
                        <div className="">
                            <Svg SvgName="tick-white" />
                        </div>
                    </div>
                    <div className="MTS-survey-top MTS-survey-top-row">
                        <div>

                        <h2 className="MTS-heading-2 MTS-survey-reward">
                        Earned <span> $10 </span>
                        </h2>
                        <h6 className="MTS-survey-title">
                        EverRatchet Clip: Do you like coca-cola? Why?
                        </h6>
                        </div>
                        <img src={cocacolalogo} alt="Logo"/>

                    </div>
                    <div className="MTS-success-survey-button-row">
                        <MTSButton title="Browse other surveys" type="Filled" size="md" fontStyle="regular" to="/user"/>
                        <MTSButton title="Start a random survey" type="outline" size="md" fontStyle="regular" to="/user"/>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default SurvaySuccess;