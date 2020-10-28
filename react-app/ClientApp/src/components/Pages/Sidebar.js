import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

export class Sidebar extends Component{
    static displayName = Sidebar.name;

    render() {
        return (
            <div className={classNames('sidebar', this.props.className)}>
                <h6>Lorem ipsum dolor</h6>
                <nav className="sdb_holder">
                    <ul>
                    <li><Link to="#">Navigation - Level 1</Link></li>
                    <li><Link to="#">Navigation - Level 1</Link>
                        <ul>
                        <li><Link to="#">Navigation - Level 2</Link></li>
                        <li><Link to="#">Navigation - Level 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Navigation - Level 1</Link>
                        <ul>
                        <li><Link to="#">Navigation - Level 2</Link></li>
                        <li><Link to="#">Navigation - Level 2</Link>
                            <ul>
                            <li><Link to="#">Navigation - Level 3</Link></li>
                            <li><Link to="#">Navigation - Level 3</Link></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><Link to="#">Navigation - Level 1</Link></li>
                    </ul>
                </nav>
                <div className="sdb_holder">
                    <h6>Lorem ipsum dolor</h6>
                    <address>
                    Full Name<br/>
                    Address Line 1<br/>
                    Address Line 2<br/>
                    Town/City<br/>
                    Postcode/Zip<br/>
                    <br/>
                    Tel: xxxx xxxx xxxxxx<br/>
                    Email: <Link to="#">contact@domain.com</Link>
                    </address>
                </div>
                <div className="sdb_holder">
                    <article>
                    <h6>Lorem ipsum dolor</h6>
                    <p>Nuncsed sed conseque Link at quismodo tris mauristibus sed habiturpiscinia sed.</p>
                    <ul>
                        <li><Link to="#">Lorem ipsum dolor sit</Link></li>
                        <li>Etiam vel sapien et</li>
                        <li><Link to="#">Etiam vel sapien et</Link></li>
                    </ul>
                    <p>Nuncsed sed conseque Link at quismodo tris mauristibus sed habiturpiscinia sed. Condimentumsantincidunt dui mattis magna intesque purus orci augue lor nibh.</p>
                    <p className="more"><Link to="#">Continue Reading &raquo;</Link></p>
                    </article>
                </div>
            </div>
        );
    }
}