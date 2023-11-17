import React from "react";
import PropTypes from "prop-types";
import "./Note.css";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
const Note = (props) => (
  <div className="Note" data-testid="Note">
    {console.log("props", props)}

    <TextField
      id="outlined-basic"
      name="usuario"
      // label="Outlined"
      defaultValue={props.note.Title}
      // onChange={onChancheInput}
      variant="standard"
    />
    <TextField
      id="outlined-basic"
      name="usuario"
      // label="Outlined"
      defaultValue={props.note.Content}
      // onChange={onChancheInput}
      variant="standard"
    />
    <br />
    <Button color="secondary" variant="text">
      editar
    </Button>
  </div>
);

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
