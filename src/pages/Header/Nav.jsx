import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg font-weight-bold bg-dark">
        <div class="container-fluid">
        <Link to="/" className="navbar-brand text-white font-weight-bold text-uppercase texte-light">Jonh Doe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link active text-white py-3 px-0 px-lg-3 ">Accueil</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link to="/Services" className="nav-link text-white py-3 px-0 px-lg-3 ">Services</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link to="/Realisations" className="nav-link text-white py-3 px-0 px-lg-3 ">Réalisations</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link to="/Blog" className="nav-link text-white py-3 px-0 px-lg-3 ">Blog</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"><Link to="/Contacte" className="nav-link text-white py-3 px-0 px-lg-3 ">Contact</Link></li>
                </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;