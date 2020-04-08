import React, { useState } from "react"
import './style.scss';

interface InputProps {
  name?: string,
  value?: string,
  label: string,
  labelClass?: string,
  inputClass?: string,
  onChange?: any,
  disabled?: boolean,
  required?: boolean,
  onFocus?: any,
  onBlur?: any,
  showPassword?: any;
}

const PasswordInput: React.SFC<InputProps> = ({
  name,
  value,
  label,
  labelClass,
  inputClass,
  disabled,
  required,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [strength, setStrenth] = useState<string>('');
  const [passType, setPassType] = useState<string>('password');

  const strengthType = (length: number): string => {
    if (length === 0) return ''
    if (length <= 5 && length > 0) return 'basic'
    if (length <= 8 && length > 5) return 'low'
    if (length <= 12 && length > 8) return 'medium'
    if (length >= 12) return 'high'
    return ''
  }

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setStrenth(strengthType(e.target.value.length))
  }

  const onPasswordFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
    setStrenth(strengthType(e.target.value.length))
  }

  const showPass = (e: any) => {
    setPassType(passType === "password" ? "text" : "password")
  }

  return (
    <div className="MTS-password-input-container">
      <input
        className={`MTS-password-input ${inputClass} `}
        value={value}
        onChange={onPassChange}
        type={passType}
        name={name}
        disabled={disabled}
        required={required}
        placeholder={label}
        onFocus={onPasswordFocus}
      />
      <label htmlFor={name} className={`MTS-password-label ${labelClass}`}>{label}</label>
      <div className={passType === 'password' ? "MTS-password-hide" : "MTS-password-show"} onClick={showPass}></div>
      <div className={`MTS-password-strength MTS-password-${strength}`}>
      </div>
    </div>
  )
}

export default PasswordInput
