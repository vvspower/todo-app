import React from "react";
import classes from "./List.module.css";

const list = (props) => {
  return (
    <div className={classes.List}>
      <h1>{props.title} </h1>
      <p>{props.description}</p>
      <button onClick={props.remove} value={props.value}>
        Delete
      </button>
    </div>
  );
};
export default list;
