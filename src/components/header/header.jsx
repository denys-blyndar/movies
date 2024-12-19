import './header.sass';

import { Link } from 'react-router-dom';

import Logo from '../../icons/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <div className="logo">
            <Logo />
            <p className="logo__title">Movies Storage</p>
          </div>
        </Link>
        <Link to="/add-movie">
          <p className="header__item">Add movie</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
