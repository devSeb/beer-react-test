
import * as actionType from '../constants/ActionTypes';


export function addBeers( listBeers ) {
    return {
        type : actionType.ADD_BEERS,
        result: listBeers
    }
}