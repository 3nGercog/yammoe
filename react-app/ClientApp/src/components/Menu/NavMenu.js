import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs'
import './NavMenu.css';


const routes = {
  '/': 'Home',
  '/pages': 'Pages',
  '/counter': 'Counter',
  '/fetch-data': 'Fetch Data'
};


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      phone: "+00 (123) 456 7890",
      isHomePage: window.location.pathname === '/'
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed,
      isHomePage: window.location.pathname === '/'
    });
  }

  render () {
    return (
        <div className="bgded overlay" >
          <div className="wrapper row0">
            <div id="topbar" className="hoc clear"> 
              <p className="fl_left nospace"><i className="fas fa-phone"></i> {this.state.phone}</p>
              <p className="fl_right nospace"><Link className="btn" to="#">Get A Quote</Link></p>
            </div>
          </div>

          <div className="wrapper row1">
            <header id="header" className="hoc clear">
              <div id="logo" className="fl_left"> 
                <h1><NavbarBrand tag={Link} to="/">Yammoe</NavbarBrand></h1>
              </div>
              <Navbar id="mainav" className="fl_right">
                <ul className="clear">
                  <NavItem>
                    <NavLink className="drop" tag={Link} to="#">Pages</NavLink>
                    <ul>
                      <NavItem>
                        <NavLink tag={Link} to="pages/gallery">Gallery</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="pages/full-width">Full Width</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="pages/sidebar-left">Sidebar Left</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="pages/sidebar-right">Sidebar Right</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="pages/basic-grid">Basic Grid</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="pages/font-icons">Font Icons</NavLink>
                      </NavItem>
                    </ul>
                  </NavItem>
                  <NavItem>
                    <NavLink className="drop" tag={Link} to="#">Dropdown</NavLink>
                    <ul>
                      <NavItem>
                        <NavLink tag={Link} to="#">Level 2</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="drop" tag={Link} to="#">Level 2 + Drop</NavLink>
                        <ul>
                          <NavItem>
                            <NavLink tag={Link} to="#">Level 3</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink tag={Link} to="#">Level 3</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink tag={Link} to="#">Level 3</NavLink>
                          </NavItem>
                        </ul>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="#">Level 2</NavLink>
                      </NavItem>
                    </ul>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="#">Link Text</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/counter">Counter</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/fetch-data">Fetch Data</NavLink>
                  </NavItem>
                </ul>
              </Navbar>
            </header>
          </div>
          
          <div id="pageintro" className={this.state.isHomePage ? "hoc clear" : "dn"}> 
            <article>
              <p>Habitant morbi tristique</p>
              <h3 className="heading">Senectus et netus</h3>
              <p>Et malesuada fames ac turpis egestas duis rutrum eros ut sapien in hac habitasse platea dictumst aliquam venenatis leo et orci ut pretium odio eu nisi nulla at.</p>
              <footer>
                <ul className="nospace inline pushright">
                  <li><Link tag={Link} className="btn" to="#">Egestas</Link></li>
                  <li><Link tag={Link} className="btn inverse" to="#">Tristique</Link></li>
                </ul>
              </footer>
            </article>
          </div>
          
          <Breadcrumbs 
            WrapperComponent={(props) => <div id="breadcrumb" className="hoc cleat"><ul>{props.children}</ul></div>}
            ActiveLinkComponent={(props) => <li><a href="#">{props.children}</a></li>}
            LinkComponent={(props) => <li>{props.children}</li>} 
            mappedRoutes={routes} 
            routeMatcherRegex="([\w-]+)"/>
        </div>
    );
  }
}
