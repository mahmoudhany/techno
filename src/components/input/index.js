import React from 'react';
import './Input.css';

const Input = ({
  value,
  name,
  placeholder,
  error,
  inputType,
  type,
  label,
  autoComplete,
  onChange,
}) => {
  const hasError = error !== null;
  let formGroup = null

  switch (inputType) {
    case 'text':
      formGroup = (
        <div className={`form-group mx-auto
         ${name === 'address' ? 'col-12 col-md-12 col-lg-12' : 'col-12 col-md-6 col-lg-6'} 
         ${hasError && 'hasError'}`}>
          <label className='label' htmlFor={name}>
            {
              hasError ? error : label
            }
          </label>
          <input
            className="form-control"
            id={name}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onChange={(e) =>
              onChange(e.target.value)}
          />
        </div>
      )
      break;
    default:
      break;
  }
  return (formGroup)
};

export default Input;
