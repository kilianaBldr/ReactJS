import React from "react";
import { Link } from "react-router-dom";
import "./Realisations.css"
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";

const Realisations = () =>{
    return (
        <div>
            <Nav/>
            <main>
                <main>
                    <div className="imageServices"></div>
                    <div className="text-center titreRealisation  p-3">
                        <h1 className="text-uppercase">portfolio</h1>
                        <p>Voici quelque-une de mes réalisations.</p>
                    </div>
                    <div className="container text-center">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <img src="../images/portfolio/fresh-food.jpg" class="card-img-top" alt="image d'un paniers avec plusieurs légumes de saison à l'intérieur"/>
      <div class="card-body">
        <h5 class="card-title">Fresh Food</h5>
        <p class="card-text">Réalisation d'un site de commande en ligne.</p>
        <Link to="#" className="btn btn-outline-primary">Voir</Link>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé avec PHP et MySQL</small>
      </div>
    </div>
  </div>
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <img src="../images/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="image de plusieurs sushi"/>
      <div class="card-body">
        <h5 class="card-title">Restaurant Akira</h5>
        <p class="card-text">Réalisation d'un site vitrine .</p>
        <Link to="#" className="btn btn-outline-primary">Voir</Link>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé avec WordPress</small>
      </div>
    </div>
  </div>
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <img src="../images/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="image d'une tête de bouda espace bien être "/>
      <div class="card-body">
        <h5 class="card-title">Espace bien-être</h5>
        <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être</p>
        <Link to="#" className="btn btn-outline-primary">Voir</Link>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Site réalisé en HTML/CSS</small>
      </div>
    </div>
  </div>
</div>
                    </div>
                </main>
            </main>
            <Footer/>
        </div>
    )
}

export default Realisations;