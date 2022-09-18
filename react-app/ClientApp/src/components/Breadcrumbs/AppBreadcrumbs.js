import React, { Component } from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs'


const routes = {
  '/': 'Home',
  '/pages/basic-grid': 'Basic Grid',
  '/pages/gallery': 'Gallery',
  '/pages/full-width': 'Full Width',
  '/pages/sidebar-left': 'Sidebar Left',
  '/pages/sidebar-right': 'Sidebar Right',
  '/pages/font-icons': 'Font Icon',
  '/pages/map': 'Map',
  '/counter': 'Counter',
  '/fetch-data': 'Fetch Data'
};

export class AppBreadcrumbs extends Component {
    static displayName = AppBreadcrumbs.name;

    render() {

        return (
            <Breadcrumbs 
                WrapperComponent={(props) => <div id="breadcrumb" className="hoc cleat"><ul>{props.children}</ul></div>}
                ActiveLinkComponent={(props) => <li><a href={window.location.pathname}>{props.children}</a></li>}
                LinkComponent={(props) => <li>{props.children}</li>} 
                mappedRoutes={routes} 
                routeMatcherRegex="([\w-]+)"/>
        );
    }
}