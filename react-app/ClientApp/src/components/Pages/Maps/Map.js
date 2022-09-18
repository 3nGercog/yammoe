import React, {Component} from 'react';
import "./jsvectormap.css";
import "./jsvectormap.js";
import "./world.js";
import "./world-merc.js";

export class Map extends Component {
    static displayName = Map.name;

    componentDidMount() {
        new jsVectorMap({
            map: 'world',
            selector: '#map'
        });
    }

    render() {
        return (
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content">
                        <div id="map"></div>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>       
        );
    }
}