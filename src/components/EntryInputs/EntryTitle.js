import React from "react";
import Aux from "../Auxiliary/Auxillary";
import classes from "./Input.module.css";

const entrytitle = (props) => {
  return (
    <Aux>
      <input
        className={classes.Input}
        value={props.title}
        placeholder="Enter title"
        onChange={props.changedtitle}
      />
    </Aux>
  );
};

export default entrytitle;
