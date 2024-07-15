import React from "react"
import { Link } from "react-router-dom"
import "./Mention.css"
import Nav from "../Header/Nav"
import Footer from "../Footer/Footer"

const Mention = () =>{
    return(
        <div>
               <Nav/>
               <main>
                <div className=" text-uppercase text-center m-4 p-5">
                    <h1 className="titreMention">Mentions légales</h1>
                </div>
                <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Editeur du site
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h3>John Doe</h3>
      <address>
        <i className="fa-solid fa-location-dot"><span className="lienMention">40 Rue Laure Diebold, <br />
        69009 Lyon, France
        </span></i> <br />
        <i className="fa-solid fa-mobile-screen-button"></i><Link to="tel:+0620304050" className="lienMention" target="_blank">06 20 30 40 50</Link> <br />
        <i class="fa-solid fa-envelope"><Link to="mailto:john.doe@gmail.com"className="lienMention" target="_blank">john.doe@gmail.com</Link></i>
        </address>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h3>Always Data</h3>
        <address>
            91 rue du Faubourg Saint Honoré <br />
            72008 Paris
        </address>
        <i class="fa-solid fa-globe"><Link to="https://www.alwaysdata.com/fr/" className="lienMention" target="_blank">www.alwaysdata.com</Link></i>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h3>Crédits</h3>
        <p>Site développé par John Doe, étudiant du CEF. <br />
        Les images libres de droit sont issues du site<Link to="https://pixabay.com/fr/" className="lienMention" target="_blank">Pixabay</Link>.
        </p>
      </div>
    </div>
  </div>
</div>
               </main>
               <Footer/>
        </div>
    )
}
export default Mention;