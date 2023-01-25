import './custom-button.css';

import React from 'react';
import { func, string, bool } from 'prop-types';

// TODO: Make props pass to `button` with ...rest operator
// TODO: Read about rest/spread operators. Understand difference between them.
const CustomButton = ({ type, text, onClick, disabled }) => {
  return (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  type: string,
  text: string,
  onClick: func,
  disabled: bool,
};

export default CustomButton;
