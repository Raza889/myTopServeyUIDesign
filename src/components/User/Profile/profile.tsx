import React from 'react';
import MTSButton from 'components/UI/Button/index'

interface ProfileProps {
    showModelPassword:any,
    showModelEmail:any,
}
const Billing: React.SFC<ProfileProps> =({
    showModelPassword,
    showModelEmail
})=>{
    return(
        <div className="MTS-profile-tab-content-1 MTS-profile-content-active">
        <div className="MTS-profile-body">
            <div className="MTS-profile-row">
                <div className="MTS-profile-item MTS-profile-item-1">
                    <div className="MTS-profile-item-header">
                        Member since 24/06/2017
                    </div>
                    <div className="MTS-profile-item-text">
                        John Doe
                    </div>

                </div>
                <div className="MTS-profile-item MTS-profile-item-2">
                    <div className="MTS-profile-item-header">
                        Earned
                    </div>
                    <div className="MTS-profile-item-text">
                        $120
                    </div>
                </div>
                <div className="MTS-profile-item MTS-profile-item-3">

                    <div className="MTS-profile-item-header">
                        Participated in
                    </div>
                    <div className="MTS-profile-item-text">
                        20 surveys
                    </div>
                </div>
            </div>
        </div>
        <div className="MTS-profile-footer">
            <div className="profile-footer-right">
                <div className="profile-footer-right-right">
                    <div className="profile-footer-text">
                        Email
                    </div>
                    <div className="profile-footer-value">
                        john.doe02@gmail.com
                    </div>
                </div>
                <div className="profile-footer-right-left">
                    <MTSButton title="Change Email" type="outline" size="md" onClick={showModelPassword} fontStyle="regular" />
                </div>
            </div>
            <div className="profile-footer-left">
                <div className="profile-footer-left-right">
                    <div className="profile-footer-text">
                        Password
                    </div>
                    <div className="profile-footer-value">
                        .............
                    </div>
                </div>
                <div className="profile-footer-left-left">
                    <MTSButton title="Change Password" onClick={showModelEmail} type="outline" size="md" fontStyle="regular" />
                </div>
            </div>
        </div>
    </div>
    )
} 
export default Billing;