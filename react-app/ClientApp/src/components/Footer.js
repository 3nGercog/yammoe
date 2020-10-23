import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/100x100.png';

export class Footer extends Component{
    static displayName = Footer.name;

    render() {
        return (
            <div className="bgded overlay"> 
                <div className="wrapper row4">
                    <footer id="footer" className="hoc clear">
                        <div className="group btmspace-50">
                            <div className="one_quarter first">
                                <h6 className="heading">Lorem proin volutpat</h6>
                                <p>Ligula quis sapien nam molestie massa quis pede maecenas quis lacus nunc sed lectus quis lectus tristique tincidunt sed varius nisl tincidunt lectus pellentesque sagittis mauris ut leo ullamcorper tortor morbi accumsan [<Link to="#">&hellip;</ Link>]</p>
                                <ul className="faico clear">
                                    <li><Link className="faicon-facebook" to="#"><i className="fab fa-facebook"></i></ Link></li>
                                    <li><Link className="faicon-google-plus" to="#"><i className="fab fa-google-plus-g"></i></ Link></li>
                                    <li><Link className="faicon-linkedin" to="#"><i className="fab fa-linkedin"></i></ Link></li>
                                    <li><Link className="faicon-twitter" to="#"><i className="fab fa-twitter"></i></ Link></li>
                                    <li><Link className="faicon-vk" to="#"><i className="fab fa-vk"></i></ Link></li>
                                </ul>
                            </div>
                            <div className="one_quarter">
                                <h6 className="heading">Nascetur ridiculus mus</h6>
                                <ul className="nospace linklist">
                                    <li><Link to="#">Aliquam eget leo praesent</ Link></li>
                                    <li><Link to="#">Vel urna nunc ultricies</ Link></li>
                                    <li><Link to="#">Faucibus nunc cum sociis</ Link></li>
                                    <li><Link to="#">Natoque penatibus et magnis</ Link></li>
                                    <li><Link to="#">Dis parturient montes</ Link></li>
                                </ul>
                            </div>
                            <div className="one_quarter">
                                <h6 className="heading">Vestibulum sed quam</h6>
                                <p className="nospace btmspace-15">Ante dapibus luctus sed quis diam vitae ipsum ultrices vehicula.</p>
                                <form action="#" method="post">
                                    <fieldset>
                                    <legend>Newsletter:</legend>
                                    <input className="btmspace-15" type="text" defaultValue="" placeholder="Name"/>
                                    <input className="btmspace-15" type="text" defaultValue="" placeholder="Email"/>
                                    <button className="btn" type="submit" defaultValue="submit">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="one_quarter">
                                <h6 className="heading">Aenean diam euismod</h6>
                                <ul className="nospace clear latestimg">
                                    <li><Link className="imgover" to="#"><img src={logo} alt="logo"/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                    <li><Link className="imgover" to="#"><img src={logo} alt=""/></ Link></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="btmspace-50" />
                        <nav>
                            <ul className="nospace">
                            <li><Link to="/"><i className="fas fa-lg fa-home"></i></ Link></li>
                            <li><Link to="#">About</ Link></li>
                            <li><Link to="#">Contact</ Link></li>
                            <li><Link to="#">Terms</ Link></li>
                            <li><Link to="#">Privacy</ Link></li>
                            <li><Link to="#">Cookies</ Link></li>
                            <li><Link to="#">Disclaimer</ Link></li>
                            </ul>
                        </nav>
                    </footer>
                </div>
                <div className="wrapper row5">
                    <div id="copyright" className="hoc clear"> 
                        <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <Link to="#">Domain Name</ Link></p>
                        <p className="fl_right">Template by <a target="_blank" rel="noopener noreferrer" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
                    </div>
                </div>
            </div>
        );
    }
}