import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FilterLink.sass'

import {setFilter} from "../actions";
import filter from "../reducers/filter";

class FilterLink extends Component {
    render() {
        const {
            active,
            children,
            onClick
        } = this.props;
        console.log(this.props)
        if (active) {
            return <span className={styles.active} style={{color: 'red'}}>{children}</span>
        }

        return <span className={styles.root} onClick={onClick} style={{color: 'blue'}}>{children}</span>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    }
}