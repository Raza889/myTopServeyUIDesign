import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import './style.scss'
import Svg from 'Assets/Images/Sprite';
import MTSButton from 'components/UI/Button';
import MTSInput from 'components/UI/Input';
import dummy from 'Assets/Images/CompanyAccount/dummyPhoto.png'
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
  handleImage = () =>{
    this.setState({
      imagePreviewUrl:'',
    })
  }
  render() {
    return (
      <div className="MTS-page-container height-100">
        <Header title="Profile" createSurvey={true} path="Coca-cola" />
        <div className="MTS-page-body-container">
          <div className="MTS-profile-page-container">
            <div className="MTS-com-prof-top-row">
              <div className="MTS-com-prof-attr-container">
                <div className="MTS-sur-dash-attr-heading">
                  Member since 24/06/2017
                </div>
                <div className="MTS-sur-dash-attr-val">
                  John Doe
              </div>
              </div>
              <div className="MTS-com-prof-attr-container">
                <div className="MTS-sur-dash-attr-heading">
                  Role
              </div>
                <div className="MTS-sur-dash-attr-val">
                  Researcher
              </div>
              </div>
              <div className="MTS-com-prof-attr-container">
                <div className="MTS-sur-dash-attr-heading">
                  Created by
              </div>
                <div className="MTS-sur-dash-attr-val">
                  20 surveys
              </div>
              </div>
              <div className="MTS-com-prof-attr-container">
                <div className="MTS-sur-dash-attr-heading">
                  Balance
              </div>
                <div className="MTS-sur-dash-attr-val">
                  $120 <Svg SvgName="plus-circle" />
                </div>
              </div>
            </div>
            <div className="MTS-divider"></div>
            <div className="MTS-com-prof-email-row">
              <div className="MTS-com-prof-email">
                <div className="MTS-com-prof-attr-container">
                  <div className="MTS-sur-dash-attr-heading">
                    Email
              </div>
                  <div className="MTS-sur-dash-attr-val">
                    john***02@gmail.com
              </div>
                </div>
                <div className="MTS-com-prof-btn">
                  <MTSButton title="Change Email" size="md" to="/company/profile/changeEmail" fontStyle="regular" type="outline" />
                </div>
              </div>
              <div className="MTS-com-prof-password">
                <div className="MTS-com-prof-attr-container">
                  <div className="MTS-sur-dash-attr-heading">
                    Password
              </div>
                  <div className="MTS-sur-dash-attr-val">
                    •••••••••••••••
              </div>
                </div>
                <div className="MTS-com-prof-btn">
                  <MTSButton title="Change Password" to="/company/profile/changePassword" size="md" fontStyle="regular" type="outline" />
                </div>
              </div>
            </div>
            <div className="MTS-divider"></div>
            <div className="MTS-com-prof-company-information">
              <div className="MTS-com-prof-company-left">
                <div className="MTS-com-prof-company-heading">
                  Company information
                </div>
                <div className="MTS-com-prof-company-field">
                  <MTSInput label="Company Name" name="companyName" type="text" onChange={(e: any) => this.onChange(e)} value={this.state.companyName} />
                </div>
                <div className="MTS-com-prof-company-field">
                  <MTSInput label="Industry" name="industry" type="text" onChange={(e: any) => this.onChange(e)} value={this.state.industry} />
                </div>
                <div className="MTS-com-prof-company-field">
                  <MTSInput label="Address" name="address" type="text" onChange={(e: any) => this.onChange(e)} value={this.state.address} />
                </div>
                <div className="MTS-com-prof-btn">
                  <MTSButton type="Filled" size="md" title="Save" fontStyle="regular" />
                </div>
              </div>
              <div className="MTS-com-prof-company-right">
                <div className="MTS-com-prof-company-heading">
                  Company information
                </div>
                {!this.state.imagePreviewUrl ?
                  <div className="MTS-com-prof-img-container">
                    <div className="MTS-com-prof-img-container-inner">
                      <div>
                        <img src={dummy} alt="dummy" className="MTS-com-prof-dummy-img" />
                        <div className="MTS-com-prof-img-text">
                          <h6 className="MTS-heading-6">
                            Upload logo
                      </h6>
                          <div className="MTS-only-svg">
                            only .svg
                      </div>
                        </div>

                      </div>
                      <label htmlFor="file-upload" className="MTSBtn MTSoutline MTSregular MTSBtn-def MTS-com-prof-upload-button MTSmd">
                        <input type="file" name="MTS-file-input" id="file-upload" style={{ display: 'none' }} onChange={this.handleImageChange} accept={'.svg'} />
                        Upload
                    </label>
                    </div>
                  </div>
                  :
                  <div className="MTS-com-prof-img-container">
                    <div className="MTS-com-prof-img-container-inner">

                    <div className="MTS-com-prof-img-container-photo-choosed">

                      <div className="MTS-com-prof-choosed">
                        <img src={this.state.imagePreviewUrl} alt="Image_logo" className="choosed"/>
                      </div>
                      <div className="MTS-com-prof-img-btn-container">
                      <label htmlFor="file-upload" className="MTSBtn MTSoutline MTSregular MTSBtn-def MTSmd">
                        <input type="file" name="MTS-file-input" id="file-upload" style={{ display: 'none' }} onChange={this.handleImageChange} accept={'.svg'} />
                        Replace
                      </label>
                        <MTSButton title="Delete" onClick={this.handleImage} fontStyle="regular" className="MTS-com-prof-delete-btn" size="md" type="outline"/>

                      </div>
                      </div>
                  </div>
                  </div>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default SurveyCreated;