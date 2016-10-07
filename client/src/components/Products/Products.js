
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BeersActions from '../../redux/actions/BeersActions';

/**Component **/
import ProductsList from './ProductsList/ProductsList'
import InfoProduct from './InfoProduct/InfoProduct'

/** State **/
const mapStateToProps = (state) => ({
    beers: state.beers.list.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    BeersActions: bindActionCreators(BeersActions, dispatch)
});

class Products extends Component {

    constructor(){
        super();
        this.state = {
            productSelected: false,
            productSelectedInfo : null
        }
    }

    componentDidMount() {
    }

    displayInfoProduct(value) {
        console.log(" Product view onSelectInfoProducts = ", value);
        this.setState({
            productSelected: true,
            productSelectedInfo: value
        });
    }

    displayListProducts() {
        this.setState({
            productSelected: false,
            productSelectedInfo: null
        });
    }

    render() {

        return(
            <div className="products">
                { !this.state.productSelected &&
                    <ProductsList beers={this.props.beers} onSelectInfoProducts={this.displayInfoProduct.bind(this)} />
                }

                { this.state.productSelected &&
                    <InfoProduct beer={this.state.productSelectedInfo} displayListProducts={this.displayListProducts.bind(this)} />
                }
            </div>
        );

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Products);