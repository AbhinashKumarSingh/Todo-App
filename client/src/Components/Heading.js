import React from 'react'
import {Link} from 'react-router-dom'
//import { BrowserRouter,Route } from 'react-router-dom'
//import Signup from './Signup'
export const Heading=()=>{
    return (
        <>
        
        <div className="heading">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbarbrand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse">
    <ul className="navitems">
      <li >
        <a className="nav-link" href="/Signin">Signin </a>
      </li>
      <li >
      <Link className="nav-link" to="/Signup">Signup </Link>
      
      </li>
      <li >
        <Link className="nav-link" to="#">Boards Management</Link>
      </li>
      
    </ul>
    
  </div>
</nav>


        </div>
        
        </>
    )
} 