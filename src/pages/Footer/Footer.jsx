import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css"

const Footer = () =>{
    return(
        <footer>
            <div className="container lien">
                <div className="row">
                    <article className="col-md-6 col-lg-3">
                        <h4>John Doe</h4>
                        <address>
                            40 rue Laure Diebold <br />
                            69009 Lyon, France <br />
                            Téléphone : 06 20 30 40 50 <br />
                            <div>
                            <Link to="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></Link>                            
                            <Link to="https://x.com/?lang=fr" target="_blank"><i className="fa-brands fa-square-twitter"></i></Link>
                            <Link to="https://www.linkedin.com"target="_blank"><i class="fa-brands fa-linkedin"> </i></Link>
                            </div>
                        </address>
                    </article>
                    <article className="lien col-md-6 col-lg-3">
                        <h4>Liens utiles</h4>
                        <Link to="/"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Accueil</Link> <br />
                        <Link to="/aPropos"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> A propos</Link> <br />
                        <Link to="/Services"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Services</Link> <br />
                        <Link to="/Contacte"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Me contacter</Link> <br />
                        <Link to="/Mention"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Mentions légales</Link>
                    </article>
                    <article className="col-md-6 col-lg-3">
                        <h4>Mes dernières réalisations</h4>
                        <Link to="/Realisations"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Fresh Food</Link> <br />
                        <Link to="/Realisations"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Restaurant Akire</Link> <br />
                        <Link to="/Realisations"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Espace bien-être</Link>

                    </article>
                    <article className="col-md-6 col-lg-3">
                        <h4>Mes derniers Articles</h4>
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Coder son site en HTML/CSS</Link> <br />
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Vendre ses produits sur le Web</Link> <br />
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"style={{color:"#0d6efd"}}></i> Se positionner sur Google</Link>
                    </article>

                </div>
            </div>
            <div className="copyright">
                &copy; Designed by <Link to="/" className="text-white">John Doe</Link>
            </div>
        </footer>
    )
} 
export default Footer;