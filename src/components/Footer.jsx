import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx'

import styles from './Footer.sass'

class Footer extends Component {
    render() {
        return(
            <div className={styles.root}>
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                <FilterLink filter="SHOW_NEW">New</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </div>
        )
    }
}

export default Footer;