import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Create from "./Create";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
const [notes, setNotes] = useState([]);

function addNote(newNote){
    setNotes(prevNotes => {
        console.log(prevNotes);
        return [...prevNotes, newNote]}
    );
}

function deleteNote(id){
    setNotes(prevNotes => {
        return prevNotes.filter(
            (prevNotes,index) => index !== id
        );
    })
}

  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact render={props=><Create {...props} notes={notes} addNote={addNote} deleteNote={deleteNote}/>}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
