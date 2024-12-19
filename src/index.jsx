import './main.sass';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/error-boundary';
import { store } from './store';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
);
