import React, { Component } from 'react';

import styles from './Todo.sass'

class Todo extends Component {
    handleToggle = () => {
        this.props.onToggle(this.props.id);
    };

    render() {
        const {
            text,
            completed,
            onToggle
        } = this.props;

        return (
            <div
                style={completed ? {backgroundColor: 'orange'} : {backgroundColor: 'firebrick'}}
                onClick={this.handleToggle}
            >
                {text}
            </div>
        );
    }
}

export default Todo;