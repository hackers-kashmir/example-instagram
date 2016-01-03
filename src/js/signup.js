import React from "react";


class Signup extends React.Component {
    static contextTypes = {
        actions: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {'username': ''};
    }

    onSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.context.actions.signup(this.state.username);
    }

    onUsernameChange = (e) => {
        this.setState({username: e.target.value})
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <label>Name</label>
            <input type="text" ref="username" onChange={this.onUsernameChange}/>

            <button type="submit">Sign Up</button>
        </form>
    }
}


export default Signup;
