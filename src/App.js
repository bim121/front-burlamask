import logo from './logo.svg';
import './App.css';
import { Slider } from './Slider';
import React, {useState} from 'react';

function App() {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e){
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e){
    e.preventDefault()
    setDrag(false)
  }

  function onDropHandler(e){
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    console.log(files)
    const formData = new FormData()
    formData.append("file", files[0])
    //axios.post("url", formData)
    setDrag(false)
  }

  return (
   <div className = "app">
    {drag
      ?<div className = "drop-area"
        onDragStart={e => dragStartHandler(e)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragOver={e => dragStartHandler(e)}
        onDrop = {e => onDropHandler(e)}
      >Upload image here</div>
      :<div
        onDragStart={e => dragStartHandler(e)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragOver={e => dragStartHandler(e)}
      >Move images to upload</div>
    }
    </div>
  );
}

export default App;
 