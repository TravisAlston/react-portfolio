import React, { Component } from 'react';
export default class Footer extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="row">
                    <div className="twelve colums">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((items) => {
                                    return(
                                        <li>
                                            <a href={items.url}>
                                            <i className={items.className}/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"></a></div>
                </div>
            </footer>
        );
    }
}