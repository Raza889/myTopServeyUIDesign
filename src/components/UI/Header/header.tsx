import React from "react";
// import { Link } from 'react-router-dom'
import './style.scss';
import logo from 'Assets/Images/logoIcon.png';
import { Link } from "react-router-dom";
import { MTSButtonLinked } from 'components/UI/Button/index';


interface HeaderProps {
  title: string,
}

const MTSHeader: React.SFC<HeaderProps> = ({
  title
}) => {
  // let [menu, Setmenu] = useState<boolean>(false);
  // const showMenu = (Event: any) => Setmenu(menu = !menu);
  return (
    <div className="MTS-header-auth-container">
      <div className="MTS-header-auth-logo-container">
        <img src={logo} alt="logo" className="MTS-header-auth-img" />
        <div className="MTS-header-auth-title">
          <h2>
           {title}
            </h2>
        </div>
      </div>
      <div className="MTS-header-auth-link-container">
        <div className="MTS-header-auth-link"><Link to="#" className="MTS-header-auth-link-a">About us</Link></div>
        <div className="MTS-header-auth-link"><Link to="#" className="MTS-header-auth-link-a">Blog</Link></div>
        <div className="MTS-header-auth-link"><Link to="#" className="MTS-header-auth-link-a">For Companies</Link></div>
      </div>
      <div className="MTS-header-auth-btn-link">
        <div className="MTS-header-auth-login-link">
          <Link to="/user/login" className="MTS-header-auth-login-btn">Login</Link>
        </div>
        <div className="MTS-header-auth-register-link">
          <MTSButtonLinked title="Register" to="#" />
        </div>
      </div>
    </div>
  );
};
export default MTSHeader;
