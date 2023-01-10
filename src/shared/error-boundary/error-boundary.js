import React, { Component } from 'react';
import { object } from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <p className="error-boundary__message">Something went wrong!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: object,
};

export default ErrorBoundary;
