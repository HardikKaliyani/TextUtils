
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
 


function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  //const [alertType, setalertType] = useState("success");

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
      
    

  }


  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      showAlert("Dark Mode Enabled","success");
      document.body.style.backgroundColor='#213244';
      document.body.style.color='white';
      
    }
    else{
      setMode("light");
      showAlert("Light Mode Enabled","success");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
     
     
    }
  }
  return (
    
        <>
      {/* //  <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}   />

   <Alert alert={alert}  />
  <div className="container my-3">
  {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          
          </Route>
        </Switch> */}
        <TextForm heading="Enter Text below to utilize" toggleMode={toggleMode}  alert={alert} showAlert={showAlert} />

  </div>
  {/* </Router> */}
</>
  );
}

export default App;
