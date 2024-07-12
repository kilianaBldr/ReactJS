import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css"

const Footer = () =>{
    return(
        <footer>
            <div className="container lien">
                <div className="row">
                    <article className="col-md-3">
                        <h4>John Doe</h4>
                        <address>
                            40 rue Laure Diebold <br />
                            69009 Lyon, France <br />
                            Téléphone : 06 20 30 40 50
                            <i class="fa-brands fa-github"></i>                            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
                            <i className="fa-brands fa-square-twitter"></i>
                        </address>
                    </article>
                    <article className="col-md-3">
                        <h4>Liens utiles</h4>
                        <Link to="/"><i className="fa-solid fa-chevron-right"></i>Accueil</Link> <br />
                        <Link to="/"><i className="fa-solid fa-chevron-right"></i>A propos</Link> <br />
                        <Link to="/Services"><i className="fa-solid fa-chevron-right"></i>Services</Link> <br />
                        <Link to="/Contacte"><i className="fa-solid fa-chevron-right"></i>Me contacter</Link> <br />
                        <Link to="/Mention"><i className="fa-solid fa-chevron-right"></i>Mentions légales</Link>
                    </article>
                    <article className="col-md-3">
                        <h4>Mes dernières réalisations</h4>
                        <Link to="/Realisation"><i className="fa-solid fa-chevron-right"></i>Fresh Food</Link> <br />
                        <Link to="/Realisation"><i className="fa-solid fa-chevron-right"></i>Restaurant Akire</Link> <br />
                        <Link to="/Realisation"><i className="fa-solid fa-chevron-right"></i>Espace bien-être</Link>

                    </article>
                    <article className="col-md-3">
                        <h4>Mes derniers Articles</h4>
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"></i>Coder son site en HTML/CSS</Link> <br />
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"></i>Vendre ses produits sur le Web</Link> <br />
                        <Link to="/Blog"><i className="fa-solid fa-chevron-right"></i>Se positionner sur Google</Link>
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