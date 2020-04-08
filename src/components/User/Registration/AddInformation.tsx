import React, { Component } from 'react'
import MSTButton from '../../UI/Button/index';
import MTSInput from '../../UI/Input/index';
import { Link } from 'react-router-dom';
import MTSCard from '../../UI/Card/Card';
import { MTSCardHeader, MTSCardFooter, MTSCardBody } from 'components/UI/Card/Card';
import Address from './Address';

import './style.scss';


type State = {
    firstName: string,
    LastName: string,
    disabled: boolean,
    DOB: Date,
    gender:string,
    next:boolean,
};
type MyProps = {};
class Account extends Component<MyProps, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            firstName: '',
            LastName: '',
            disabled: true,
            DOB: new Date(),
            gender:'male',
            next:false,
        }
    }

    handleChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as { [P in T]: State[P]; })
    }

    isDisabled = (): boolean => {
        return !this.state.firstName || !this.state.LastName 
        || !this.state.DOB
    }
    next = () => {
        this.setState({
          next: true
        })
      }
    HandleGender = (gender:string) => (Event: any)=> {
        this.setState({
            gender:gender,
        })
    }
    render() {
        const { next } = this.state;
        return (
            <div>
            {
                next ? 
                 < Address />: 

            <MTSCard title="Login" user={true}>
                <MTSCardHeader>
                    Register
                </MTSCardHeader>
                <div className="MTS-tab-container">
                    <div className="MTS-tab MTS-tab1">
                        <div className="tab-number tab-number-filled">1</div>
                        <div className="MTS-tab-title">Account</div>
                    </div>
                    <div className="MTS-tab MTS-tab2 ">
                        <div className="tab-number ">2</div>
                        <div className="MTS-tab-title ">Your info</div>
                    </div>
                    <div className="MTS-tab MTS-tab3 ">
                        <div className="tab-number  tab-number-inactive">3</div>
                        <div className="MTS-tab-title MTS-tab-disabled">Getting paid</div>
                    </div>
                </div>
                <MTSCardBody>
                <div className="info-text">
                    <p>To find the relevant surveys, we need to know a little more about you.</p>
                    </div>
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
                   <div className="tabs-gender-container">
                       <div className={`tab-gender tab-gender-1 ${this.state.gender === 'male'?"tab-gender-selected":'' }`} onClick={this.HandleGender('male')}>Male</div>
                       <div className={`tab-gender tab-gender-2 ${this.state.gender === 'Female'?"tab-gender-selected":'' }`}onClick={this.HandleGender('Female')}>Woman</div>
                   </div>

                    <MTSInput
                        type="date"
                        name="role"
                        onChange={this.handleChange}
                        value={this.state.DOB}
                        required
                        errorMessage="Date of birth must exist"
                        label="Date of Birth"
                    />
                    


                    <div className="flex-row flex-wrap MTS-Login-button-row">
                        <MSTButton title="Continue" className='' fontStyle='bold' type='Filled' size='lg' disabled={this.isDisabled()}  onSubmit={this.next} />
                    </div>
                </MTSCardBody>
                <MTSCardFooter>
                    <div className='forget-password-footer-text'>
                        <Link to='/company/login' className="back-to-login">Cancel and return to login
                </Link>
                    </div>
                </MTSCardFooter>
            </MTSCard>
            }
        </div>
        )
    }
}

export default Account;