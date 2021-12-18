import React from "react";
import Aux from "../Auxiliary/Auxillary";
import classes from "./Input.module.css";

const entrybutton = (props) => (
  <div className={classes.button}>
    <button disabled={!props.button} onClick={props.clicked}>
      Todo!
    </button>
  </div>
);

export default entrybutton;
