import React from "react";
import Note from "./Note";

export default function ListOfNotes(props) {
    return (
      props.notes.map((note,index)=>(
          <Note key={index} id={index} title={note.title} content={note.content} deleteItem={props.deleteNote} />
        ))
    );
  }
