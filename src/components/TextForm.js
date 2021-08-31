import React, { useState } from "react";

export default function TextForm(props) {

   
    

  const handlerUpClick = (e) => {
    e.preventDefault();
    // console.log("clicked");
    //setText("You have clicked on uppercase button");
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length === 0)
    props.showAlert("Please Enter Text!","danger");
    else
    props.showAlert("Text Successfully capitalized  Show Your Preview","success");
    
  };

  const handlerLwClick = (e) => {
    e.preventDefault();
    // console.log("clicked");
    //setText("You have clicked on uppercase button");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    if(text.length === 0)
    props.showAlert("Please Enter Text!","danger");
    else
    props.showAlert("Text Successfully uncapitalized","success");
  };
  const handlerTextChange = (event) => {
    setText(event.target.value);
    //console.log("changed");
  };
 
  const handlerClearClick = (event) => {
    let newText = (text = ' ');
    setText(newText);
  };
  const handlerTcaseClick = (event) => {
    event.preventDefault();
    console.log(text.length);
    let str = text.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    let newText = str.join(" ");

    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" >
        <form>
          <h4>{props.heading}</h4>
          <div className="form-group">
            <textarea
              className="form-control"
              value={text}
              id="text1"
              rows="8"
              onChange={handlerTextChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handlerUpClick}>
            Convert to Capitalize
          </button>
          <button className="btn btn-primary ml-3" onClick={handlerLwClick}>
            Convert to Lowecase
          </button>
          <button className="btn btn-primary ml-3" onClick={handlerClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary ml-3" onClick={handlerTcaseClick}>
            Title Case
          </button>
         
        </form>
      </div>
      <div className="container my-3" >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length - 1} word {text.length} Characters{" "}
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
