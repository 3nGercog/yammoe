import React, { Component } from 'react';
import './BasicGrid.css';

export class BasicGrid extends Component{
    static displayName = BasicGrid.name;

    render() {
        return (
            <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content"> 
                <h2>Half</h2>
                <div className="group btmspace-50 demo">
                    <div className="one_half first">1/2</div>
                    <div className="one_half">1/2</div>
                </div>
                <h2>Quarter</h2>
                <div className="group btmspace-50 demo">
                    <div className="one_quarter first">1/4</div>
                    <div className="one_quarter">1/4</div>
                    <div className="one_quarter">1/4</div>
                    <div className="one_quarter">1/4</div>
                </div>
                <div className="group btmspace-50 demo">
                    <div className="one_quarter first">1/4</div>
                    <div className="one_quarter">1/4</div>
                    <div className="two_quarter">2/4 or 1/2</div>
                </div>
                <div className="group btmspace-50 demo">
                    <div className="one_quarter first">1/4</div>
                    <div className="three_quarter">3/4</div>
                </div>
                <h2>Third</h2>
                <div className="group btmspace-50 demo">
                    <div className="one_third first">1/3</div>
                    <div className="one_third">1/3</div>
                    <div className="one_third">1/3</div>
                </div>
                <div className="group demo">
                    <div className="one_third first">1/3</div>
                    <div className="two_third">2/3</div>
                </div>
                </div>
                <div className="clear"></div>
            </main>
            </div>
        );
    }
}