import React from "react";
import logo from "Assets/Images/Logo.png";
import LogoCompany from 'Assets/Images/LogoCompany.png';
import './style.scss';

interface CardProps {
    title?: string,
    children?: object,
    style?:object,
    className?:string,
    user?:boolean,
}
interface HeaderProps {
    title?: string,
}
const MTSCard: React.SFC<CardProps> = ({
    children,
    style,
    className,
    user
}) => (
        <div className={`MTSContainer ${className}`} style={style}>
            <div className="MTS-Card-container">
                <div>
                    <div className="MTS-Card-logo-contianer">
                        <img src={ user ? logo :LogoCompany} alt="logo" className="MTS-logo" />
                    </div>
                   {children}
                </div>
            </div>
        </div>
    )

MTSCard.defaultProps = {
    user:false,
}

export default MTSCard;
export const MTSCardBody: React.SFC<CardProps> = ({ children }) => (
    <div className="MTS-card-body">
        {children}
    </div>
)
export const MTSCardHeader: React.SFC<HeaderProps> = ({ children }) => (
    <div>

        
            <div className="MTS-Card-header">
                <h3 className="MTS-heading-3">{children} </h3>
            </div>
    </div>
);
export const MTSCardFooter: React.SFC<CardProps> = ({ children }) => (
    <div>
        <div className="MTS-Card-Footer">
            {children}
        </div>
    </div>
);
