import './textarea.sass';

import { forwardRef } from 'react';
import { string } from 'prop-types';

const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={`textarea-wrapper${error ? ' errors-container' : ''}`}>
      <textarea className="textarea" ref={ref} {...rest} />
      {error && <div className="validate-error">{error}</div>}
    </div>
  );
});

TextArea.propTypes = {
  name: string,
  placeholder: string,
  error: string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
