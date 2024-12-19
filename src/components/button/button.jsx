import './button.sass';

import { string, func } from 'prop-types';

const Button = ({ text, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string,
  onClick: func,
};

export default Button;
