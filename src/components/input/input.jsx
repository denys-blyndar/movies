import './input.sass';

import { forwardRef } from 'react';
import { string } from 'prop-types';

const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={`input-wrapper${error ? ' errors-container' : ''}`}>
      <input className="input" ref={ref} {...rest} />
      {error && <div className="validate-error">{error}</div>}
    </div>
  );
});

Input.propTypes = {
  type: string,
  name: string,
  placeholder: string,
  error: string,
};

Input.displayName = 'Input';

export default Input;
