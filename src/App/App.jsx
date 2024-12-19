import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from '../components/layout';
import Home from '../pages/home';
import AddMovie from '../pages/add-movie';
import License from '../pages/license';
import NotFound from '../pages/not-found';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/license-agreement" element={<License />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" />
    </Router>
  );
}
