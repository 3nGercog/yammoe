import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logoLeft from '../../images/imgl.gif';
import logoRight from '../../images/imgr.gif';
import avatar from '../../images/avatar.png';

export class ExampleContent extends Component{
    static displayName = ExampleContent.name;

    render() {
        return (
            <div className={classNames("content", this.props.className)}>
                <h1>&lt;h1&gt; to &lt;h6&gt; - Headline Colour and Size Are All The Same</h1>
                <img className="imgr borderedbox inspace-5" src={logoRight} alt=""/>
                <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p>Dapiensociis <Link to="#">temper donec auctortortis cumsan</Link> et curabitur condis lorem loborttis leo. Ipsumcommodo libero nunc at in velis tincidunt pellentum tincidunt vel lorem.</p>
                <img className="imgl borderedbox inspace-5" src={logoLeft} alt=""/>
                <p>This is Link W3C compliant free website template from <Link to="https://www.os-templates.com/" title="Free Website Templates">OS Templates</Link>. For full terms of use of this template please read our <Link to="https://www.os-templates.com/template-terms">website template licence</Link>.</p>
                <p>You can use and modify the template htmlFor both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more website templates visit our <Link to="https://www.os-templates.com/">free website templates</Link> section.</p>
                <p>Portortornec condimenterdum eget consectetuer condis consequam pretium pellus sed mauris enim. Puruselit mauris nulla hendimentesque elit semper nam Link sapien urna sempus.</p>
                <h1>Table(s)</h1>
                <div className="scrollable">
                    <table>
                    <thead>
                        <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><Link to="#">Value 1</Link></td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        </tr>
                        <tr>
                        <td>Value 5</td>
                        <td>Value 6</td>
                        <td>Value 7</td>
                        <td><Link to="#">Value 8</Link></td>
                        </tr>
                        <tr>
                        <td>Value 9</td>
                        <td>Value 10</td>
                        <td>Value 11</td>
                        <td>Value 12</td>
                        </tr>
                        <tr>
                        <td>Value 13</td>
                        <td><Link to="#">Value 14</Link></td>
                        <td>Value 15</td>
                        <td>Value 16</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div id="comments">
                        <h2>Comments</h2>
                        <ul>
                        <li>
                            <article>
                            <header>
                                <figure className="avatar"><img src={avatar} alt=""/></figure>
                                <address>
                                By <Link to="#">A Name</Link>
                                </address>
                                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                            </header>
                            <div className="comcont">
                                <p>This is an example of Link comment made on Link post. You can either edit the comment, delete the comment or reply to the comment. Use this as Link place to respond to the post or to share what you are thinking.</p>
                            </div>
                            </article>
                        </li>
                        <li>
                            <article>
                            <header>
                                <figure className="avatar"><img src={avatar} alt=""/></figure>
                                <address>
                                By <Link to="#">A Name</Link>
                                </address>
                                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                            </header>
                            <div className="comcont">
                                <p>This is an example of Link comment made on Link post. You can either edit the comment, delete the comment or reply to the comment. Use this as Link place to respond to the post or to share what you are thinking.</p>
                            </div>
                            </article>
                        </li>
                        <li>
                            <article>
                            <header>
                                <figure className="avatar"><img src={avatar} alt=""/></figure>
                                <address>
                                By <Link to="#">A Name</Link>
                                </address>
                                <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                            </header>
                            <div className="comcont">
                                <p>This is an example of Link comment made on Link post. You can either edit the comment, delete the comment or reply to the comment. Use this as Link place to respond to the post or to share what you are thinking.</p>
                            </div>
                            </article>
                        </li>
                        </ul>
                        <h2>Write A Comment</h2>
                        <form action="#" method="post">
                        <div className="one_third first">
                            <label htmlFor="name">Name <span>*</span></label>
                            <input type="text" name="name" id="name" defaultValue="" size="22" required/>
                        </div>
                        <div className="one_third">
                            <label htmlFor="email">Mail <span>*</span></label>
                            <input type="email" name="email" id="email" defaultValue="" size="22" required/>
                        </div>
                        <div className="one_third">
                            <label htmlFor="url">Website</label>
                            <input type="url" name="url" id="url" defaultValue="" size="22"/>
                        </div>
                        <div className="block clear">
                            <label htmlFor="comment">Your Comment</label>
                            <textarea name="comment" id="comment" cols="25" rows="10"></textarea>
                        </div>
                        <div>
                            <input type="submit" name="submit" defaultValue="Submit Form"/>
                            &nbsp;
                            <input type="reset" name="reset" defaultValue="Reset Form"/>
                        </div>
                        </form>
                    </div>
            </div>
                    
        );
    }
}