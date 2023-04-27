import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function About(props) {
    const [darkMode,setDarkMode] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '3px solid white'
    });

    const [darkModeButtonText,setDarkModeButtonText] = useState('Enable Dark Mode');

    const handleDarkMode = ()=>{
        if(darkModeButtonText === 'Enable Dark Mode'){
            setDarkModeButtonText('Disable Dark Mode');
            setDarkMode({
                color: 'white',
                backgroundColor: 'black',
                border: '3px solid black'
            });
        }
        else{
            setDarkModeButtonText('Enable Dark Mode');
            setDarkMode({
                color: 'black',
                backgroundColor: 'white',
                border: '3px solid white'
            });
        }
    }
  return (
    <>
    <div className='container' style={darkMode}>
        <h1 className='my-3'>{props.aboutus}</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Who Am I?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Akshay Ghatiki</strong>
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What do I do?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Software Developer</strong>
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Why TextAlter?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Because you will need it</strong>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="container my-3">
        <button className="btn btn-primary" onClick={handleDarkMode}>{darkModeButtonText}</button>
    </div>
    </>
  )
}

export default About