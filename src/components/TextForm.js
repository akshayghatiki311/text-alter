import React,{useState} from 'react';

function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpperCase = ()=>{
        setText(text.toUpperCase());
        props.updateAlert("Converted to Upper Case","success");  
    }

    const handleLowerCase = ()=>{
        setText(text.toLowerCase());
        props.updateAlert("Converted to Lower Case","success");
    }

    const handleClearText = ()=>{
        console.log('Clicked Clear Text');
        setText('');
        props.updateAlert("Cleared the Text","success");  
    }

    const handleStripTags = ()=>{
        let str = text.toString();
        setText(str.replace( /(<([^>]+)>)/ig, ''));
        props.updateAlert("HTML tags removed","success"); 
    }

    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text);
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

    const handleNoText = ()=>{
        props.updateAlert("No Text Found","warning");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    let noOfWords = text.replace( /\n/g, " " ).split(" ").filter((item)=>{
            return item.length!==0;
        }).length;
    let noOfCharacters = text.length;

  return (
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#60666e':'white',color: props.mode==='dark'?'white':'black'}} placeholder='Text Area' onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleUpperCase:handleNoText}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleLowerCase:handleNoText}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleClearText:handleNoText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleCapitalizeFirstLetter:handleNoText}>Capitalize First Letter</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleCopyText:handleNoText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={text.length>0?handleStripTags:handleNoText}>Strip HTML Tags</button>
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