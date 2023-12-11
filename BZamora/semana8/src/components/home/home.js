import React from "react";
import PropTypes from "prop-types";
import styles from "./home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import axios from "axios";
//import User from "../User/User";
import Note from "../Note/Note";
//import Lis2 from "../lis2/lis2";

const Home = () => {
  //const [data, setData] = React.useState("Ejemplo React, estados y llamados a API");
  const [formValues, setFormValues] = React.useState();
  //const [authenticated, setAuthenticated] = React.useState();
  //const [users, setUsers] = React.useState();
  const [notes, setNotes] = React.useState();
  const [modifyNote, setModifyNote] = React.useState();
  const [addNote, setAddNote] = React.useState();

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";

  /*const onClickBtn = () => {
    console.log("click", formValues);
    

    if (
      mockUser.usuario === formValues.usuario &&
      mockUser.password === formValues.password
    ) {
      console.log("Usuario correcto");
    } else {
      console.log("Usuario incorrecto");
    }
  };*/

  const onChancheInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const modifyNoteInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let id = event.target.id;
    setModifyNote({ ...modifyNote, [name]: value, "id": id });
  };
  const addNotes = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setAddNote({ ...addNote, [name]: value });
  };
  
  const callAPINotes = (event) => {
    axios
      .get(`${urlDelApi}/notes`)
      .then(function (response) {
        // handle success
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

  const clearNotes = (event) => {
    setNotes();
  };

  const callAPIAuthenticate = (event) => {
    const data = formValues;

    // ("/records/categories?filter=id,gt,1&filter=id,lt,3");
    axios
      .get(
        `${urlDelApi}/Users?filter=Username,eq,${formValues.usuario}&filter=Password,eq,${formValues.password}`
      )
      .then(function (response) {
        // handle success
        console.log("data", response.data.records);
        //setUsers(response.data.records);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const insertNoteToDB = () => {

    axios
      .post(`${urlDelApi}/notes`, {
        UserID: 2,
        Title: addNote.title,
        Content: addNote.content,
 
      })
      .then(function (response) {
        // handle success
        callAPINotes();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const modifyNoteToDB = () => {
    axios
      .put(`${urlDelApi}/notes/${modifyNote.id}`, {

        Title: modifyNote.title,
        Content: modifyNote.content,
        
      })
      .then(function (response) {
        // handle success
        console.log(response);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);

      })
      .finally(function () {
        // always executed
      });
      

  };
  

  return (
    <div className={styles.Home}>
      <h1>Ejemplo React, estados y llamados a API</h1>
      <Grid
        container
        spacing={2}
        style={{
          inset: 0,
          margin: "auto",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        <Grid item xs={12}>
          <h1>Autentiacion básica</h1>
          <TextField
            id="outlined-basic"
            name="usuario"
            label="Outlined"
            onChange={onChancheInput}
            variant="standard"
          />
          <TextField
            id="outlined-basic"
            name="password"
            type="password"
            onChange={onChancheInput}
            label="Outlined"
            variant="standard"
          />
          <br />
          <br />
          <Button onClick={callAPIAuthenticate} variant="contained">
            Authenticar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h2>Llamar API y base de datos</h2>
          <p>
            {" "}
            Este boton hace un llamado a la base de datos previamente
            configurada
          </p>
          <Button onClick={callAPINotes} variant="contained" sx={{ mx: 2 }}>
            Llamar API
          </Button>
          <Button onClick={clearNotes} color="secondary" variant="text">
            Limpiar
          </Button>
        </Grid>
        <Grid item xs={6} style={{}}>
        <TextField
          id="outlined-basic"
          name="title"
          label="Titulo"
          variant="standard"
          onChange={addNotes}
        />
        <TextField
          id="outlined-basic"
          name="content"
          variant="standard"
          label="Contenido..."
          onChange={addNotes}
        />
          

          <Button onClick={insertNoteToDB} variant="contained" sx={{ mx: 2 }}>
            Insertar nota
          </Button>
                        
          <Button onClick={clearNotes} color="secondary" variant="text">
            Limpiar
          </Button>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <p>
            Como pueden ver, mientras la estructura de datos sea igual, se puden
            simular o hacer un "Mock" de los datos que se obtienen de una base
          </p>
        </Grid>
      </Grid>

      <Card id="card-home" className={styles["card-home"]}>
        

        <Grid container spacing={2}>
          {notes?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                <Note titulo="titulo" note={nota} modifyprop={modifyNoteInput} modifyApi={modifyNoteToDB}></Note>
                
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
