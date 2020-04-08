import React, { Component } from 'react'
import MSTButton from '../../UI/Button/index';
import MTSInput from '../../UI/Input/index';
import { Link } from 'react-router-dom';
import MTSCard from '../../UI/Card/Card';
import { MTSCardHeader, MTSCardFooter, MTSCardBody } from 'components/UI/Card/Card'

import './style.scss';


type State = {
    street: string,
    apt: string,
    disabled: boolean,
    town: string,
    zip: string,
    next: boolean,
};
type MyProps = {};
class Account extends Component<MyProps, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            street: '',
            apt: '',
            disabled: true,
            town: '',
            zip: '',
            next: false,
        }
    }

    handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as { [P in T]: State[P]; })
    }

    isDisabled = (): boolean => {
        return !this.state.street || !this.state.apt || !this.state.town
        || !this.state.town
    }


    render() {
        return (
            <MTSCard user={true}>
                <MTSCardHeader>
                    Register
                </MTSCardHeader>
                <div className="MTS-tab-container">
                    <div className="MTS-tab MTS-tab1">
                        <div className="tab-number tab-number-filled">1</div>
                        <div className="MTS-tab-title">Account</div>
                    </div>
                    <div className="MTS-tab MTS-tab2 ">
                        <div className="tab-number tab-number-filled">2</div>
                        <div className="MTS-tab-title ">Your info</div>
                    </div>
                    <div className="MTS-tab MTS-tab3 ">
                        <div className="tab-number ">3</div>
                        <div className="MTS-tab-title ">Getting paid</div>
                    </div>
                </div>
                <MTSCardBody>
                    <div className="info-text">
                        <p>So we can send a reward check, we need to know your address.</p>
                    </div>
                    <MTSInput
                        type="text"
                        name="street"
                        onChange={this.handleChange}
                        value={this.state.street}
                        required
                        errorMessage="Street must exist"
                        label="Street"
                    />
                    <MTSInput
                        type="text"
                        name="apt"
                        required
                        errorMessage="Must exist"
                        onChange={this.handleChange}
                        value={this.state.apt}
                        label="Apt/Suite/Other"
                    />

                    <div className="MTS-input-row d-flex">
                        <MTSInput
                            type="text"
                            name="town"
                            onChange={this.handleChange}
                            value={this.state.town}
                            required
                            errorMessage="City name must exist"
                            label="Town/City"
                            containerClass="left-input right-input"
                        />
                        <MTSInput
                            type="text"
                            name="zip"
                            onChange={this.handleChange}
                            value={this.state.zip}
                            required
                            label="Zip Code"
                            containerClass="right-input"
                        />
                    </div>
                    <div className="flex-row flex-wrap MTS-Login-button-row">
                        <MSTButton title="Start earning" className='' fontStyle='bold' type='Filled' size='lg' disabled={this.isDisabled()} icon={"arrow"} />
                    </div>
                </MTSCardBody>
                <MTSCardFooter>
                    <div className='forget-password-footer-text'>
                        <Link to='/user/login' className="back-to-login">Cancel and return to login
                </Link>
                    </div>
                </MTSCardFooter>
            </MTSCard>

        )
    }
}

export default Account;