import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

//gg312
class GoogleAuth extends React.Component {
  //state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "141983731783-q2315noesoceb0u17f5srold07e8c0q1.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamer",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChande(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChande);
        }); //Listen - это слушатель события
    });
  }

  //   onAuthChande = (isSignedIn) => {
  //     this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  //   };

  onAuthChande = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); //gg325 userId
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>I am dont know if we are signed in</div>;
    } else if (this.props.isSignedIn === true) {
      //return <div>I am signed in!</div>;
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      //return <div>I am not signed in</div>;
      return (
        <button onClick={this.onSignInClick} className="ui green google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
