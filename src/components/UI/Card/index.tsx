import React from "react";
import logo from "Assets/Images/LogoCompany.png";

import './style.scss';

interface CardProps {
    title: string,
    childer?: object,
    footerText?: string,
    className?: string,
}

const MTSCard: React.SFC<CardProps> = ({
    title,
    children,
    footerText,
    className
}) => (
        <div className="MTSContainer">
            <div className="MTS-Login-container">
                <div>
                    <div className="MTS-Login-logo-contianer">
                        <img src={logo} alt="logo" className="MTS-logo" />
                    </div>
                    <div className="MTS-Login-data-container">
                        <div className="MTS-Login-header">
                            <h3 className="MTS-heading-3">{title} </h3>
                        </div>
                        <div className={`MTS-Login-field-container ${className}`}>
                            {children}
                        </div>
                    </div>
                    <div className="MTS-Login-cancel">
                      <p className="MTS-Login-cancel-text">{footerText}</p>
                      {/* <Link to="/company/forgotpassword" className="MTS-link MTS-link-md MTS-link-bold" >Cancel</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )

MTSCard.defaultProps = {
    title: 'Submit', // This value is adopted when name prop is omitted.
}

export default MTSCard
