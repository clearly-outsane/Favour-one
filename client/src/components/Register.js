import React from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = formProps => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.registerUser(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="firstname"
          component={this.renderInput}
          label="Enter firstname"
        />
        <Field
          name="lastname"
          component={this.renderInput}
          label="Enter lastname"
        />
        <Field name="email" component={this.renderInput} label="Enter email" />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter password"
        />
        <Field
          name="password2"
          component={this.renderInput}
          label="Confirm password"
        />
        <Field name="role" component={this.renderInput} label="Enter role" />
        <button className="ui button primary">Enter</button>
      </form>
    );
  }
}

const validate = formValue => {
  const error = {};
  const value = formValue.email;
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error.email = "Invalid email address";
  }
  if (!formValue.password) error.password = "This is a required field";
  if (formValue.password !== formValue.password2) {
    error.password = "Passwords don't match";
    error.password2 = "Passwords don't match";
  }
  if (!formValue.email) error.email = "This is a required field";
  return error;
};

const decoratedComponent = connect(null, actions)(Register);

export default reduxForm({
  form: "Register",
  validate
})(decoratedComponent);
