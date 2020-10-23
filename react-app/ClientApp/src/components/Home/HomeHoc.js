import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import borderbox from '../../images/480x300.png';

export class HomeHoc extends Component {
    static displayName = HomeHoc.name;

    render() {
        return (
            <div className="bgded overlay" >
                <section className="hoc container clear">
                    <div className="points group"> 
                        <div className="sectiontitle">
                            <p className="nospace font-xs">Etiam id augue in vestibulum</p>
                            <h6 className="heading font-x2">Turpis in tristique eleifend nulla</h6>
                        </div>
                        <figure className="one_half first">
                            <ul className="nospace clear">
                            <li><Link to="#"><i className="fab fa-fly"></i></Link>
                                <h6 className="heading">Ante fringilla nisl eu</h6>
                                <p>Gravida lorem ligula quis ligula pellentesque congue semper felis maecenas rutrum euismod nibh class aptent taciti.</p>
                            </li>
                            <li><Link to="#"><i className="fab fa-audible"></i></Link>
                                <h6 className="heading">Sociosqu ad litora torquent</h6>
                                <p>Per conubia nostra per inceptos himenaeos mauris lectus enim luctus vitae viverra a pharetra mollis diam aliquam.</p>
                            </li>
                            <li><Link to="#"><i className="fas fa-umbrella-beach"></i></Link>
                                <h6 className="heading">Tincidunt mi ut pede maecenas</h6>
                                <p>Nunc urna porttitor eget molestie a consequat at lectus duis eget pede vitae nunc vehicula pharetra donec.</p>
                            </li>
                            </ul>
                        </figure>
                        <div className="one_half">
                            <Link className="imgover" to="#"><img className="borderedbox inspace-10" src={borderbox} alt=""/></Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}