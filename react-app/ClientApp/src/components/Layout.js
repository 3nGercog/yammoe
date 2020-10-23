import React, { Component } from 'react';
import { NavMenu } from './Menu/NavMenu';
import { Footer } from './Footer';
import { BackTop } from './BackTop';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        {this.props.children}
        <Footer />
        <BackTop />
      </div>
    );
  }
}
