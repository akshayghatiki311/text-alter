import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const updateAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleDarkMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#292a30';
      updateAlert("Dark mode is enabled","success");   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert("Light mode is enabled","success");
    }
  }
  const toggleGreenDarkMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#032d16';
      updateAlert("Green mode is enabled","success");   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert("Light mode is enabled","success");
    }
  }
  const toggleRedDarkMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#500101';
      updateAlert("Red Dark mode is enabled","success");   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert("Light mode is enabled","success");
    }
  }
  const toggleBlueDarkMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#050f50';
      updateAlert("Blue mode is enabled","success");   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextAlter" mode = {mode} toggleDarkMode = {toggleDarkMode} toggleRedDarkMode = {toggleRedDarkMode} toggleGreenDarkMode = {toggleGreenDarkMode} toggleBlueDarkMode = {toggleBlueDarkMode}></Navbar>
    <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About mode = {mode} updateAlert={updateAlert} aboutus="About Me" />}></Route>
          <Route exact path="/" element={<TextForm heading = "Refactor Your Text" mode={mode} updateAlert={updateAlert}/>}></Route>
          <Route exact path="/home" element={<TextForm heading = "Refactor Your Text" mode={mode} updateAlert={updateAlert}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
