import React, { Component } from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs'


const routes = {
  '/': 'Home',
  '/pages': 'Pages',
  '/counter': 'Counter',
  '/fetch-data': 'Fetch Data',
  '/pages/basic-grid': 'BASIC GRID',
  'pages/gallery': 'Gallery'
};

export class AppBreadcrumbs extends Component {
    static displayName = AppBreadcrumbs.name;

    render() {
        return (
            <Breadcrumbs 
                WrapperComponent={(props) => <div id="breadcrumb" className="hoc cleat"><ul>{props.children}</ul></div>}
                ActiveLinkComponent={(props) => <li><a>{props.children}</a></li>}
                LinkComponent={(props) => <li>{props.children}</li>} 
                mappedRoutes={routes} 
                routeMatcherRegex="([\w-]+)"/>
        );
    }
}