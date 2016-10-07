
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './views/App.js';


import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import textTest from './redux/reducers/textTest'
import beers from './redux/reducers/beers'

const rootReducer = combineReducers({
    textTest, beers
});
let store = createStore(rootReducer);


require('./main.scss');

render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
    </Provider>
), document.getElementById('content'));