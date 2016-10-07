import React, { Component, PropTypes } from 'react';
import AutoCompleteProducts from '../AutoCompleteProducts/AutoCompleteProducts';
import Image from '../../Image/Image';

const ELEMENTS_BY_PAGE = 9-1;

class ProductsList extends Component {

    static propTypes = {
        beers: PropTypes.array,
        onSelectInfoProducts: PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            paginationStart: 1,
            paginationEnd: null,
            paginationValues: null,
            autoCompleteNameProduct: null
        }
    }

    definePagination( data ) {
        //console.log("length = ", Math.ceil(this.props.beers.length / ELEMENTS_BY_PAGE));
        let pagination = [];
        let paginationMax = (Math.ceil(data.length / ELEMENTS_BY_PAGE) <= 1 ) ? Math.ceil(data.length / ELEMENTS_BY_PAGE) : Math.ceil(data.length / ELEMENTS_BY_PAGE) -1 ;
        //console.log("max = ", data.length / ELEMENTS_BY_PAGE , paginationMax);
        for ( var i = 1; i <= paginationMax; i++ ) {
            console.log(" i = ", i);
            pagination.push(i);
        }
        this.setState({
            paginationEnd: paginationMax,
            paginationValues: pagination
        });

    }

    defineAutoCompleteProducts() {
        let arrayAutoCompleteName = [];
        for ( let  element of  this.props.beers) {
            //console.log("element = ", element.name);
            arrayAutoCompleteName.push(element);
        }
        this.setState({
            autoCompleteNameProduct: arrayAutoCompleteName
        });
    }

    componentDidMount () {
        require('./ProductsList.scss');
        this.defineAutoCompleteProducts();
        this.definePagination(this.props.beers);
    }

    onClickPagination(paginationNumber) {
        //console.log("onClickPagination = ", paginationNumber);
        this.setState( {paginationStart: paginationNumber} );
    }

    onClickPaginationBefore() {
        let currentPagination = this.state.paginationStart;
        if ( currentPagination > 1) {
            currentPagination = currentPagination - 1;
        }
        this.setState( {paginationStart: currentPagination} );
    }

    onClickPaginationAfter() {
        let currentPagination = this.state.paginationStart;
        if ( currentPagination < this.state.paginationEnd) {
            currentPagination = currentPagination + 1;
        }
        this.setState( {paginationStart: currentPagination} );
    }

    /** send product to the parent component **/
    onSelectProducts(value) {
        //console.log("onSelectProducts value = ", value);
        this.props.onSelectInfoProducts(value);
    }

    /** define data in autocomplete  **/
    onChangeAutoCompleteProduct(event) {
        let res = [];
        if (event == "" || event == null ) {
            for ( let  element of  this.props.beers) {
                res.push(element);
            }
        } else {
            for (let element of this.props.beers) {
                if (element.name.indexOf(event) !== -1) {
                    res.push(element);
                }
            }
        }
        this.setState({
            autoCompleteNameProduct: res
        });

        this.definePagination(res);
    }

    render() {
        var self = this;

        //console.log("max =" , (self.state.paginationStart * ELEMENTS_BY_PAGE )  + (self.state.paginationStart-1) );
        //console.log("Min =", ( (self.state.paginationStart-1) * ELEMENTS_BY_PAGE ) + (self.state.paginationStart-1) );
        console.log("element pagination = ",self.state.paginationStart,  self.state.paginationEnd);

        return (
            <div className="products">

                <div className="container">
                    <div className="col-md-12">
                        <h2 className="title"> Products </h2>

                        <div className="col-md-12 text-center">
                            <AutoCompleteProducts onChangeAutoCompleteProduct={self.onChangeAutoCompleteProduct.bind(self)} placeholder="Value product"/>
                        </div>

                        <br />
                        <br />

                        <div className="row">
                            {self.state.autoCompleteNameProduct && self.state.autoCompleteNameProduct.map( function ( item, index) {
                                let min = ( (self.state.paginationStart-1) * ELEMENTS_BY_PAGE ) + (self.state.paginationStart-1);
                                let max = ( self.state.paginationStart * ELEMENTS_BY_PAGE )  + (self.state.paginationStart-1) ;

                                if (  index <= max && index >= min ) {
                                    return (
                                        <div key={index} className={"item-element-"+index} >
                                            <div className="col-sm-6 col-md-4">
                                                <div className="thumbnail">
                                                    <Image src={ (item.labels) ? item.labels.medium : "http://lorrntattoo.fr/images/site/404.png" }
                                                           onClickEvent={self.onSelectProducts.bind(self)}
                                                            item={item} />

                                                        <div className="caption">
                                                            <h5 className="text-center">{item.name}</h5>

                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                 }
                            })}
                        </div>
                    </div>


                    <div className="pagination">
                        <div className="col-md-12">
                            <ul className="list-inline">

                                {self.state.paginationStart !== 1 &&
                                    <li><a onClick={self.onClickPaginationBefore.bind(self)}> <i className="fa fa-arrow-left" aria-hidden="true" /> </a></li>
                                }

                                {self.state.paginationValues && self.state.paginationValues.map(function( item, index) {
                                    return (
                                        <li key={"item-"+index}> <a onClick={self.onClickPagination.bind(self, item)} > {item} </a></li>
                                    );
                                })}

                                {self.state.paginationStart !== self.state.paginationEnd  && self.state.paginationEnd !== 0 &&
                                    <li><a onClick={self.onClickPaginationAfter.bind(self)}> <i className="fa fa-arrow-right" aria-hidden="true"/> </a> </li>
                                }

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default (ProductsList);
