import React from 'react';
import Notes from "../notes";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function deleteNote(){
        props.deleteItem(props.id);
    }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}><DeleteIcon/></button>
    </div>
  );
}

export default Note;


export function MakeNotes(){
    return (Notes.map(note => (
        <Note 
            key = {note.id}
            title = {note.title}
            content = {note.content}
        />
    )));
}