import React, { Component } from 'react';
import { HomeServices } from './HomeServices';
import { HomeHoc } from './HomeHoc';
import { Comments } from './Comments';
import { Testimonials } from './Testimonials';
import { Posts } from './Posts';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <HomeServices />
        <HomeHoc />
        <Comments />
        <Testimonials />
        <Posts />
      </div>
    );
  }
}
