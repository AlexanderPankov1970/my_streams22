//379. Making the Modal Reusable
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div style={{ color: "red" }} className="content">
          {props.content}
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

//gg377 - Create PORTAL
/*
import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">DELETE STREAM</div>
        <div style={{ color: "red" }} className="content">
          Are you sure you want to delete this stream ??
        </div>
        <div className="actions">
          <button style={{ color: "red" }} className="iu primary button">
            Delete
          </button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
*/
