import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
// import * as actions from "../actions";

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="ui container">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
