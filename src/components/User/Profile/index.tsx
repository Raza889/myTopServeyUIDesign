import React, { Component } from 'react';
import './style.scss';
import Header from 'components/UI/Header/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MTSModel, MTSModelHeader, MTSModelBody } from 'components/UI/Model';
import 'react-tabs/style/react-tabs.css';
import Svg from 'Assets/Images/Sprite'
import MTSButton from 'components/UI/Button/index'
import MTSInput from 'components/UI/Input/index'
import MTSPasswordInput from 'components/UI/Password/index';
import { Link } from 'react-router-dom';
import { MTSCardFooter } from 'components/UI/Card/Card';
import Billing from './billing'
import Profile from './profile'
type State = {
    selectedHeading: number,
    open: boolean,
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
    Emailopen: boolean,
    currentEmail: string,
    newEmail: string,
    Password: string,
    countryState: string,
    city: string,
    zip: string,
    address1: string,
    address2: string,
    phone: string,
    withdawal: boolean,
};
type MyProps = {};
class Account extends Component<MyProps, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            selectedHeading: 0,
            open: false,
            Emailopen: false,
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            currentEmail: '',
            newEmail: '',
            Password: '',
            countryState: 'FL',
            city: 'Doral',
            address1: '7801 NW 37th Street',
            address2: '',
            phone: '(757) 943-83-56',
            zip: '33195-6503',
            withdawal: false
        }
    }
    showModel = () => {
        debugger;
        this.setState({
            open: !this.state.open,
        })
    }
    showModelEmail = () => {
        this.setState({
            Emailopen: !this.state.Emailopen,
        })
    }
    showModelWithdrawal = () => {
        this.setState({
            withdawal: !this.state.withdawal,
        })
    }
    onChangeField = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as { [P in T]: State[P]; })
    }

    isDisabled = (): boolean => {
        return !this.state.newPassword || !this.state.confirmNewPassword || !this.state.currentPassword
    }
    isDisabledEmail = (): boolean => {
        return !this.state.Password || !this.state.newEmail || !this.state.currentEmail
    }
    setHeader = (heading: number) => {
        this.setState({ selectedHeading: heading })
    }
    render() {
        return (
            <div className="MTS-page-container height-100">
                <Header title={this.state.selectedHeading === 0 ? "Profile" : "Billing"} />
                <div className="MTS-page-body-container">
                    <Tabs selectedIndex={this.state.selectedHeading} onSelect={tabIndex => this.setHeader(tabIndex)}>
                        <TabList className="MTS-react-tab-list">
                            <Tab className="MTS-react-tab" >
                                <Svg SvgName='user' className="MTS-profile-tab-svg" fill={"#F6F5FE"} />
                                Profile
                             </Tab>
                            <Tab className="MTS-react-tab" >
                                <Svg SvgName='doller' className="MTS-profile-tab-svg" fill={"#5C51E1"} />
                                Billing
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <Profile
                                showModelPassword={this.showModel}
                                showModelEmail={this.showModelEmail}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Billing
                                onChangeField={this.onChangeField}
                                city={this.state.city}
                                countryState={this.state.countryState}
                                zip={this.state.zip}
                                address1={this.state.address1}
                                address2={this.state.address2}
                                phone={this.state.phone}
                                showWithDrawal={this.showModelWithdrawal}
                            />
                        </TabPanel>
                    </Tabs>

                </div>
                <MTSModel open={this.state.open} hide={this.showModel}>
                    <MTSModelHeader>
                        <div className="MTS-popup-header">
                            <h3> Change Password </h3>
                            <Link to="user/forgetpassword" className="forget-password-footer-text MTS-popup-header-text">
                                Forget Password?
                        </Link>
                        </div>
                    </MTSModelHeader>
                    <MTSModelBody>

                        <div>
                            <MTSPasswordInput name="currentPassword" label="Current Password" value={this.state.currentPassword} onChange={this.onChangeField} />
                        </div>
                        <div>
                            <MTSPasswordInput name="newPassword" label="New Password" value={this.state.newPassword} onChange={this.onChangeField} />
                        </div>
                        <div>
                            <MTSPasswordInput name="confirmNewPassword" label="Confirm New Password" value={this.state.confirmNewPassword} onChange={this.onChangeField} />
                        </div>
                    </MTSModelBody>
                    <MTSCardFooter>
                        <div>
                            <MTSButton title="Update Password" fontStyle="bold" type="Filled" size="lg" disabled={this.isDisabled()} />
                            <Link to="user/forgetpassword" className="forget-password-footer-text MTS-popup-footer-text">
                                Forget Password?
                            </Link>
                        </div>
                    </MTSCardFooter>
                </MTSModel>
                <MTSModel open={this.state.Emailopen} hide={this.showModelEmail}>
                    <MTSModelHeader>
                        <div className="MTS-popup-header">
                            <h3> Change Email </h3>
                        </div>
                    </MTSModelHeader>
                    <MTSModelBody>

                        <div>
                            <MTSInput type='email' name="currentEmail" label="Current Email" value={this.state.currentEmail} onChange={this.onChangeField} required />
                        </div>
                        <div>
                            <MTSInput type="email" name="newEmail" label="New Email" value={this.state.newEmail} onChange={this.onChangeField} required />
                        </div>
                        <div>
                            <MTSPasswordInput name="Password" label="Password" value={this.state.Password} onChange={this.onChangeField} />
                        </div>
                    </MTSModelBody>
                    <MTSCardFooter>
                        <div>
                            <MTSButton title="Submit" fontStyle="bold" type="Filled" size="lg" disabled={this.isDisabledEmail()} />
                        </div>
                    </MTSCardFooter>
                </MTSModel>
                <MTSModel className="MTS-model-custom-width" open={this.state.withdawal} hide={this.showModelWithdrawal}>
                    <div className="MTS-model-popup-tick">
                        <div className="">
                            <Svg SvgName="tick-white" />
                        </div>
                    </div>
                    <MTSModelBody>
                        <div className="MTS-success-text">
                            <h2 className="MTS-heading-2-bold">Funds have been successfully requested</h2>
                            <div className="MTS-success-text-detail">
                                The check will be sent to you at the address provided
                            </div>
                        </div>
                        <div className="MTS-withdrawal-detail-container">
                            <div className="MTS-withdrawal-detail-heading">
                                Address Line 1
                           </div>
                            <div className="MTS-withdrawal-detail-value">
                                7801 NW 37th Street
                           </div>
                            <div className="MTS-withdrawal-detail-heading">
                                City
                           </div>
                            <div className="MTS-withdrawal-detail-value">
                                Doral
                           </div>
                            <div className="MTS-withdrawal-detail-heading">
                                State/Province/Region
                           </div>
                            <div className="MTS-withdrawal-detail-value">
                                FL
                           </div>
                            <div className="MTS-withdrawal-detail-heading">
                                ZIP/Postal Code
                           </div>
                            <div className="MTS-withdrawal-detail-value">
                                33195-6503
                           </div>
                            <div className="MTS-withdrawal-detail-heading">
                                Phone number
                           </div>
                            <div className="MTS-withdrawal-detail-value">
                                (757) 943-83-56
                           </div>
                        </div>
                    </MTSModelBody>
                    <MTSCardFooter>
                        <div className="MTS-withdrawal-model-button">
                            <MTSButton title="close" fontStyle="bold" type="Filled" size="lg" onClick={this.showModelWithdrawal} />
                        </div>
                    </MTSCardFooter>
                </MTSModel>
            </div>
        )
    }
}

export default Account;