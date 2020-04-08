import React from "react";
// import down from 'Assets/Images/down.png';
import './style.scss';
interface TabProps {
	tabName:string,
}
const MTSTab: React.SFC<TabProps> = ({
	tabName,
}) => {
	return (
		<div className="MTS-custom-tab-container">
			<div className="MTS-tab-left">
				<input type="radio" id={`${tabName}radio`} className="MTS-input-radio" name={tabName} value={`${tabName}radio`} defaultChecked onChange={(e) => console.log(e.target.value)} />
				<label htmlFor={`${tabName}radio`} className="MTS-multiple">Multiple
				</label>
			</div>
			<div className="MTS-tab-right">
				<input type="radio" id={`${tabName}check`} className="MTS-input-radio" name={tabName} value={`${tabName}check`} onChange={(e) => console.log(e.target.value)} />
				<label htmlFor={`${tabName}check`} className="MTS-checkbox">Checkboxes
				</label>
			</div>
		</div >
	);
};

MTSTab.defaultProps = {

}

export default MTSTab
