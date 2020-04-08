import React from "react";
import down from 'Assets/Images/down.png';
import './style.scss';
interface InputProps {
    name?: string,
    value?: any,

    label: string,
    labelClass?: string,
    inputClass?: string,
    onChange?: any,
    disabled?: boolean,
    required?: boolean,
    errorMessage?: string,
    onFocus?: any,
    onBlur?: any,
    containerClass?: string,
    options: any,
}
const MTSSelect: React.SFC<InputProps> = ({
    value,
    name,
    label,
    inputClass,
    onChange,
    disabled,
    required,
    onFocus,
    onBlur,
    containerClass,
    options
}) => {
    return (

        <div className={`MTS-input-container ${containerClass}`}>
            <div>
                <select
                    className={`MTS-input MTS-select ${inputClass} `}
                    onChange={(e)=>onChange(e)}
                    name={name}
                    disabled={disabled}
                    required={required}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    id={name}
                >
                    <option value={label} disabled >{label}</option>
                    {options && options.map((option: any) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
                <div className="MTS-select-symbol">
                    <img src={down} alt="^" />
                </div>
                <label htmlFor={name} className={`MTS-label `}> {name}</label>

            </div>
        </div>
    );
};

MTSSelect.defaultProps = {
    name: "Guest User",
    value: "",
    labelClass: "",
    inputClass: "",
    disabled: false,
    errorMessage: 'required',
}

export default MTSSelect
