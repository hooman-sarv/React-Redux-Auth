import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';

// setup backend
import { Backend } from './helpers';
Backend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);