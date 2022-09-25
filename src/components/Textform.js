import React, { useState } from "react";

export default function Textform(props) {

    const clickFunc = ()=>{
        console.log("clicked func" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onchangeFunc = (event)=>{
        console.log("Change func");
        setText(event.target.value);
    }

    const [text, setText] = useState('my text')
  return (
    <>
      <div className="container">
        <div className="form-floating mt-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here" value={text}
            id="floatingTextarea2" onChange={onchangeFunc}
          ></textarea>
          <label>{props.title}</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={clickFunc}  >Primary</button>
      </div>
      <div className="container">
        <h1>Previw Box</h1>
        <p>{text}</p>
        <p>{text.length}</p>
      </div>
    </>
  );
}
