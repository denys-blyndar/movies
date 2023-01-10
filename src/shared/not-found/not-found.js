import './not-found.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <header>404</header>
      <h2>The page you are looking for doesn&#39;t exist</h2>
      <Link to="/">
        <p>Go to the main page</p>
      </Link>
    </div>
  );
};

export default NotFound;
