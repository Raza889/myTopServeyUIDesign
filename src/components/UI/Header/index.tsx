import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './style.scss';
import logo from 'Assets/Images/logoIcon.png';
import profile from 'Assets/Images/Profile.png';
import down from 'Assets/Images/down.png';
import user from 'Assets/Images/userEmpty.png';
import currency from 'Assets/Images/$.png';
import Logout from 'Assets/Images/logout.png';
import bars from 'Assets/Images/bars.png';
import cross from 'Assets/Images/cross.png';
import Logoutred from 'Assets/Images/logoutred.png'
import MTSButton from "../Button";
import Header from './header'
interface HeaderProps {
    path?: string,
    title: string,
    createSurvey?:boolean,
    auth?:boolean,
}

const MTSHeader: React.SFC<HeaderProps> = ({
    path,
    title,
    createSurvey,
    auth,
}) => {
    let [menu, Setmenu] = useState<boolean>(false);
    const showMenu = (Event: any) => Setmenu(menu = !menu);
    return (
        <header className="MTS-header">
            {auth ? 
            <div className="MTS-header-container">
                <div className="MTS-header-logo-container">
                    <img src={logo} alt="logo" className="MTS-header-logo-img" />
                </div>
                <div className="MTS-header-divider"></div>
                <div className="MTS-header-heading-container">
                    {path &&
                        <div className="MTS-header-breadcrumb">
                            {path}
                        </div>
                    }
                    <div className="MTS-header-heading">
                        {title}
                    </div>
                </div>
                <div className="MTS-header-menu-container">
                    {createSurvey && <div className="MTS-create-survey-button">
                        <MTSButton type="Filled" fontStyle="bold" title="+ Create Survey" size="md"/>
                        </div>
                        }
                    <div className="MTS-header-menu-container-icon" onClick={showMenu}>
                        <img src={profile} alt="user-icon" className="MTS-header-menu-img" />
                        <div className="MTS-header-menu-user-name">John Doe</div>
                        <img src={down} alt="down" className={menu ? "MTS-header-menu-icon MTS-header-menu-icon-rotate " : 'MTS-header-menu-icon '} />
                    </div>
                    <div className="MTS-header-mobile-button" onClick={showMenu}>
                        <img src={bars} alt="bars" className="MTS-header-mobile-button-img" />
                    </div>
                    <div className={menu ? "MTS-header-menu-drop MTS-header-menu" : "MTS-header-menu-hide MTS-header-menu"} >
                        <div className="MTS-header-menu-header">
                            <div className="MTS-header-menu-header-text">
                                Menu
                            </div>
                            <div className="MTS-header-menu-header-icon" onClick={showMenu}>
                                <img src={cross} alt="cross" className="MTS-header-menu-header-icon-img" />
                            </div>
                        </div>
                        <div className="MTS-header-menu-item-container">
                            <div className="MTS-header-menu-item-top">
                            <div className="MTS-header-menu-item">
                                <div className="MTS-header-menu-item-icon">
                                    <img src={user} alt="User" className="MTS-header-menu-item-icon-img" />
                                </div>
                                <Link to="/user/profile" className="text-dec-none">
                                <div className="MTS-header-menu-item-name">Profile</div>
                                </Link>
                            </div>
                            <div className="MTS-header-menu-item">
                                <div className="MTS-header-menu-item-icon">
                                    <img src={currency} alt="User" className="MTS-header-menu-item-icon-img" />

                                </div>
                                <div className="MTS-header-menu-item-name">Billing</div>
                                <div className="MTS-header-menu-item-price">$ 256</div>
                            </div>
                            </div>
                            <div className="MTS-header-menu-item MTS-header-menu-item-last">
                                <div className="MTS-header-menu-item-icon MTS-header-menu-item-icon-img-last">
                                    <img src={Logout} alt="User" className="MTS-header-menu-item-icon-img MTS-header-menu-item-icon-img-last " />

                                </div>
                                <div className="MTS-header-menu-item-name">Log out</div>
                                <div className="MTS-header-menu-item-icon MTS-header-menu-item-icon-img-last-red">
                                    <img src={Logoutred} alt="User" className="MTS-header-menu-item-icon-img" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            :
            <Header title={title} />
            }
        </header>
    );
};
export default MTSHeader;
MTSHeader.defaultProps = {
    auth:true,    
}