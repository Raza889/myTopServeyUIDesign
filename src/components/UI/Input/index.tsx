import React ,{ useState, useEffect } from "react"
import './style.scss';
import Calendar from 'react-calendar';
import moment from 'moment';

interface InputProps {
  name?: string,
  value?: any,
  type: string,
  label: string,
  labelClass?: string,
  inputClass?: string,
  onChange?: any,
  disabled?: boolean,
  required?: boolean,
  errorMessage?: string,
  onFocus?:any,
  onBlur?:any,
  containerClass?:string,
}
const MTSInput: React.SFC<InputProps> = ({
  value,
  type,
  name,
  label,
  labelClass,
  inputClass,
  onChange,
  disabled,
  required,
  errorMessage,
  onFocus,
  onBlur,
  containerClass,
}) => {
  let [picker,setPicker] = useState<boolean>(true);
  let [selectedDate, setSelectedDate] = useState<any>(new Date());

  const showPicker = (e: any) => {
    setPicker(picker = !picker);
  }

  useEffect(() => {
    setPicker(!picker);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate = moment(selectedDate).format('DD MMMM, YYYY')])

  return (
    
    <div className={`MTS-input-container ${containerClass}`}>
    { type === 'date' ?
    <div>
      <input
        className={`MTS-input ${inputClass} `}
        value={selectedDate}
        onChange={onChange}
        type="text"
        name={name}
        disabled={disabled}
        required={required}
        placeholder={label}
        onClick={showPicker}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {picker && 
      <Calendar 
      value={new Date(selectedDate)} 
      onChange={(date) => setSelectedDate(date)}
      next2Label=''
      prev2Label=''
      className='border-none'
      />}
      <div className="img-calender-icon" onClick={showPicker}>

      </div>
      <label htmlFor={name} className={`MTS-label ${labelClass}`}>{label}</label>
      <div className="MTS-error-text">
        {errorMessage}
      </div>
      </div>
      :
      <div>
      <input
      className={`MTS-input ${inputClass} `}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      disabled={disabled}
      required={required}
      placeholder={label}
      onFocus={onFocus}
      onBlur={onBlur}
    />

    <label htmlFor={name} className={`MTS-label ${labelClass}`}>{label}</label>
    <div className="MTS-error-text">
      {errorMessage}
    </div>
    </div>
  }
    </div>
  );
};

MTSInput.defaultProps = {
  name: "Guest User",
  value: "",
  labelClass: "",
  inputClass: "",
  type: 'text',
  disabled: false,
  errorMessage: 'required',
}

export default MTSInput
