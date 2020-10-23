import React, {Component}  from 'react';
import { Link } from 'react-router-dom';

export class HomeServices extends Component {
    static displayName = HomeServices.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
  }

  render() {
      return(
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <section id="services">
                <h6 className="heading font-x3">Dui aliquam erat volutpat</h6>
                <p className="btmspace-80 bold">Suspendisse porta ligula non elementum ultricies justo urna egestas metus ut ornare leo augue pharetra risus.</p>
                <ul className="nospace group">
                    <li className="one_quarter">
                    <article><i className="fas fa-door-open fa-4x"></i>
                        <h6 className="heading">Morbi tincidunt</h6>
                        <p>Massa ac vestibulum rutrum orci augue iaculis nibh quis porta nunc nisi suscipit leo fusce accumsan volutpat dui donec molestie.</p>
                        <footer><Link className="btn" to="#">See Details</Link></footer>
                    </article>
                    </li>
                    <li className="one_quarter">
                    <article><i className="fas fa-dove fa-4x"></i>
                        <h6 className="heading">Arcu quis neque</h6>
                        <p>Integer pretium erat rhoncus ipsum nam nunc ut aliquam tristique metus integer sagittis vestibulum suscipit justo et leo curabitur.</p>
                        <footer><Link className="btn" to="#">See Details</Link></footer>
                    </article>
                    </li>
                    <li className="one_quarter">
                    <article><i className="fas fa-marker fa-4x"></i>
                        <h6 className="heading">Risus accumsan</h6>
                        <p>Ligula vitae magna vestibulum congue erat eu turpis nulla libero phasellus pharetra justo eu iaculis auctor erat sapien viverra.</p>
                        <footer><Link className="btn" to="#">See Details</Link></footer>
                    </article>
                    </li>
                    <li className="one_quarter">
                    <article><i className="fas fa-ribbon fa-4x"></i>
                        <h6 className="heading">Arcu eget iaculis</h6>
                        <p>Dui augue vitae arcu in nec orci vel odio vulputate sagittis nullam augue tortor rhoncus sed dictum vitae viverra posuere lorem.</p>
                        <footer><Link className="btn" to="#">See Details</Link></footer>
                    </article>
                    </li>
                </ul>
                </section>
                <div className="clear"></div>
            </main>
        </div>
      );
  }
}