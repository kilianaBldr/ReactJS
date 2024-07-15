import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Header/Nav";
import './Blog.css'
import Footer from "../Footer/Footer";


const Blog = () => {
    return (
        <div>
            <Nav />
            <main>
                <div className="imageBlog"></div>
                <div className="text-center titreBlog  p-3">
                    <h1 className="text-uppercase">blog</h1>
                    <p>Retrouver ici quelques articles sur le développement web.</p>
                </div>
                <div className="container mt-5 mb-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/coder.jpg" class="card-img-top" alt="image de plusieurs lignes de code" />
                                <div class="card-body">
                                    <h5 class="card-title">Coder son site en HTML/CSS</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">publier le 22 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/croissance.jpg" class="card-img-top" alt="image de plusieurs colonne de pieces ranger par ordre croissant" />
                                <div class="card-body">
                                    <h5 class="card-title">Vendre ses produits sur le web</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Publié le 20 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/google.jpg" class="card-img-top" alt="image d'un oridinateur ouvert sur la page google" />
                                <div class="card-body">
                                    <h5 class="card-title">se positionner sur Google</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Publié le 1 août 2022</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/screens.jpg" class="card-img-top" alt="image d'un écrans d'ordinateur , d'une tablette et d'un telephone" />
                                <div class="card-body">
                                    <h5 class="card-title">Coder en responsive design</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Publié le 31 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/seo.jpg" class="card-img-top" alt="image avec un font bleu avec plusieur mot ecrit dessus qui correspondent au mot SEO" />
                                <div class="card-body">
                                    <h5 class="card-title">Techniques de référencement</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Publié le 30 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="../images/blog/technos.png" class="card-img-top" alt="image qui réuni tout les langages et technologies disponible" />
                                <div class="card-body">
                                    <h5 class="card-title">Apprendre à coder</h5>
                                    <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary">Lire la suite</Link>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Publié le 12 juillet 2022</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blog;