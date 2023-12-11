import React from "react";
import PropTypes from "prop-types";
import "./Note.css";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
const Note = (props) => {
  
  return (
  <div className="Note" data-testid="Note">
    

    <TextField
      id={props.note.NoteID}
      name="title"
      defaultValue={props.note.Title}
      variant="standard"
      noteid={props.note.NoteID}
      onChange={props.modifyprop}
    />
    <TextField
      id={props.note.NoteID}
      name="content"
      defaultValue={props.note.Content}  
      variant="standard"
      
      
      onChange={props.modifyprop}
    />
    <br />
    <Button color="secondary" variant="text" onClick={props.modifyApi}>
      editar
    </Button>
    
  </div>
)};

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
