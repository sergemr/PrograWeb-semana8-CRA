import React from "react";
import PropTypes from "prop-types";
import styles from "./home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import User from "../User/User";

const Home = () => {
  const [data, setData] = React.useState("Un texto");
  const [formValues, setFormValues] = React.useState("Un texto");
  const [users, setUsers] = React.useState();

  const mockUser = {
    usuario: "admin",
    password: "admin",
  };

  const mockUsers = [
    {
      usuario: "admin",
      password: "admin",
    },
    {
      usuario: "user2",
      password: "user2",
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

  const callAPI = (event) => {
    axios
      .get("http://10.17.19.22/api.php/records/Users")
      .then(function (response) {
        // handle success
        console.log(response.data.records);
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
  return (
    <div className={styles.Home}>
      <h1>{data}</h1>
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
      <Button onClick={onClickBtn} variant="contained">
        Contained
      </Button>
      <Button onClick={onClickBtn} variant="contained">
        Show
      </Button>

      <Button onClick={callAPI} variant="contained">
        Llamar API
      </Button>

      {mockUsers.map((fila, index) => {
        return (
          <div>
            {index}-{fila.usuario}
            {`${index}-${fila.usuario}`}
          </div>
        );
      })}

      {users?.map((fila, index) => {
        return <User nombre={fila.Username}></User>;
      })}
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
