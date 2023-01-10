import './header.css';

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../icons/logo.svg';

const Header = () => {
  const data = [
    {
      value: 'Add movie',
      link: '/add-movie',
    },
    {
      value: 'Import movies',
      link: '/import-movies',
    },
  ];

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <div className="logo">
            <Logo />
            <p className="logo__title">Movies</p>
          </div>
        </Link>
        <div className="nav">
          <ul className="nav__list">
            {data.map(({ value, link }, i) => {
              return (
                <li key={i} className="nav__list__item">
                  <Link to={link}>{value}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
