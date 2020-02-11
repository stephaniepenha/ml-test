import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import LoadingIcon from "../LoadingIcon";
import style from "./style.module.css";

const ButtonLabel = ({ label }) => {
  return label;
};

ButtonLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const Button = ({
  className,
  type,
  label,
  variant,
  onClick,
  disabled,
  bordered,
  loading,
  element: ButtonElement,
  ...rest
}) => {
  const buttonClassNames = classNames(style.button, style[variant], {
    [style.bordered]: bordered
  });

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {loading ? <LoadingIcon /> : null}
      {!loading && label ? <ButtonLabel label={label} /> : null}
    </ButtonElement>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  element: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  loading: PropTypes.bool
};

Button.defaultProps = {
  className: null,
  variant: "primary",
  label: null,
  type: null,
  element: "button",
  onClick: null,
  disabled: false,
  bordered: false,
  loading: false
};

export default Button;
