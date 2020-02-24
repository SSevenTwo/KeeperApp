import React from "react";
import CreateArea from "./CreateArea";
import ListOfNotes from "./ListOfNotes";

export default function Create(props) {
    return (
    <div>
      <CreateArea addNote = {props.addNote}/>
      <ListOfNotes notes = {props.notes} deleteNote={props.deleteNote}/>
      </div>
    );
  }
