import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions'

import styles from './AddTodo.sass'

const ENTER_KEY = 13;

class AddTodo extends Component {
    state = {
        text: ""
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY && e.target.value) {
            this.props.addTodo(this.state.text);
            this.setState({text: ''})
        }

    };

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What will be done?"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

export default connect(null, {addTodo})(AddTodo);