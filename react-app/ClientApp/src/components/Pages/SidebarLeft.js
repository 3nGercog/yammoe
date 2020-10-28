import React, { Component } from 'react';
import { Sidebar } from './Sidebar';
import { ExampleContent } from './ExampleContent';


export class SidebarLeft extends Component{
    static displayName = SidebarLeft.name;

    render() {
        return (
            <div className="wrapper row3" >
                <main className="hoc container clear">
                    <Sidebar className="one_quarter first" />
                    <ExampleContent className="three_quarter" />
                    <div className="clear"></div>
                </main>
            </div>
        );
    }
}