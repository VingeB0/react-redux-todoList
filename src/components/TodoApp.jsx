import React, {Component} from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

import styles from './TodoApp.sass'

class TodoApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>
                        Simple React/Redux To Do
                    </h2>

                    <div className={styles.app}>
                        <AddTodo/>
                        <TodoList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;
