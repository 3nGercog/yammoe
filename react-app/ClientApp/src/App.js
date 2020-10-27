import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { BasicGrid } from './components/Pages/BasicGrid';
import { Gallery } from './components/Pages/Gallery';

import './layout.css'


export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    var topEl = document.getElementById('backtotop');
    var top = document.documentElement.scrollTop;
    if(top > 150){
        topEl.setAttribute('class','visible');
    }
    else{
        topEl.classList.remove('visible');
  }
};

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/pages/basic-grid' component={BasicGrid} />
        <Route path="/pages/gallery" component={Gallery} />
      </Layout>
    );
  }
}
