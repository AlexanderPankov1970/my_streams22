//VAR 2 gg 370
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>LOADING...</div>;
    }

    console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (stste, ownProps) => {
  //console.log(ownProps);
  return { stream: stste.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

//VAR 1
/*
import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
//VAR 1
// const StreamEdit = (props) => {
//   console.log(props);
//   return <div>Stream Edit !</div>;
// };
//VAR 2
class StreamEdit extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>LOADING...</div>;
    }
    console.log(this.props);
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (stste, ownProps) => {
  //console.log(ownProps);
  return { stream: stste.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
*/
