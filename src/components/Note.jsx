import React from 'react';
import Notes from "../notes";

function Note(props){
    return (<div className="note"><h1>{props.title}</h1><p>{props.content}</p></div>);
}

function MakeNotes(){
    return (Notes.map(note => (
        <Note 
            key = {note.id}
            title = {note.title}
            content = {note.content}
        />
    )));
}

export default MakeNotes;