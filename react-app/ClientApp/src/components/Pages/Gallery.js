import React, { Component } from 'react';
import logo from '../../images/gallery/01.png';

export class Gallery extends Component {
    static displayName = Gallery.name;

    render() {
        return (
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content"> 
                    <div id="gallery">
                        <figure>
                        <header className="heading">Gallery Title Goes Here</header>
                        <ul className="nospace clear">
                            <li className="one_quarter first"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter first"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter first"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                            <li className="one_quarter"><a href="#"><img src={logo} alt=""/></a></li>
                        </ul>
                        <figcaption>Gallery Description Goes Here</figcaption>
                        </figure>
                    </div>
                    <nav className="pagination">
                        <ul>
                        <li><a href="#">&laquo; Previous</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">6</a></li>
                        <li className="current"><strong>7</strong></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">14</a></li>
                        <li><a href="#">15</a></li>
                        <li><a href="#">Next &raquo;</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        );
    }
}