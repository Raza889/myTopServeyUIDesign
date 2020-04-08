import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import './style.scss'
import Svg from 'Assets/Images/Sprite';
type State = {
  companyName: string,
  industry: string,
  address: string,
  file: string,
  imagePreviewUrl: string,
};
type MyProps = {};
class SurveyCreated extends Component<MyProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      companyName: '',
      industry: '',
      address: '',
      file: '',
      imagePreviewUrl: '',
    }
  }

  handleImageChange = <T extends keyof State>(e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      } as {});
    }

    reader.readAsDataURL(file)
  }

  onChange = <T extends keyof State>(e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as { [P in T]: State[P]; })
  }
  handleImage = () => {
    this.setState({
      imagePreviewUrl: '',
    })
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header title="Profile" createSurvey={true} path="Coca-cola" />
        <div className="MTS-page-body-container">
          <div className="MTS-prof-billing-container">
            <div className="MTS-prof-billing-left">
              <div className="MTS-prof-billing-left-top">
                <div className="MTS-sur-dash-attr-heading MTS-sur-dash-attr-heading-bold">
                  Balance
                </div>
                <div className="MTS-sur-dash-attr-val">
                  <h2>
                    $120.00
                </h2>
                </div>
              </div>
              <div className="MTS-divider"></div>
              <div className="MTS-prof-billing-body">
                <div className="MTS-sur-dash-attr-heading MTS-sur-dash-attr-heading-bold">
                  History
              </div>
                <div className="MTS-prof-billing-history-container">
                <div className="MTS-prof-billing-history-container-left">
                    <div className="MTS-sur-dash-attr-heading">
                  Waiting for payment
                </div>
                  <div className="MTS-sur-dash-attr-val">
                  Payment for survey publication
                </div>
                </div>
                <div className="MTS-prof-billing-history-container-right">
                <div className={`MTS-billing-history-list-item-status MTS-billing-history-list-item-status-pending`}>
                $1500.00
                </div>
                </div>
                  
                </div>
                <div className="MTS-prof-billing-history-container">
                <div className="MTS-prof-billing-history-container-left">
                    <div className="MTS-sur-dash-attr-heading">
                    21 Jun 2019
                </div>
                  <div className="MTS-sur-dash-attr-val">
                  Payment for survey publication      
                  </div>
                </div>
                <div className="MTS-prof-billing-history-container-right">
                <div className={`MTS-billing-history-list-item-status MTS-billing-history-list-item-status-withdraw`}>
                $1500.00
                </div>
                </div>
                  
                </div>
                <div className="MTS-prof-billing-history-container">
                <div className="MTS-prof-billing-history-container-left">
                    <div className="MTS-sur-dash-attr-heading">
                    20 Jun 2019
                </div>
                  <div className="MTS-sur-dash-attr-val">
                  Refill
                </div>
                </div>
                <div className="MTS-prof-billing-history-container-right">
                <div className={`MTS-billing-history-list-item-status MTS-billing-history-list-item-status-add`}>
                $4620.00
                </div>
                </div>
                  
                </div>
              </div>
            </div>
            <div className="MTS-prof-billing-right">
            <div className="MTS-sur-dash-attr-heading MTS-sur-dash-attr-heading-bold">
                 Refill
            </div>
            <div className="MTS-created-payment-right MTS-prof-billing-right-text">
                <div className="MTS-created-payment-symbol">
                  <Svg SvgName="exclamation" />
                </div>
                <div className="MTS-created-payment-text">
                  To refill the balance,          
                  amount by Bank transfer
                  to the account provided below.
                </div>
              </div>
                <div className="MTS-created-payment-detail-container">
                <div className="MTS-created-payment-attr-container">
                    <div className="MTS-created-payment-attr-name">
                    Account Name
                        </div>
                    <div className="MTS-created-payment-attr-value">
                    My Top Survey LLC
                        </div>
                  </div>
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
          </div>
        </div>
      </div>
    )
  }
}
export default SurveyCreated;