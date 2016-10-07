import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BeersActions from '../redux/actions/BeersActions';

/** Component **/
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

/** Service **/
import * as serviceProducts from '../services/serviceProducts';


/** State **/
const mapStateToProps = (state) => ({
        beers: state.beers.list.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
        BeersActions: bindActionCreators(BeersActions, dispatch)
});


class App extends Component {

    static propTypes = {};

    constructor() {
        super();
        this.state = {
            beersData: false
        }
    }

    componentDidMount() {
        var self = this;
        serviceProducts.searchBeerProducts()
            .then( function (data) {
                console.log(" VIEW = ", data.data);
                self.props.BeersActions.addBeers(data.data);
                self.setState({beersData: true});
            })
    }


    render() {
        //console.log("element", this.props.element.text);

        return(
            <div>
                <div>
                    <Banner />

                    {this.state.beersData &&
                        <Products />
                    }
                    <Footer />
                </div>
            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(App);
