
import React, { Component, PropTypes } from 'react';

class AutoCompleteProducts extends Component {

    static Proptypes = {
        onChangeAutoCompleteProduct: PropTypes.func
    };

    constructor(){
        super();
        this.state = {
            paginationValues : null,
            autoCompleteProducts: ""
        }
    }

    componentDidMount() {
    }

    onChangeAutoComplete(event) {
        this.setState({autoCompleteProducts:  event.target.value});
        this.props.onChangeAutoCompleteProduct(event.target.value);
    }

    render() {

        return(
            <div className="autocomplete">
                <div className="col-md-12 text-center">
                    <input  type="text"
                            className="col-md-12"
                            value={this.state.autoCompleteProducts}
                            onChange={this.onChangeAutoComplete.bind(this)} />

                </div>
            </div>
        );

    }
}

export default (AutoCompleteProducts);