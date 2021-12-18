import React from "react";
import Entrytitle from "../EntryInputs/EntryTitle";
import Entrydescription from "../EntryInputs/EntryDescription";
import Entrybutton from "../EntryInputs/EntryButton";
import classes from "./NavHeader.module.css";

const navheader = (props) => {
  return (
    <div className={classes.NavHeader}>
      <div className={classes.Input}>
        <div>
          <h4>Title:</h4>
          <Entrytitle changedtitle={props.storetitle} title={props.title} />
        </div>
        <div>
          <h4>Description</h4>
          <Entrydescription changeddesc={props.storedesc} desc={props.desc} />
        </div>
        <div className={classes.button}>
          <Entrybutton clicked={props.click} button={props.button} />
        </div>
      </div>
    </div>
  );
};

export default navheader;
