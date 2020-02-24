import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
       <Link to="/"><h1><HighlightIcon/>Keeper</h1></Link>
      <Link to="/about"><h3 className="link">About</h3></Link>  
      <Link to="/"><h3 className="link">Notes</h3></Link>
    </header>
  );
}

export default Header;
