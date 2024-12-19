import './layout.sass';

import { object } from 'prop-types';

import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__children">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: object,
};

export default Layout;
