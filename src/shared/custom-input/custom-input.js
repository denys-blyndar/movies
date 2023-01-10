import './custom-input.css';

import React from 'react';
import { object, func, string } from 'prop-types';

const CustomInput = (props) => {
  const { input, type, value, name, placeholder, onChange, meta: { touched, error } = {} } = props;

  const className = `input-wrapper${touched && error ? ' errors-container' : ''}`;

  return (
    <div className={className}>
      <input
        className="custom-input"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...input}
      />
      {touched && error && <div className="validate-error">{error}</div>}
    </div>
  );
};

CustomInput.propTypes = {
  input: object,
  type: string,
  value: string,
  name: string,
  placeholder: string,
  onChange: func,
  meta: object,
};

export default CustomInput;
