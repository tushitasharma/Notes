import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" });
  const [tap, setTap] = useState(false);

  function handleText(event) {
    const { name, value } = event.target;
    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick() {
   
    setTap(() => {
      return (true);
    });
  }

  return (
    <div>
      <form className="create-note">
      {tap? <input
          onChange={handleText}
          name="title"
          placeholder="Title"
          value={text.title}
        />: null}
        <textarea
          onChange={handleText}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows= {tap? "3":"1"}
          value={text.content}
        />
         {tap? <Zoom in = {true}>
        <Fab
          onClick={(event) => {
            props.add(text);
            event.preventDefault();
            setText({ title: "", content: "" });
          }}
        >
         <AddIcon />
        </Fab></Zoom>: null}
      </form>
    </div>
  );
}

export default CreateArea;
// f (name === "title") {
//   return { title: value, content: prevValue.content };
// } else {
//   return { title: prevValue.title, content: value };
// // }
