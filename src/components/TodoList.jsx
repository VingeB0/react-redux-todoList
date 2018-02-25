import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions'

import Todo from './Todo.jsx'
import styles from './Todo.sass'

class TodoList extends Component {
    render() {
        // console.log(this.props.toggleTodo);
        console.log(this.props.toggleTodo);
        return (
            <div className="base">
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onToggle={this.props.toggleTodo}
                        />
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return  todos;
        case 'SHOW_COMPLETED':
            return  todos.filter(todo => todo.completed);
        case 'SHOW_NEW':
            return  todos.filter(todo => !todo.completed);
    }
}

export default connect(mapStateToProps, {toggleTodo})(TodoList);