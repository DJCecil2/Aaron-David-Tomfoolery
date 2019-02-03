module.exports = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.container';
import { register } from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

register();
`;
