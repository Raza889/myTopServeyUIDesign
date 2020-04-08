import React, { Component } from 'react';
import Header from 'components/UI/Header/index';
import MTSselect from 'components/UI/Select/index';
import MTSInput from 'components/UI/Input/index';
import Svg from 'Assets/Images/Sprite'
import MTSButton from 'components/UI/Button/index';
import Tabs from 'components/UI/Tabs/index';
import './style.scss'

import dummy from 'Assets/Images/CompanyAccount/dummyPhoto.png'
import { MTSCheckbox } from 'components/UI/Checkbox';
const options = ['option0', 'option1', 'option2', 'option3', 'option4', 'option5',]

type State = {
	options: string,
	newSurveyName: string,
	noOfRes: string,
	price: string,
	Budget: string,
	file: string,
	imagePreviewUrl: string,
};
type MyProps = {};
class CompanyLanding extends Component<MyProps, State>{
	constructor(props: any) {
		super(props);
		this.state = {
			options: 'Category',
			newSurveyName: '',
			noOfRes: '',
			price: '',
			Budget: '$0',
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
		} as { [P in T]: State[P]; }, () => { this.setBudget() })
	}
	handleImage = () => {
		this.setState({
			imagePreviewUrl: '',
		})
	}
	setBudget = () => {
		if (this.state.price !== '' && this.state.noOfRes !== '') {
			var total = Number(this.state.price) * Number(this.state.noOfRes);
			this.setState({
				Budget: `$${total}`,
			})
		}
	}
	render() {
		return (
			<div className="MTS-page-container height-100 MTS-padding-0">
				<Header title="Create Survey" path="Coca-cola" />
				<div className="MTS-page-body-container">
					<div className="MTS-new-survey-form-container">
						<form action="" className="MTS-new-survey-form">
							<div className="MTS-new-survey-form-top">
								<div className="MTS-new-survay-form-left">
									<div className="MTS-new-survey-form-heading">
										Survey settings
                  					</div>
									<div>
										<MTSInput label="Survey Name" onChange={this.onChange} name="newSurveyName" type="text" value={this.state.newSurveyName} />
									</div>
									<div>
										<MTSselect options={options} onChange={this.onChange} label="Category" value={this.state.options} name="options" />
									</div>
									<div>
										<MTSInput label="Numbers of respondents" onChange={this.onChange} name="noOfRes" type="number" value={this.state.noOfRes} />
									</div>
									<div>
										<MTSInput label="Reward for completing the survey, $" onChange={this.onChange} name="price" type="number" value={this.state.price} />
									</div>
									<div>
										<MTSInput label="Budget" onChange={this.onChange} name="Budget" type="text" value={this.state.Budget} disabled={true} />
									</div>
								</div>
								<div className="MTS-new-survay-form-right">
									<div className="MTS-new-survay-form-right-container">
										<div className="MTS-new-survey-form-heading">
											Preview image
                    					</div>
										<div className="MTS-file-upload-container MTS-file-img-container">
											{this.state.imagePreviewUrl !== "" ?
												<div className="MTS-imgPreview">
													<img src={this.state.imagePreviewUrl} alt="" />
													<div className="MTS-img-preview-row">
														<div className="MTS-replace-img-button">

															<label htmlFor="fileOpen"><span>&#8646;</span> Replace</label>
															<input className="fileInput"
																id="fileOpen"
																type="file"
																style={{ display: 'none' }}
																onChange={(e) => this.handleImageChange(e)}
																accept=".jpg, .png, .jpeg, " />
														</div>
														<div className="MTS-delete-button" onClick={this.handleImage}>
															<span>&#10539;</span> Delete
														</div>
													</div>
												</div>
												:
												<div className="MTS-file-img-container">
													<img src={dummy} alt="" className="MTS-empty-file-img" />
													<h6 className="MTS-heading-6 MTS-file-upload">
														Upload preview image
														</h6>
													<div className="MTS-file-upload-text-condition">
														Max 5MB, min. 740x460, .png or .jpg.
														</div>
													<div className="file-upload-btn-container">
														<label htmlFor="fileOpen" className="MTS-file-upload-label">
															Upload

														</label>
														<input className="fileInput"
															id="fileOpen"
															type="file"
															style={{ display: 'none' }}
															onChange={(e) => this.handleImageChange(e)}
															accept=".jpg, .png, .jpeg, " />
													</div>
												</div>
											}
										</div>

									</div>
								</div>
							</div>
							<div className="MTS-form-horizantel-divide"></div>
							<div className="MTS-form-add-question">
								<div className="MTS-new-survey-form-heading">
									Questions
							</div>
								<div className="MTS-question-container">
									<div className="MTS-question-row-container">
										<div className="MTS-question-num">
											<h6>Question #1</h6>
										</div>
										<div className="MTS-question-del">
											<Svg SvgName="trash-red" />
											Delete
									</div>
									</div>
									<div className="MTS-question-text-row">
										<div className="MTS-question-text">
											<div className="MTS-question-field-heading">
												Question
											</div>
											<div className="MTS-question-text-question">
												1. What is the best restaurant in your area?
											</div>

										</div>
										<div className="MTS-question-tab-container"><Tabs tabName="quostion1"/></div>
									</div>
									<div className="MTS-question-answer-container">
										<MTSCheckbox label="McDonalds" name="McDonalds1" value={false} labelClass="MTS-question-checkbox" />
										<div className="MTS-question-field-heading MTS-question-field-answer">
											Answer #1
										</div>
									</div>
									<div className="MTS-question-answer-container">
										<MTSCheckbox label="KFC" name="KFC1" value={false} labelClass="MTS-question-checkbox" />
										<div className="MTS-question-field-heading MTS-question-field-answer">
											Answer #2
										</div>
									</div>
									<div className="MTS-question-add-anwser">
										Add Answer
									</div>
								</div>
								<div className="MTS-question-container">
									<div className="MTS-question-row-container">
										<div className="MTS-question-num">
											<h6>Question #2</h6>
										</div>
										<div className="MTS-question-del">
											<Svg SvgName="trash-red" />
											Delete
										</div>
									</div>
									<div className="MTS-question-text-row">
										<div className="MTS-question-text">
											<div className="MTS-question-field-heading">
												Question
											</div>
											<div className="MTS-question-text-question">
												What risks are worth taking?
											</div>

										</div>
										<div className="MTS-question-tab-container"><Tabs tabName="question2"/></div>

									</div>
									<div className="MTS-question-answer-container">
										<MTSCheckbox label="McDonalds" name="McDonalds" value={false} labelClass="MTS-question-checkbox" />
										<div className="MTS-question-field-heading MTS-question-field-answer">
											Answer #1
										</div>
									</div>
									<div className="MTS-question-answer-container">
										<MTSCheckbox label="KFC" name="KFC" value={false} labelClass="MTS-question-checkbox" />
										<div className="MTS-question-field-heading MTS-question-field-answer">
											Answer #2
										</div>
									</div>
									<div className="MTS-question-add-anwser">
										Add Answer
									</div>
								</div>
								<div className="MTS-add-question-button">
									<MTSButton fontStyle="regular" type="Filled" size="md" title="Add Question" />
								</div>
							</div>
						</form>
					</div>

				</div>
				<div className="MTS-form-footer">
					<div className="MTS-form-footer-left">
						<div className="MTS-form-footer-left-title">
							<div className="MTS-question-text-question">
								{this.state.newSurveyName ? this.state.newSurveyName: "Question?"}
							</div>
							<div className="MTS-form-footer-left-row">

								<div>{this.state.options}</div>.
										<div>{this.state.noOfRes? this.state.noOfRes:"0"} respondents</div>.
										<div>{this.state.price?this.state.price:"$0"} per respondents</div>.
										<div>{this.state.Budget?this.state.Budget:"$0"}</div>.
										<div>2 Questions</div>

							</div>

						</div>
					</div>
					<div className="MTS-form-footer-right">
						<div className="MTS-form-footer-save-button">
							Save
								</div>
						<div className="MTS-form-footer-request">
							<MTSButton type="Filled" size="md" title="Request for publish" fontStyle="regular" to="/company/Surveycreated"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default CompanyLanding;