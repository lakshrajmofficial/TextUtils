import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState([]);
  return (
    <>  
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>{props.label}</h2>
          <div className="mb-3">
              <textarea placeholder='Enter Text Here' className="form-control" id="myBox" rows="8" value={text} onChange={ (e) => setText(e.target.value)} style={{backgroundColor: props.mode === 'dark' ? '#031a3b' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
          </div>
          <div className"d-sm-block">
              <button className="btn btn-primary " onClick={clearTextClick.bind(this)}>Clear Text</button>
              <button className="btn btn-primary mx-3 my-3" onClick={toUpperCaseClick.bind(this)}>To Upper Case</button>
              <button className="btn btn-primary" onClick={toLowerCaseClick.bind(this)}>To Lower Case</button>
              <button className="btn btn-primary mx-3" onClick={extractEmailClick.bind(this)}>Extract Email ID's</button>
              <button className="btn btn-primary my-3" onClick={handleExtraSpaces.bind(this)}>Remove Extra Space</button>
          </div>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your Text Summary</h2>
          <p>{text.length && text.trim().split(" ").length} word and {text.trim().length} characters</p>
          {text && text.length &&
            <>
              <p>{text.trim().split(" ").length * 0.008} Minutes to Read</p>
              <h2>Preview</h2>
              <p>{text}</p>
              <h2>Emails in the above text</h2>
              <ul>
                {email && email.map((emailsList,i) => {
                    return(
                      emailsList.map(ele => {
                        return(
                          <li>{ele}</li>
                        )
                      })
                    )
                })}
              </ul>
            </>
          }
        </div>
    </>
  )

  function toUpperCaseClick(e){
    if(text.length){
      setText(text.toUpperCase())
      props.setAlertMessage("Converted to Uppercase","success")
    }else{
      props.setAlertMessage("Please enter some text to convert to Uppercase","danger")
    }
  }

  function toLowerCaseClick(e){
    if(text.length){
      setText(text.toLowerCase())
      props.setAlertMessage("Converted to Lowercase","success")
    }else{
      props.setAlertMessage("Please enter some text to convert to Lowercase","danger")
    }
  }

  function clearTextClick(e){
    setText('');
    setEmail([]);
    props.setAlertMessage("Text Box cleared","success")
  }

  function extractEmailClick(){ 
    const emailText =  
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g; 
    let emailTemp = text.match(emailText);
    if(email.indexOf(emailTemp) === -1){
      setEmail([emailTemp]);
    }
    if(emailTemp){
      props.setAlertMessage("Emails from the entered text have been extracted","success")
    }else{
      props.setAlertMessage("No Emails from the entered text have been extracted","danger")
    }
  } 

  function handleExtraSpaces(){
    if(text.length){
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.setAlertMessage("Extra Spaces Removed","success")
    }else{
      props.setAlertMessage("Please enter some text to remove spaces","danger")
    }
  }

}
