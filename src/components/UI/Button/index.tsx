import React from "react";
import { Link } from "react-router-dom"
import './style.scss';

interface ButtonProps {
  title: string,
  style?: object,
  type?: string,
  fontStyle: string,
  className?: string,
  onSubmit?: any,
  size: string,
  disabled?: boolean,
  to?: string,
  icon?: string,
  onClick?: any,
}
interface ButtonLinkedProps {
  title: string,
  style?: object,
  type?: string,
  className?: string,
  onSubmit?: any,
  size?: string,
  disabled?: boolean,
  to: string,
  icon?: string,
  onClick?: any,
}

const MTSButton: React.SFC<ButtonProps> = ({
  title,
  style,
  type,
  fontStyle,
  className,
  size,
  disabled,
  to,
  onSubmit,
  icon,
  onClick
}) => (
    to ? <Link
      className={`MTSBtn-link-wrap ${className}`}
      to={to}>
      <button
        title={title}
        className={
          `MTSBtn ${type === "Filled" ? 'MTSFilled' : type === "Ghost" ? 'MTSghoot' : "MTSoutline"}
              ${fontStyle === "bold" ? "MTSbold" : "MTSregular"} MTS${size}`
        }
        disabled={disabled}
        onClick={onSubmit}
      >
        {title}
      </button>
    </Link>
      : <button
        style={style}
        className={
          `MTSBtn ${type === "Filled" ? 'MTSFilled' : type === "Ghost" ? 'MTSghoot' : "MTSoutline"}
        ${fontStyle === "bold" ? "MTSbold" : "MTSregular"} ${className} MTS${size}`
        }
        disabled={disabled}
        onClick={onClick}
        onSubmit={onSubmit}
      // type={"button"}
      >
        {title}
        {icon &&
          <div className={`MTS-button-icon MTS-icon${icon}`}> </div>
        }
      </button>
  )
export const MTSButtonLinked: React.SFC<ButtonLinkedProps> = ({
  title,
  to,
  className,
  type
}) => (
    <Link to={`${to}`} className={`MTS-button-linked ${className} MTS-button-linked-${type}`}>{title}</Link>
  )

MTSButton.defaultProps = {
  title: 'Submit', // This value is adopted when name prop is omitted.
  type: "outline",
  className: "MTSBtn-def",
  fontStyle: "regular",
  size: "md",
  disabled: false,
  style: {},
  onSubmit: ''
}

export default MTSButton
