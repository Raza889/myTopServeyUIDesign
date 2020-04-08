import React from 'react';
import './style.scss';
import Svg from 'Assets/Images/Sprite'
interface ModelProps {
    children: object,
    open: boolean,
    hide: any,
    className?:string,
}
interface ModelPartsProps {
    children: object,
}
export const MTSModel: React.SFC<ModelProps> = ({ open, children, hide,className }) => {
    return (
        <div className="MTS-popup">
            <div className={`MTS-popup-background ${open ? "MTS-popup-background-show" : "MTS-popup-background-hide"}`} onClick={hide} ></div>
            <div className={`MTS-popup-content ${open ? "MTS-popup-content-show" : "MTS-popup-content-hide"}`} >
                <div className={`${className} MTS-popup-content-container `}>
                    <div className="MTS-popup-cross-icon" onClick={hide}>
                        <Svg SvgName='cross-white' />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export const MTSModelHeader: React.SFC<ModelPartsProps> = ({ children }) => {
    return (
        <div className="MTS-popup-header-container">
            {children}
        </div>
    )
}
export const MTSModelBody: React.SFC<ModelPartsProps> = ({ children }) => {
    return (
        <div className="MTS-popup-body-container">
            {children}
        </div>
    )
}
export const MTSModelFooter: React.SFC<ModelPartsProps> = ({ children }) => {
    return (
        <div className="MTS-popup-Footer-container">
            {children}
        </div>
    )
}