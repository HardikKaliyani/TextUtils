
import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>


    <nav className={`navbar navbar-${props.mode} bg-${props.mode} justify-content-between`}>
  <a className="navbar-brand" >{props.title}</a>
  
    
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button><i className="fas fa-lightbulb" onClick={props.toggleMode}></i></button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
       {/* <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>   */}
      {/* <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li> */}
      
     
    </ul>
   
  </div>
  
</nav>

    </>
  );
}
