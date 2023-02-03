import './main.sass';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './shared/error-boundary';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
