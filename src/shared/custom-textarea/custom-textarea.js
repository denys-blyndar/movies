import './custom-textarea.sass';

import { object, string } from 'prop-types';

const CustomTextArea = (props) => {
  const { input, name, placeholder, meta: { touched, error } = {} } = props;

  const className = `textarea-wrapper${touched && error ? ' errors-container' : ''}`;

  return (
    <div className={className}>
      <textarea className="custom-textarea" name={name} placeholder={placeholder} {...input} />
      {touched && error && <div className="validate-error">{error}</div>}
    </div>
  );
};

CustomTextArea.propTypes = {
  input: object,
  name: string,
  placeholder: string,
  meta: object,
};

export default CustomTextArea;
