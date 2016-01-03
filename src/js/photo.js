import _ from "lodash";
import React from "react";
import {connect} from "react-redux";


class Photo extends React.Component {
    static contextTypes = {
        actions: React.PropTypes.object.isRequired,
        user: React.PropTypes.object.isRequired
    }

    onLike = () => {
        this.context.actions.like(this.props.id, this.context.user.username);
    }

    render() {
        const likes = this.props.likes || {};
        console.log(likes);

        return <div>
            <img src={this.props.url} width={300} height={300} />
            <br/>
            <button onClick={this.onLike}>Like</button>
            &nbsp;
            {_.map(likes, (val, user) => {
                return <span>{user}</span>
            })}
            <hr/>
        </div>
    }
}

export default Photo;
