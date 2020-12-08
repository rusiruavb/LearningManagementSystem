import React from 'react';
import '../../App.css'
import Button from '@material-ui/core/Button';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="#">Hexagon Acadamy</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Featuers</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Subjects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Physics</a>
                <a className="dropdown-item" href="#">Combine Maths</a>
                <a className="dropdown-item" href="#">Biology</a>
                <a className="dropdown-item" href="#">Chemistry</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="custom-input mr-sm-2" type="text" placeholder="User name" aria-label="Search"/>
            <input class="custom-input mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
            <Button variant="contained" color="primary" disableElevation type="submit"
              style={{outline: 'none', width: '100px', height: '40px', fontSize: '15px', background: '#0077FF',
              borderRadius: '8px'}}>login</Button>
          </form>
        </div>
      </nav>
    </div>
  )
}