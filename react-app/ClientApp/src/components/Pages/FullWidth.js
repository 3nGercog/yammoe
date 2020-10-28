import React, { Component } from 'react';
import { ExampleContent } from './ExampleContent';  

export class FullWidth extends Component {
    static displayName = FullWidth.name;

    render() {
        return (
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <ExampleContent/>
                    <div className="clear"></div>
                </main>
            </div>
        );
    }
}