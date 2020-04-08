import React from 'react';
import Header from 'components/UI/Header/index'
import MTSButton from 'components/UI/Button/index'
import "./style.scss";
import Add from 'Assets/Images/CompanyAccount/add.png'
interface SurvayProps {

}
const SurvaySuccess: React.SFC<SurvayProps> = () => {

    return (
        <div className="MTS-page-container height-100">
            <Header title="Coca-cola" />
           <div className="MTS-company-page-photo-container">
               <img src={Add} alt="Add"/>
               <MTSButton title="+ Create First Survey" type="Filled" size="md" fontStyle="regular"/>
               
           </div>
        </div>
    )
}
export default SurvaySuccess;