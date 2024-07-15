import React from "react";
import { Link } from "react-router-dom";
import './Contacte.css'
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";

const Contacte = () =>{
    return (
        <div>
            <Nav/>
            <main>
                <form className="imageFond p-4">
                    <div className="container formulaire p-5">
                        <div className="text-center titreContact">
                            <h1 className="text-uppercase">Me contacter</h1>
                            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        </div>
                        <div className="container row d-flex justify-content-end gap-4 p-4">
                            <div className="row col-md-6 col-lg-6 ">
                                <h2 className="titreForm">Formulaire de contact</h2>
                                <label htmlFor="name"></label>
                                <input type="text" name="name" id="name" placeholder="Votre nom" required/>
                                <label htmlFor="mail"></label>
                                <input type="text" name="email" id="email" placeholder="Votre adresse email" required/>
                                <label htmlFor="phone"></label>
                                <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone" pattern="[0-9]{10}" required/>
                                <label htmlFor="subject"></label>
                                <input type="text" name="subject" id="subject" placeholder="Sujet" required/>
                                <label htmlFor="message"></label>
                                <textarea type="textarea" rows="4" name="message" id="message" placeholder="Votre message"  required/>
                                <div className="buttonForm text-center">
                                    <button type="submit" className="btn btn-primary mt-3">Envoyer</button>
                                </div>
                            </div>
                            <div className="row col-md-6 col-lg-6">
                                <h2 className="titreForm pb-3">Mes coordonées</h2>
                                <address>
                                    <i class="fa-solid fa-location-dot"><span className="coordonneText">40 Rue Laure Dielbold, 69009 Lyon, France</span></i> <br />
                                    <i class="fa-solid fa-mobile-screen"><span className="coordonneText">06.20.30.40.50</span></i>
                                </address>
                                <iframe width="400" height="300" style={{border:0}} referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=40%20Rue%20Laure%20Dielbold,%2069009%20Lyon,%20France+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default Contacte;