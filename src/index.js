import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from './TodoApp';

// import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './index.sass';

ReactDOM.render(
    <Provider>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
