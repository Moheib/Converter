import React, {  useState } from 'react'
export default function TextForm(props) {
const [text,setText] = useState("");
const [caseLower, setCase] = useState(false);
const [previewState, setPreview] = useState(false);
 
const Case = ()=>{
    setCase(!caseLower);
    setText(caseLower?text.toLowerCase():text.toUpperCase());

}
const handleChange = (e)=>{
    setText(e.target.value)
    
}
const preview = ()=>{
setPreview(!previewState);
}
const Clear = () =>{
    setText("");
}
const Sentence = ()=>{
let abc =  text.toLowerCase();
abc=abc.split(" ");
for(let i= 0; i < abc.length; i++)
{   
        abc[i] = abc[i].charAt(0).toUpperCase() + abc[i].slice(1);
        setText(abc.join(' '));
}


// setText(abc);
// abc.split(" ");
// for(let i=0;i<=abc.length;i++)
// {
// abc[i] = abc[i].charAt(0).toUpperCase() + abc[i].slice(1);
// }
// abc=abc.join(' ');
// setText(abc);


// const arr = text.split(" ");
// for(let i=0;i<arr.length;i++){
//     let firstChar=arr[i].slice(0,1);
//     const abc = firstChar.toUpperCase()
//     setText({...text , abc})

// arr.map((item , i) => (
//     arr[0].slice(0,1);
// ))

}
const copy = ()=> {
    let xyz=document.getElementById("exampleFormControlTextarea1");
    xyz.select();
    navigator.clipboard.writeText(xyz.value);
}
const space = () =>{
let removeSapces = text.split(/[  ]+/);
setText(removeSapces.join(" "));

}
  return (
    <>
    
    <div className='container'>
        
        <h1 id='heading'>{props.heading} </h1>
        <textarea className="form-control my-3" placeholder='Enter Text' value={text}            id="exampleFormControlTextarea1" onChange={handleChange} rows="8"> 
        </textarea>
        <button className="btn btn-primary " onClick={Case}>ConvertCase</button>  
        <button className="btn btn-danger mx-3" onClick={Clear}>ClearField</button>  
        <button className="btn btn-success mx-3" onClick={Sentence}>SentenceCase</button>  
        <button className='btn btn-danger' onClick={copy}>Copy</button>
        <button className='btn btn-primary mx-3' onClick={space}>RemoveExtraSpaces</button>
    </div>
    <div className="container my-3">
        <h3>Text Count</h3>
        <p>Number of total characters in my test area is :<b> {text.length} </b> and the total number of words are : <b> {text.split(" ").length} </b></p>.
        <p>Time to read your Text <b> {0.08*text.split(" ").length} </b></p>
        <button className="btn btn-secondary my-3" onClick={preview}>Preview</button>
        <p>{previewState?text:" "}</p>
        
    </div>
    
    </>
  )
}
