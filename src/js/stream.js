import React from "react";
import {connect} from "react-redux";

import Photo from "./photo"


class Stream extends React.Component {
    static contextTypes = {
        actions: React.PropTypes.object.isRequired
    }

    componentDidMount() {
        this.context.actions.fetchStream();
    }

    render() {
        return <div>
            {this.props.photos.map((photo, i) => {
                return <Photo key={photo.key} id={i} {...photo} />
            })}
        </div>
    }
}

export default connect(function(state) {
    return state.stream
})(Stream);
