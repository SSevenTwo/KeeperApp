import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function changeTitle(event){
        let value = event.target.value;
        setNote(prevValues => {
            return {...prevValues, title:value}
        });
    }

    function changeContent(event){
        let content = event.target.value;
        setNote(prevValues => {
            return {...prevValues, content:content}
        });
    }

    function addNewNote(event){
        props.addNote(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input class="title" onChange={changeTitle} name="title" placeholder="Title" value={note.title} />
        <hr></hr>
        <textarea onChange={changeContent}  name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={addNewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
