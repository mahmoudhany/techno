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
<<<<<<< HEAD
  className
=======
>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
}) => {
  const hasError = error !== null;
  let formGroup = null

  switch (inputType) {
    case 'text':
      formGroup = (
<<<<<<< HEAD
        <div className={`form-group mx-auto ${className} ${hasError && 'hasError'}`}>
=======
        <div className={`form-group mx-auto
         ${name === 'address' ? 'col-12 col-md-12 col-lg-12' : 'col-12 col-md-6 col-lg-6'} 
         ${hasError && 'hasError'}`}>
>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
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
