import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Actions from "./actions";
import Signup from "./signup";
import Stream from "./stream";


class App extends React.Component {
    static childContextTypes = {
        actions: React.PropTypes.object.isRequired,
        user: React.PropTypes.object.isRequired
    }

    getChildContext() {
        return {
            actions: this.actions,
            user: this.props.user
        };
    }

    constructor(props) {
        super(props);
        this.actions = bindActionCreators(Actions, this.props.dispatch);
    }

    onLike = () => {
        this.actions.like();
    }

    render() {
        let content;
        if (!this.props.user.username) {
            content = <Signup  />
        } else {
            content = <Stream />
        }
        return <div>
            {content}
        </div>
    }
}

export default connect(function(state) {
    return  {
        user: state.user
    }
})(App);
