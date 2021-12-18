import React from "react";
import Aux from "../Auxiliary/Auxillary";
import classes from "./Input.module.css";

const entrydescription = (props) => {
  return (
    <Aux>
      <input
        className={classes.Input}
        value={props.desc}
        placeholder="Enter Description"
        onChange={props.changeddesc}
      />
    </Aux>
  );
};

export default entrydescription;
