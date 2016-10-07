
import React, { Component } from 'react';

class Banner extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
        require('./banner.scss');
    }

    render() {

        return(
            <div className="banner">
                <header>
                    <div className="banner-style">
                         <h2>The Beer Library</h2>
                    </div>
                </header>
            </div>
        );

    }
}

export default Banner;
