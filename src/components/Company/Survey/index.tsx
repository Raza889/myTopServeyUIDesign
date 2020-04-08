import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import MTSInput from 'components/UI/Input/index';
import MTSButton from 'components/UI/Button/index';
import Svg from 'Assets/Images/Sprite';
import { MTSModel, MTSModelHeader, MTSModelBody, MTSModelFooter } from 'components/UI/Model';

import boardclock from 'Assets/Images/CompanyAccount/boardclock.png';
import surveyboard from 'Assets/Images/CompanyAccount/surveyboard.png';
import './style.scss'

type State = {
  companyName: string,
  industry: string,
  address: string,
  logo: string,
  files: string,
  addCompany: boolean,
  payment: boolean,
  paysuccess: boolean,
};
type MyProps = {};
class SurveyCreated extends Component<MyProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      companyName: '',
      industry: '',
      address: '',
      files: '',
      logo: '',
      addCompany: false,
      payment: false,
      paysuccess: false,
    }
  }
  handleImageChange = <T extends keyof State>(e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        files: file,
        logo: reader.result
      } as {});
    }

    reader.readAsDataURL(file)
  }

  handleInput = <T extends keyof State>(e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }
  isDisable = () => {
    return !this.state.industry || !this.state.address || !this.state.companyName || !this.state.logo
  }
  handleAddCompany = () => {
    this.setState({
      addCompany: !this.state.addCompany,
    })
  }
  handlePayment = () => {
    this.setState({
      payment: !this.state.payment,
    })
  }
  handlePaymentSuccess = () => {
    this.setState({
      paysuccess: true,
      payment: false,
    })
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header title="Create Survey" path="Coca-cola" />
        <div className="MTS-page-body-container">
          <div className="MTS-create-survey-page-container">
            <div className="MTS-created-row">
              <img src={!this.isDisable() ? surveyboard : boardclock} alt="" className="MTS-create-img" />
              <div className="MTS-created-button">
                <MTSButton title="Later" size="md" type="outline" fontStyle="regular" />
              </div>
            </div>
            <div className="MTS-created-heading">
              <h2 className="MTS-heading-2">
                Survey created successfully
              </h2>
              <h6 className="MTS-created-text">
                To publish a survey, you need:
              </h6>
            </div>
            {
              this.isDisable() ? <div className="MTS-created-add-company-info">
                <div className="MTS-created-svg-container">
                  <Svg SvgName="warn-board" />
                  Add company information
              </div>

                <div className="MTS-created-btn-container">
                  <MTSButton title="Add" fontStyle="regular" size="md" onClick={this.handleAddCompany} type="outline" />
                </div>
              </div>
                :
                <div className="MTS-created-add-company-info-success">
                  <div className="MTS-created-svg-container MTS-created-svg-container-success ">
                    <Svg SvgName="board" />
                    Add company information
                 </div>

                  <div className="MTS-created-btn-container MTS-created-btn-container-success">
                    <Svg SvgName="tick-white" />
                  </div>
                </div>
            }
            {this.state.paysuccess ?
              <div className={`MTS-created-add-company-info-payment-success`}>
                <div className="MTS-created-svg-container MTS-created-svg-container-payment-success">
                  <Svg SvgName="doller-white" />
                  Pay ($4500.00)
                </div>

                <div className="MTS-created-btn-container MTS-created-btn-container-success">
                  <Svg SvgName="reload"/>
                </div>
              </div>
              :
              <div className={`MTS-created-add-company-info ${this.isDisable() && "MTS-created-add-company-info-disabled"}`}>
                <div className="MTS-created-svg-container">
                  <Svg SvgName="doller-blue" />
                  Pay ($4500.00)
              </div>

                <div className="MTS-created-btn-container">
                  <MTSButton title="Payment Details" disabled={this.isDisable()} onClick={this.handlePayment} fontStyle="regular" size="md" type="outline" />
                </div>
              </div>
            }

          </div>
        </div>
        <MTSModel open={this.state.addCompany} hide={this.handleAddCompany}>
          <MTSModelHeader>
            <div className="MTS-add-company-header">
              <h2 className="MTS-heading-2">
                Company Information
            </h2>
            </div>
          </MTSModelHeader>
          <MTSModelBody>
            <MTSInput name="companyName" value={this.state.companyName} onChange={this.handleInput} label="Company Name" type="text" />
            <MTSInput name="industry" value={this.state.industry} onChange={this.handleInput} label="Industry" type="text" />
            <MTSInput name="address" value={this.state.address} onChange={this.handleInput} label="Address" type="text" />
            <label htmlFor="file-upload" className="MTS-created-logo">
              {this.state.logo ? <img src={this.state.logo} alt="logo" /> : <div className="MTS-created-logo-text">  Logo</div>}
              <div className="MTS-created-upload-button">
                Uplaod logo
            </div>
            </label>
            <div className="MTS-only-svg">
              only .svg
            </div>
            <input type="file" id="file-upload" style={{ display: 'none' }} name='logo' onChange={this.handleImageChange} accept={'.svg'} />

            <MTSButton title="Save" size="md" type="outline" disabled={this.isDisable()} onClick={this.handleAddCompany} fontStyle="regular" />
          </MTSModelBody>
        </MTSModel>
        <MTSModel open={this.state.payment} hide={this.handlePayment} className="MTS-created-model-width">

          <MTSModelBody>
            <div className="MTS-created-payment-container">
              <div className="MTS-created-payment-left">
                <div className="MTS-created-payment-heading">
                  <h2 className="MTS-heading-2">
                    Payment Details
                      </h2>
                </div>
                <div className="MTS-created-payment-detail-container">
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Account #
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      142124612
                        </div>
                  </div>
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Bank Name and Address
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      Bank of America
                        </div>
                  </div>
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Address
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      One Apple Park Way, Cupertino, CA 95014
                        </div>
                  </div>
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Telephone
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      +1-202-555-0114
                        </div>
                  </div>
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Bank’s routing number
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      125613432
                        </div>
                  </div>
                  <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                      Bank SWIFT
                        </div>
                    <div className="MTS-created-payment-attr-value">
                      BOFAUS6S
                        </div>
                  </div>
                </div>
              </div>
              <div className="MTS-created-payment-right">
                <div className="MTS-created-payment-symbol">
                  <Svg SvgName="exclamation" />
                </div>
                <div className="MTS-created-payment-text">
                  To refill the balance,          
                  amount by Bank transfer
                  to the account provided below.
                    </div>
              </div>
            </div>
          </MTSModelBody>
          <MTSModelFooter>
            <MTSButton title="Request for a payment confirmation" type="Filled" size="lg" onClick={this.handlePaymentSuccess} fontStyle="regular" />
          </MTSModelFooter>
        </MTSModel>
      </div>
    )
  }
}
export default SurveyCreated;