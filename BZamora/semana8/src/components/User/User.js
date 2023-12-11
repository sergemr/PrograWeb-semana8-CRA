import React from "react";
import PropTypes from "prop-types";
import "./User.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const User = (props) => (
  <div className="User" data-testid="User">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>:{props?.nombre}</CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
