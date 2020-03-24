import React from "react";
import { Field, reduxForm } from "redux-form";

class Login extends React.Component {
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
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="email" component={this.renderInput} label="Enter email" />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter password"
        />
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
  if (!formValue.email) error.email = "This is a required field";
  return error;
};

export default reduxForm({
  form: "Login",
  validate
})(Login);
