import React from "react";
import { Link } from "react-router-dom";
import "./Services.css"
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";

const Services = () =>{
    return (
        <div>
            <Nav/>
            <main>
                <div className="image"></div>
                <div className="texte-center titre p-3">
                    <h1 className="text-uppercase ">mon offre de services</h1>
                    <p>Voici les prestations sur lesquelles je peut intervetir</p>
                </div>
                <div className="container  pt-4 pb-5 mt-5">
                    <div className="row g-3">
                        <div className="col-md-4 col-lg-4">
                            <div className="card uxd text-center mb-1 p-4 rounded-2">
                            <i className="fa-solid uxdI fa-desktop fa-2xl p-5"></i>
                            <h2 className="card-title text-uppercase">ux design</h2>
                            <p className="card-text ">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expériencede navigation optimale à l'internaute</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card uxd text-center mb-1 p-4">
                            <i class="fa-solid uxdI fa-file-code fa-2xl p-5 "></i>
                            <h2 className="card-title text-uppercase">développement web</h2>
                            <p className="card-text pb-4">Le <strong>développement de sites web </strong>repose sur l'utilisation des langages <span className="langages">HTML</span>, <span className="langages">CSS</span>, JavaScript et <span className="langages">PHP</span>.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card uxd text-center mb-1 p-4">
                            <i class="fa-solid uxdI fa-magnifying-glass-dollar fa-2xl p-5"></i>
                            <h2 className="card-title text-uppercase">réferencement</h2>
                            <p className="card-text ">Le <strong>référencement naturel d'un site</strong>, aussi appelé <span className="langages">SEO</span>, consiste à mettre des techniques en oeuvre pour <span className="fst-italic">améliorer sa position</span> dans les résultats des moteurs de recherche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer/>

        </div>
    )
}

export default Services;