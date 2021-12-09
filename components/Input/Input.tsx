import React from "react";

interface InputProps {
  wrapperClassName?: string;
  hasLabel: boolean;
  labelClassName?: string;
  labelTitle?: string;
  inputBoxClassName?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
  error?: any;
  errorMessageClassName?: string;
}

const Input = (props: InputProps) => {
  const {
    wrapperClassName,
    hasLabel,
    labelClassName,
    labelTitle,
    inputBoxClassName,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    errorMessageClassName,
  } = props;

  return (
    <div>
      <div className={wrapperClassName}>
        {hasLabel && (
          <label className={labelClassName} htmlFor={name}>
            {labelTitle}
          </label>
        )}

        <input
          className={inputBoxClassName}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e)}
        />
      </div>
      {error && <p className={errorMessageClassName}>{error}</p>}
    </div>
  );
};

export default Input;
