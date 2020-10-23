import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/348x261.png';

export class Posts extends Component {
    static displayName = Posts.name;

    render() {
        return (
            <div className="wrapper row2">
                <section className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Phasellus eget sem quis elit</p>
                        <h6 className="heading font-x2">Ultricies porta donec imperdiet</h6>
                    </div>
                    <ul id="latest" className="nospace group sd-third">
                        <li className="one_third first">
                            <article>
                                <h6 className="heading">Nisl nullam odio justo pharetra</h6>
                                <ul className="nospace meta clear">
                                    <li><i className="fas fa-user"></i> <Link to="#">Admin</Link></li>
                                    <li>
                                    <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
                                    </li>
                                </ul>
                                <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                                    <figcaption>
                                        <p>Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae</p>
                                        <footer><Link className="btn" to="#">Read More</Link></footer>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li className="one_third">
                            <article>
                                <h6 className="heading">Sapien aliquam vulputate massa</h6>
                                <ul className="nospace meta clear">
                                    <li><i className="fas fa-user"></i> <Link to="#">Admin</Link></li>
                                    <li>
                                    <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                                    </li>
                                </ul>
                                <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                                    <figcaption>
                                        <p>Sed varius fringilla dolor metus iaculis odio ac scelerisque nibh velit sagittis tellus nulla</p>
                                        <footer><Link className="btn" to="#">Read More</Link></footer>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                        <li className="one_third">
                        <article>
                            <h6 className="heading">Facilisi phasellus eu lacus</h6>
                            <ul className="nospace meta clear">
                                <li><i className="fas fa-user"></i> <Link to="#">Admin</Link></li>
                                <li>
                                <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                                </li>
                            </ul>
                            <figure><Link className="imgover" to="#"><img src={logo} alt="logo"/></Link>
                                <figcaption>
                                    <p>Nulla facilisi integer adipiscing turpis cras quis neque at lectus tincidunt consectetuer</p>
                                    <footer><Link className="btn" to="#">Read More</Link></footer>
                                </figcaption>
                            </figure>
                        </article>
                    </li>
                    </ul>
                </section>
            </div>
        );
    }
}