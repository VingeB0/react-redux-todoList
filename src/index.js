import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './index.sass';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
