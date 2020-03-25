import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import history from "../history";
// import * as actions from "../actions";

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div className="ui container">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
