//VAR 2 gg368
import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

//VAR 1
/*
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError(
    { error, touched } //distract from meta
  ) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  //VAR 1  renderInput
  // renderInput(formProps) {
  //   console.log(formProps);
  //   //  return <div>I am input</div>;
  //   //VAR 1
  //   // return (
  //   //   <input
  //   //     onChange={formProps.input.onChange}
  //   //     value={formProps.input.value}
  //   //   />
  //   // );
  //   //VAR 2
  //   return <input {...formProps.input} />; //"пробрасываем " весь объект  formProps.input
  // }
  //VAR 2 renderInput
  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    // console.log(meta.error);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label> {label}</label>
        <input {...input} autoComplete="off" />
        
        {this.renderError(meta)}
      </div>
    );
  };

  // onSubmit(event) {
  //   event.preventDefault();
  // }
  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    //return <div>StreamCreate</div>;
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Inter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// export default
//   reduxForm({
//     form: "streamCreate",
//     validate: validate,
//   })(StreamCreate)
// ;
const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);
export default connect(null, { createStream })(formWrapped);
*/
