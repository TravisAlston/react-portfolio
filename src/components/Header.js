import React, { Component } from 'react';
export default class Header extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show Navigation</a>
                        <a className="mobile-btn" href="#" title="Hide Navigation">Hide Navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}.</h1>
                            <h2 style={{color: '#fff', fontFamily: 'sans-serif'}}>{resumeData.role}.</h2>
                            <h3 style={{color: '#fff', fontFamily: 'sans-serif'}}>{resumeData.roleDescription}</h3>
                            <hr/>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><img src={item.imgurl} alt="socials" className="social-links"/></a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}