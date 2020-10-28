import React, { Component } from 'react';
import { ExampleContent } from './ExampleContent';
import { Sidebar } from './Sidebar';

export class SidebarRight extends Component{
    static displayName = SidebarRight.name;

    render() {
        return (
            <div class="wrapper row3">
            <main class="hoc container clear">
                    <ExampleContent className="three_quarter first" />
                    <Sidebar className="one_quarter" />
                    <div className="clear"></div>
            </main>
            </div>
        );
    }
}