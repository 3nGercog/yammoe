import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BackTop extends Component{
    static displayName = BackTop.name;

    constructor(props) {
        super(props);
        this.state = { position: document.documentElement.scrollTop };
  }

    scrollToTop() {
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <Link id="backtotop" to={'#/'} onClick={this.scrollToTop}><i className="fas fa-chevron-up" aria-hidden="true"></i></Link>
        );
    }
}