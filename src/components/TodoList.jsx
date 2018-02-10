import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions'

import Todo from './Todo.jsx'
import styles from './Todo.sass'

class TodoList extends Component {
    render() {
        console.log(this.props.todo);
        console.log(this.props.toggleTodo);
        // console.log(this.props);
        return (
            <div className="base">
                {
                    this.props.todo.map(todo =>
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

const mapStateToProps = state => ({todo: state});

export default connect(mapStateToProps, {toggleTodo})(TodoList);