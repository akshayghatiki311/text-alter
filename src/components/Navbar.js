import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className={`navbar-expand-lg navbar bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
          </ul>
          <ul className={`navbar-nav mb-1 text-${props.mode==='dark'?'light':'dark'}`}>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dark Modes
              </a>
              <ul className="dropdown-menu">
                <li><div className="pl-3 form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleGreenDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Green Mode</label>
                    </div>
                </li>
                <li><div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleRedDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Red Mode</label>
                    </div>
                </li>
                <li><div className="pl-3 form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleBlueDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Blue Mode</label>
                    </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleDarkMode('primary')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleDarkMode('danger')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleDarkMode('success')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleDarkMode('warning')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={()=>{props.toggleDarkMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}



export default Navbar
