import React from "react";
import PropTypes from "prop-types";
import styles from "./home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import axios from "axios";
import User from "../User/User";
import Note from "../Note/Note";

const Home = () => {
  const [data, setData] = React.useState(
    "Ejemplo React, estados y llamados a API"
  );
  const [formValues, setFormValues] = React.useState();
  const [authenticated, setAuthenticated] = React.useState();
  const [users, setUsers] = React.useState();
  const [notes, setNotes] = React.useState();

  const urlDelApi = "http://10.17.19.22/api.php/records";

  const mockUser = {
    usuario: "admin",
    password: "admin",
  };

  const mockUsers = [
    {
      UserID: 1,
      Username: "user1",
      Password: "password1",
      Email: "user1@example.com",
      CreatedAt: "2023-10-10 15:56:41",
    },
    {
      UserID: 2,
      Username: "user2",
      Password: "password2",
      Email: "user2@example.com",
      CreatedAt: "2023-10-10 15:56:41",
    },
  ];

  const mockNotes = [
    {
      NoteID: 1,
      UserID: 1,
      Title: "ToDo 1",
      Content: "This is the content of ToDo 1 for user 1.",
      CreatedAt: "2023-10-10 15:56:41",
    },
    {
      NoteID: 2,
      UserID: 1,
      Title: "ToDo 2",
      Content: "This is the content of ToDo 2 for user 1.",
      CreatedAt: "2023-10-10 15:56:41",
    },
    {
      NoteID: 3,
      UserID: 2,
      Title: "Task 1",
      Content: "This is the content of Task 1 for user 2.",
      CreatedAt: "2023-10-10 15:56:41",
    },
  ];

  let nombre = "Sergio";

  // ES6

  const onClickBtn = () => {
    console.log("click", formValues);
    let nombre = "Sergio";

    if (
      mockUser.usuario === formValues.usuario &&
      mockUser.password === formValues.password
    ) {
      console.log("Usuario correcto");
    } else {
      console.log("Usuario incorrecto");
    }
  };

  const onChancheInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(event);
    console.log(name);
    console.log(value);

    setFormValues({ ...formValues, [name]: value });
  };

  const callAPINotes = (event) => {
    axios
      .get(`${urlDelApi}/Notes`)
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
  const callAPMockNotes = (event) => {
    setNotes(mockNotes);
  };
  const clearNotes = (event) => {
    setNotes();
  };

  const callAPIAuthenticate = (event) => {
    const data = formValues;

    // ("/records/categories?filter=id,gt,1&filter=id,lt,3");
    console.log("data");
    axios
      .get(
        `${urlDelApi}/Users?filter=Username,eq,${formValues.usuario}&filter=Password,eq,${formValues.password}`
      )
      .then(function (response) {
        // handle success
        console.log("data", response.data.records);
        setUsers(response.data.records);
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
      .post(`${urlDelApi}/Notes`, {
        UserID: 2,
        Title: "Task 1",
        Content: "This is the content of Task 1 for user 2.",
        CreatedAt: "2023-10-10 15:56:41",
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
  return (
    <div className={styles.Home}>
      <h1>{data}</h1>
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
          <h2>Llamar Local y base de datos</h2>
          <p>
            {" "}
            Este boton hace un llamado a el arreglo MockNotes definido
            previamente
          </p>
          <Button onClick={callAPMockNotes} variant="contained" sx={{ mx: 2 }}>
            Llamar Local
          </Button>

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
        {console.log("por aca ando")}

        <Grid container spacing={2}>
          {notes?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                <Note titulo="titulo" note={nota}></Note>
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
