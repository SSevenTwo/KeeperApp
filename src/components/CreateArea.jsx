import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [expanded, setExpanded] = useState(false);

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

    function handleFocus(){
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
        {expanded ? <div><input id="title" className="title" onChange={changeTitle} 
            name="title" placeholder="Title" value={note.title} />
        <hr></hr></div>: ""}
        <textarea onFocus={handleFocus} onChange={changeContent}  
            name="content" placeholder="Take a note..." rows={expanded? 3:1}value={note.content}/>
        <Zoom in={expanded ? true:false}><Fab onClick={addNewNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
