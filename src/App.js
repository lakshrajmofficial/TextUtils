import React, { useState }  from 'react';
import Navbar from "./components/Navbar Component/Navbar";
import TextForm from "./components/Text Form Component/TextForm";
import About from './components/About Component/About';
import navbarPropsData from './JsonConfigs/navbarJSONConfig.json';
import AlertComponent from './components/Alert Component/AlertComponent';
/* import {
  Routes,
  Route
} from "react-router-dom"; */

function App() {

  /*
    Nav bar json
    text -> Text to display for Navbar item
    link -> Link to redirect on click of the item
    type -> link -> single item
            dropdown -> Sub Menu for an item
            Search -> Search Bar  
  */
  let navbarProps = navbarPropsData

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({});

  return (
   <>
      <Navbar title="TextUtils" navbarProps={navbarProps} toggleMode={toggleMode} mode={mode} setAlertMessage={setAlertMessage}/>
      <AlertComponent alert={alert}/>

{/*       <Routes>
        <Route path='/' element={<TextForm label="Text Area" mode={mode} setAlertMessage={setAlertMessage}/>}/>
        <Route path='/about' element={<About mode={mode} setAlertMessage={setAlertMessage}/>}/>
      </Routes> */}

      <div className="container my-3">
        <TextForm label="Text Area" mode={mode} setAlertMessage={setAlertMessage}/>
      </div>
      {/*<div className="container my-5">
      <About mode={mode} setAlertMessage={setAlertMessage}/>
      </div>*/}
      
   </>
  );

  function toggleMode(){
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#031a3b"
      setAlertMessage("Dark Mode Enabled Successfully","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      setAlertMessage("Light Mode Enabled Successfully","success")
    }
  }

  function setAlertMessage(message, type){
    setAlert({message:message, type:type})
    setTimeout(()=>{
      setAlert({})
    },2000)
  }

}

export default App;
