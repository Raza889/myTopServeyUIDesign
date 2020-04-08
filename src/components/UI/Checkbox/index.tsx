import React from "react"
import './style.scss';

interface InputProps {
  value: boolean,
  label: string,
  onChange?: any,
}
interface checkboxProps {
  value: boolean,
  label: string,
  onChange?: any,
  name:string,
  disabled?:boolean,
  className?:string,
  labelClass?:string,
}

export const MTSCheckbox: React.SFC<checkboxProps> = ({
  value,
  onChange,
  label,
  name,
  disabled,
  labelClass
}) => {
  const onChangeCheck=(e:any)=>{
    if(onChange){
      onChange(e)
    }
  }
  return (
    <div className="MTS-container">
    <label htmlFor={name}>
      <div className="MTS-checkbox-container">
      <input type="checkbox" disabled={disabled} name={name} id={name} onChange={(e)=>onChangeCheck(e)} checked={value} className="MTS-input-hidden"/>

      <div className="MTS-checkbox-box">
      </div>
      <div className={`MTS-checkbox-label ${labelClass}`}>
        {label}
      </div>
      </div>
    </label>
    </div>
  );
};

export const MTSRadioButton: React.SFC<checkboxProps> = ({
  value,
  onChange,
  label,
  name,
  disabled
}) => {
  const onChangeCheck=(e:any)=>{
    if(onChange){
      onChange(e)
    }
  }
  return (
    <div className="MTS-container">
    <label htmlFor={name}>
      <div className="MTS-checkbox-container">
      <input type="checkbox" disabled={disabled} name={name} id={name} onChange={(e)=>onChangeCheck(e)} checked={value} className="MTS-input-hidden"/>

      <div className="MTS-radio-button">
      </div>
      <div className="MTS-checkbox-label">
        {label}
      </div>
      </div>
    </label>
    </div>
  );
};

export const MTSSwitch: React.SFC<checkboxProps> = ({
  value,
  onChange,
  label,
  className,
  name,
  disabled
}) => {
  const onChangeCheck=(e:any)=>{
    if(onChange){
      onChange(e)
    }
  }
  return (
    <div className={`MTS-container ${className}`} >
    <label htmlFor={name}>
      <div className="MTS-switch-container">
      <input type="checkbox" disabled={disabled} name={name} id={name} onChange={(e)=>onChangeCheck(e)} checked={value} className="MTS-input-hidden"/>

      <div className="MTS-switch-box">
      </div>
      
      </div>
    </label>
    </div>
  );
};
