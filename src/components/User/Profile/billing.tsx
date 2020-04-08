import React from 'react';
import MTSButton from 'components/UI/Button/index'
import MTSInput from 'components/UI/Input/index'
import { dummyHistory } from './dummy'
import Svg from 'Assets/Images/Sprite'


interface BillingProps {
    onChangeField:any,
    address1:string,
    address2:string,
    city:string,
    countryState:string,
    zip:string,
    phone:string,
    showWithDrawal:any,
}
const Billing: React.SFC<BillingProps> =({
    onChangeField,
    address1,
    address2,
    city,
    countryState,
    zip,
    phone,
    showWithDrawal
})=>{
    return(
  <div className="MTS-billing-container">
                                <div className="MTS-billing-top-row">
                                    <div className="MTS-billing-top-left">
                                        <div className="MTS-billing-top-heading">
                                            Total balance
                                        </div>
                                        <div className="MTS-billing-top-value">
                                            $200.00
                                        </div>
                                    </div>
                                    <div className="MTS-billing-top-right">
                                        <div className="MTS-billing-top-right-container">
                                            <div className="MTS-billing-top-heading">
                                                Available for withdrawal
                                        </div>
                                            <div className="MTS-billing-top-value">
                                                $167.00
                                        </div>
                                        </div>
                                        <div className="MTS-billing-top-right-button-container">
                                            <MTSButton type="outline" fontStyle="regular" size="sm" title="Request withdrawal" onClick={showWithDrawal} />
                                            {/* add this class to button if disabled
                                             className="MTS-billing-button"
                                             <div className="MTS-billing-warning-text">
                                                Minimum <span>$100</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="MTS-billing-body">
                                    <div className="MTS-billing-left">
                                        <div className="MTS-billing-body-heading">
                                            Withdrawal Details
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="Address Line 1" value={address1} onChange={onChangeField} name="address1" />
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="Address Line 2" value={address2} onChange={onChangeField} name="address2" />
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="City" onChange={onChangeField} value={city} name="city" />
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="State/Province/Region" onChange={onChangeField} value={countryState} name="countryState" />
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="ZIP/Postal Code" onChange={onChangeField} value={zip} name="zip" />
                                        </div>
                                        <div>
                                            <MTSInput type="text" label="Phone Number" onChange={onChangeField} value={phone} name="phone" />
                                        </div>

                                        <div className="MTS-billing-left-save-button">
                                            <MTSButton type="ouline" fontStyle="regular" size="lg" title="Save" disabled />
                                        </div>
                                    </div>
                                    <div className="MTS-billing-right">
                                        <div className="MTS-billing-body-heading">
                                            History
                                        </div>
                                        <div className="MTS-billing-right-body">
                                            <div className="MTS-billing-history-list">
                                                {dummyHistory.map((history,index) => (
                                                    <div className="MTS-billing-history-list-item" key={index}>
                                                        <div className="MTS-billing-history-list-item-right">
                                                            <div className="MTS-billing-history-list-item-date">
                                                                {history.date}
                                                            </div>
                                                            <div className="MTS-billing-history-list-item-name">
                                                                {history.title}
                                                            </div>
                                                        </div>
                                                        <div className={`MTS-billing-history-list-item-status MTS-billing-history-list-item-status-${history.status}`}>
                                                            {history.amount}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="MTS-billing-history-pagination">
                                            <div className="MTS-billing-page-item"> <Svg SvgName="chevron-left-blue" /> </div>
                                            <div className="MTS-billing-page-item MTS-billing-page-item-selected">1</div>
                                            <div className="MTS-billing-page-item">2</div>
                                            <div className="MTS-billing-page-item">3</div>
                                            <div className="MTS-billing-page-item MTS-billing-page-item-dot">... </div>
                                            <div className="MTS-billing-page-item">10</div>
                                            <div className="MTS-billing-page-item">11</div>
                                            <div className="MTS-billing-page-item"> <Svg SvgName="chevron-right-blue" /> </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
    )
} 
export default Billing;