import './footer.sass';

import { Link } from 'react-router-dom';

import Logo from '../../icons/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <p className="footer-copy">© {new Date().getFullYear()} Denys Blyndar</p>
        <Link to="/license-agreement">
          <p className="footer__item">License</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
