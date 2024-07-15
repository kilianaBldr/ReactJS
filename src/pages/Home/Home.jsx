import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Nav />
            <main>
                <div className="presentation">
                    <div id="text">
                        <h1>Bonjour, je suis John Doe</h1>
                        <h2>Développpeur Web full stack</h2>
                        <button type="button" class="btn btn-primary"><Link to="/aPropos" className="proposBtn">En savoir plus</Link></button>
                    </div>
                </div>
                <section className="container propos" id="aPropos">
                    <div className="row">
                        <article className="col-md-6">
                            <h2 className="titre">A propos</h2>
                            <p>
                                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong className="fw-bold">intégrateur-développeur</strong> web au CEF. <br />
                                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br />
                                Basé à Lyon, je suis en recherche d'un alternance au seins d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br />
                                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                            </p>
                        </article>
                        <article className="col-md-6">
                            <div className="container">
                                <img src="../images/john-doe-about.jpg" alt="Image d'un homme aux cheuveux court avec une barbe courte qui ce concentre"/>
                                <h2>Mes Compétences</h2>
                                <div className="progressbar">
                                <p>HTML5 90%</p>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-danger" style={{ width: "90%" }}></div>
                                </div> <br />
                                <p>CSS3 80%</p>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-info" style={{ width: "80%" }}></div>
                                </div> <br />
                                <p>JAVASCRIPT 70%</p>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style={{ width: "70%" }}></div>
                                </div> <br />
                                <p>PHP 60% </p>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-sucess" style={{ width: "60%" }}></div>
                                </div> <br />
                                <p>React 50%</p>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-bar" style={{ width: "50%" }}></div>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main> <br />
            <Footer />
        </div>
    )
}

export default Home;