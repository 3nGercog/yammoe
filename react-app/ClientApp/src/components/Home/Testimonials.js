import React, { Component } from 'react';

import logo from '../../images/100x100.png';

export class Testimonials extends Component{
    static displayName = Testimonials.name;

    render() {
        return (
            <div className="bgded overlay">
                <section id="testimonials" className="hoc container clear"> 
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Sed libero className aptent taciti</p>
                        <h6 className="heading font-x2">Sociosqu ad litora torquent per</h6>
                    </div>
                    <article className="one_half first">
                        <figure className="clear"><img src={logo} alt="logo"/>
                            <figcaption>
                                <h6 className="heading">E. Doe</h6>
                                <em>Conubia nostra per inceptos</em>
                            </figcaption>
                        </figure>
                        <blockquote>Himenaeos curabitur feugiat etiam in enim sed felis interdum lobortis phasellus nec eros ut arcu sollicitudin pellentesque curabitur porta justo vitae molestie semper ligula.</blockquote>
                    </article>
                    <article className="one_half">
                        <figure className="clear"><img src={logo} alt="logo"/>
                            <figcaption>
                                <h6 className="heading">F. Doe</h6>
                                <em>Neque euismod nisi non</em>
                            </figcaption>
                        </figure>
                        <blockquote>Suscipit sem ante quis tortor curabitur ornare justo ut lobortis pulvinar diam elit accumsan felis non suscipit nunc erat sed justo etiam luctus imperdiet mauris donec id sapien.</blockquote>
                    </article>
                </section>
            </div>
        );
    }
}