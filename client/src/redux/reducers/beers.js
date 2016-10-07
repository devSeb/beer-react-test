
import * as types from '../constants/ActionTypes';

const initialState = {

    list : {
        data : null
    }
};

export default function beers( state = initialState , action) {

    switch (action.type) {

        case types.ADD_BEERS:
            return {
                ...state,
                list : {
                    data : action.result
                }
            };

        default:
            return state;
    }
}