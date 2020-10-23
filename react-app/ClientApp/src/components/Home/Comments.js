import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/348x400.png';

export class Comments extends Component{
    static displayName = Comments.name;

    render() {
        return (
             <div className="wrapper row2">
                <section className="hoc container clear"> 
                    <div className="sectiontitle">
                    <p className="nospace font-xs">Quam ut mi sed suscipit pede</p>
                    <h6 className="heading font-x2">Quis turpis vivamus pharetra ornare</h6>
                    </div>
                    <ul className="nospace group team sd-third">
                    <li className="one_quarter first">
                        <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                        <figcaption><strong>A. Doe</strong> <em>Consectetuer neque dui</em></figcaption>
                        </figure>
                    </li>
                    <li className="one_quarter">
                        <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                        <figcaption><strong>B. Doe</strong> <em>Eros vivamus malesuada</em></figcaption>
                        </figure>
                    </li>
                    <li className="one_quarter">
                        <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                        <figcaption><strong>C. Doe</strong> <em>Aliquam malesuada rutrum</em></figcaption>
                        </figure>
                    </li>
                    <li className="one_quarter">
                        <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                        <figcaption><strong>D. Doe</strong> <em>Augue quisque consectetuer</em></figcaption>
                        </figure>
                    </li>
                    </ul>
                </section>
            </div>
        );
    }
}