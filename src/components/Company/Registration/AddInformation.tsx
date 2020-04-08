import React, { Component } from 'react'
import MSTButton from '../../UI/Button/index';
import MTSInput from '../../UI/Input/index';
import { Link } from 'react-router-dom';
import MTSCard from '../../UI/Card/Card';
import { MTSCardHeader, MTSCardFooter, MTSCardBody } from 'components/UI/Card/Card'

import './style.scss';


type State = {
    firstName: string,
    LastName: string,
    companyName:string,
    disabled: boolean,
    role: string,
};
type MyProps = {};
class Account extends Component<MyProps, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            firstName: '',
            LastName: '',
            companyName:'',
            disabled: true,
            role: '',
        }
    }

    handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as { [P in T]: State[P]; })
    }

    isDisabled = (): boolean => {
        return !this.state.firstName || !this.state.LastName || !this.state.companyName
        || !this.state.role
    }

    render() {
        return (
            <MTSCard title="Login">
                <MTSCardHeader>
                    Register your Company
                </MTSCardHeader>
                <div className="MTS-tab-container">
                    <div className="MTS-tab MTS-tab1">
                        <div className="tab-number tab-number-filled">1</div>
                        <div className="MTS-tab-title">Account</div>
                    </div>
                    <div className="MTS-tab MTS-tab2 ">
                        <div className="tab-number ">2</div>
                        <div className="MTS-tab-title ">Your information</div>
                    </div>
                </div>
                <MTSCardBody>

                    <div className="MTS-input-row d-flex">
                        <MTSInput
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            required
                            errorMessage="First name must exist"
                            label="First Name"
                            containerClass="left-input right-input"
                        />
                        <MTSInput
                            type="text"
                            name="LastName"
                            onChange={this.handleChange}
                            value={this.state.LastName}
                            required
                            errorMessage="Last name must exist"
                            label="Last Name"
                            containerClass="right-input"
                        />
                    </div>
                    <MTSInput
                        type="text"
                        name="companyName"
                        onChange={this.handleChange}
                        value={this.state.companyName}
                        required
                        errorMessage="Company name must exist"
                        label="Company Name"
                    />

                    <MTSInput
                        type="text"
                        name="role"
                        onChange={this.handleChange}
                        value={this.state.role}
                        required
                        errorMessage="Role must exist"
                        label="Role"
                    />


                    <div className="flex-row flex-wrap MTS-Login-button-row">
                        <MSTButton title="Finish" className='' fontStyle='bold' type='Filled' size='lg' disabled={this.isDisabled()} to="/company/registrationinformation" />
                    </div>
                </MTSCardBody>
                <MTSCardFooter>
                    <div className='forget-password-footer-text'>
                        <Link to='/company/login' className="back-to-login">Cancel and return to login
                </Link>
                    </div>
                </MTSCardFooter>
            </MTSCard>

        )
    }
}

export default Account;