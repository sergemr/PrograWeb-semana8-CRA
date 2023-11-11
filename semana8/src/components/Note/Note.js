import React from "react";
import PropTypes from "prop-types";
import "./Note.css";

const Note = (props) => (
  <div className="Note" data-testid="Note">
    {console.log("props", props)}
    Note Component
    <h1>{props.note.Title}</h1>
  </div>
);

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
