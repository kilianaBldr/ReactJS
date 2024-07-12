import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Home;