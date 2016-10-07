
import React, { Component, PropTypes } from 'react';

class Image extends Component {

    static PropTypes = {
        src: PropTypes.string,
        onClickEvent : PropTypes.func,
        item: PropTypes.string
    };

    constructor(){
        super();
    }

    componentDidMount() {
        require('./Image.scss');
    }

    /** return item **/
    onClickImage(item) {
        console.log("id = ", item);
        this.props.onClickEvent(this.props.item);
    }

    render() {

        return(
            <div className="image-design text-center">
                <img src={ this.props.src }
                     className="img-style"
                     alt={"img"}
                     onClick={ (this.props.onClickEvent) ? this.onClickImage.bind(this, this.props.item) : null}
                />
            </div>
        );

    }
}

export default Image;
