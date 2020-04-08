import React from "react";
import logo from "Assests/Images/Logo.png";
import './style.scss';

interface CardProps {
    title?: string,
    childer?: object,
}

const MTSCard: React.SFC<CardProps> = ({
    title,
    children
}) => (
        <div className="MTSContainer">
            <div className="MTS-Login-container">
                <div>
                    <div className="MTS-Login-logo-contianer">
                        <img src={logo} alt="logo" className="MTS-logo" />
                    </div>
                    <div className="">
                        {title &&
                            <div className="MTS-Login-header">
                                <h3 className="MTS-heading-3">{title} </h3>
                            </div>}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )

MTSCard.defaultProps = {
}

export default MTSCard
