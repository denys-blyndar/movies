import './custom-button.sass';

import { object, func, string, bool } from 'prop-types';

const CustomButton = (props) => {
  const { button, type, text, onClick, disabled } = props;

  return (
    <button className="custom-button" type={type} onClick={onClick} disabled={disabled} {...button}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  button: object,
  type: string,
  text: string,
  onClick: func,
  disabled: bool,
};

export default CustomButton;
