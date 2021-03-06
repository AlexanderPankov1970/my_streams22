import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    //VAR 1
    // this.props.fetchStream(this.props.match.params.id);
    //console.log(this.videoRef);
    //VAR 2
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildplayer();
  }

  componentDidUpdate() {
    this.buildplayer();
  }

  componentWillUnmount() {
    // console.log(`I was unmounted`);
    this.player.destroy();
  }

  buildplayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //VAR 1
    // return (
    //   <div>
    //     <h1>{this.props.stream.title}</h1>
    //     <h5>{this.props.stream.description}</h5>
    //   </div>
    // );
    //VAR 2 (ES2015)
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
