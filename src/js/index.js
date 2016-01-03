// import createBrowserHistory from "history/lib/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/lib/createBrowserHistory";
import {applyMiddleware, createStore, compose} from "redux";
import {Redirect, Router, Route} from "react-router";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./app";
import reducers from "./reducers"

const store = compose(
    applyMiddleware(thunk)
)(createStore)(reducers);


const history = createBrowserHistory();


export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route component={App}>
                        <Route component={App} path="/" />
                    </Route>
                </Router>
            </Provider>
        );
    }
}


ReactDOM.render(
    <Root />,
    document.getElementById("app")
);
