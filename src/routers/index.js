import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

class Ra extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/users" component={Users}/>
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Ra;

class Home extends React.Component {
    render() {
        console.log(this.props.match);
        return (
            <div>
                Home
            </div>
        );
    }
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
