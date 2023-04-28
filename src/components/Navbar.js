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
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            {/*<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
  </li>*/}
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
          {/*<form className="d-flex mx-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
</form>*/}
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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
