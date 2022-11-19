import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converting to uppercase Successful","success")
  };

  const lowercases = () => {
    setText(text.toLowerCase());
    props.showAlert("converting to LowerCase Successful","success")
  };

  const Clear = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };

  const TextCopy = () => {
    var textD = document.getElementById("myBox");
    textD.select();
    // textD.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textD.value);
    props.showAlert("Text Copied successfully","success")
  };
  const RemoveExtraSpace=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space has been removed","success")
  }
  const Speek = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Voice speech ready ","success")
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
      <button className="btn btn-primary mx-1 my-3" onClick={handleOnClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-1 my-3" onClick={lowercases}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-1 my-3" onClick={Clear}>
        Clear
      </button>
      <button className="btn btn-primary mx-1 my-3" onClick={Speek}>
        Speak
      </button>
      <button className="btn btn-primary mx-1 my-3" onClick={TextCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1 my-3" onClick={RemoveExtraSpace}>
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
