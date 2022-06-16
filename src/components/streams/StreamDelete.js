import React from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteSteram } from "../../actions";
import { Link } from "react-router-dom";

//VAR2
class StreamDelete extends React.Component {
  componentDidMount() {
    //
    console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteSteram(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return `ARE YOU SURE YOU WANT TO DELETE THIS STREAM?`;
    }
    return `ARE YOU SURE YOU WANT TO DELETE THE STREAM WITH TITLE: ${this.props.stream.title}?`;
  }

  render() {
    // if (!this.props.stream) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          // content="ARE YOU SURE YOU WANT TO DELETE THIS STREAM?"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteSteram })(
  StreamDelete
);
//VAR 1
/*
const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream ?!"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};
export default StreamDelete;
*/
