
import React, { Component, PropTypes  } from 'react';
import Image from '../../Image/Image';

class InfoProduct extends Component {

    static propTypes = {
        displayListProducts: PropTypes.func,
        beer: PropTypes.object
    };

    constructor(){
        super();

    }

    componentDidMount() {
    }

    displayListProducts() {
        this.props.displayListProducts();
    }

    render() {

        return(
            <div className="info-product">
                <div className="container">
                    <div className="col-md-12">

                        <a onClick={this.displayListProducts.bind(this) }> <i className="fa fa-arrow-left" aria-hidden="true" /> </a>

                        <br />
                        <br />

                        <div className="col-md-6">
                            <Image src={ (this.props.beer.labels) ? this.props.beer.labels.medium : "http://lorrntattoo.fr/images/site/404.png" }
                                   alt={"img"} />
                        </div>

                        <div className="col-md-6">
                            <h4 className="text-center"> {this.props.beer.name }</h4>
                            <p> { this.props.beer.description } </p>
                        </div>


                    </div>
                </div>
            </div>
        );

    }
}

export default InfoProduct;
