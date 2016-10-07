import React, { Component } from 'react';

class Footer extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./Footer.scss');
    }

    render() {

        return (
            <div className="footer">
            <footer>
                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <div className="container">
                        <div className="navbar-header">
                            <span className="navbar-text margin-15">
                                2016 , <a href="#">DevSeb</a> -  The Beer Library
                            </span>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
        );
    }
}
export default (Footer);

