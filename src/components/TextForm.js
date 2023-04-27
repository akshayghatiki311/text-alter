import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";

function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpperCase = ()=>{
        console.log('Clicked Upper case button');
        setText(text.toUpperCase());
        props.updateAlert("Converted to Upper Case","success");  
    }

    const handleLowerCase = ()=>{
        console.log('Clicked Lower case button');
        setText(text.toLowerCase());
        props.updateAlert("Converted to Lower Case","success");
    }

    const handleClearText = ()=>{
        console.log('Clicked Clear Text');
        setText('');
        props.updateAlert("Cleared the Text","success");  
    }

    const handleStripTags = ()=>{
        console.log('Clicked Strip HTML tags');
        let str = text.toString();
        setText(str.replace( /(<([^>]+)>)/ig, ''));
        props.updateAlert("HTML tags removed","success"); 
    }

    const handleCopyText = ()=>{
        console.log('Clicked Copy Text');
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.updateAlert("Text copied to clipboard","success");  
    }

    const handleCapitalizeFirstLetter = ()=>{
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setText(str2);
        props.updateAlert("First letter of words are capitalized","success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    let noOfWords = text.split(' ').length;
    let noOfCharacters = text.length;

  return (
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} placeholder='Text Area' onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalizeFirstLetter}>Capitalize First Letter</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleStripTags}>Strip HTML Tags</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>Your text has {noOfWords} words and {noOfCharacters} characters.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
        </div>
    </div>
  )
}

export default TextForm