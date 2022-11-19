import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    setText(text.toUpperCase());
  };

  const lowercases = () => {
    setText(text.toLowerCase());
  };

  const Clear = () => {
    setText("");
  };

  const TextCopy = () => {
    var textD = document.getElementById("myBox");
    textD.select();
    // textD.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textD.value);
  };
  const RemoveExtraSpace=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const Speek = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnchage = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          onChange={handleOnchage}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleOnClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={lowercases}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={Clear}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={Speek}>
        Speak
      </button>
      <button className="btn btn-primary mx-1" onClick={TextCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>
        Extra Space
      </button>
      <div className="container my-2">
        <h1>Your text Summery : </h1>
        <p>
          {text.split(" ").length - 1} words, {text.length} characters
        </p>
        <p>
          {" "}
          {text === "" ? "0" : 0.008 * text.split(" ").length} total Reading
          time
        </p>
        <div className="container">
          <h2>Preview : </h2>
          {text===''?'Enter a Text To Preview Here ...':text}
        </div>
      </div>
    </>
  );
};

export default TextForm;
