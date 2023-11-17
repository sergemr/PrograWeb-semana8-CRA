import React from "react";
import PropTypes from "prop-types";
import "./Note.css";

const Note = (props) => (
  <div className="Note" data-testid="Note">
    {console.log("props", props)}
    <h2>{props.titulo}</h2>
    <h1>{props.note.Title}</h1>
    <p>{props.note.Content} </p>
  </div>
);

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
