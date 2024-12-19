import { useState, useEffect } from 'react';
import { object } from 'prop-types';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleError = () => setError(true);
    window.addEventListener('error', handleError);

    return () => window.removeEventListener('error', handleError);
  }, [error]);

  if (error) {
    return (
      <div className="error-boundary">
        <p className="error-boundary__message">Something went wrong!</p>
      </div>
    );
  }

  return children;
};

ErrorBoundary.propTypes = {
  children: object,
};

export default ErrorBoundary;
