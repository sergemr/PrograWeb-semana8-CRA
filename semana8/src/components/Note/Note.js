import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Note.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Note = (props) => {

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";
  const [notes, setNotes] = React.useState();


  const callAPINotes = (event) => {
    axios
      .get(`${urlDelApi}/notes`) //cambio direccion
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.records);
        console.log(response.statusText);
        setNotes(response.data.records);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };


  const [formData, setFormData] = useState({
    UserID: props.note.UserID || "",
    Title: props.note.Title || "",
    Content: props.note.Content || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 

  const editNoteToDB = () => {
    axios
      .put(`${urlDelApi}/notes/${props.note.NoteID}`, formData)
      .then(function (response) {
        callAPINotes();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEditClick = () => {
    // Si estás editando, llama a la función para editar
      editNoteToDB();
  }

  return (
    <div className="Note" data-testid="Note">
      <TextField
        id="outlined-basic"
        name="Title"
        defaultValue={formData.Title}
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        id="outlined-basic"
        name="Content"
        defaultValue={formData.Content}
        onChange={handleChange}
        variant="standard"
      />
      <br />
      <Button color="secondary" variant="text" onClick={handleEditClick}>
        Editar nota
      </Button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    NoteID: PropTypes.number.isRequired,
    UserID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Note;

