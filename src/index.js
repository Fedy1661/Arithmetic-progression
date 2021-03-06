import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
