import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Realisations from "./pages/Realisations/Realisations";
import Blog from "./pages/Blog/Blog";
import Contacte from "./pages/Contacte/Contacte";
import Mention from "./pages/Mentions.L/Mention";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Realisations" element={<Realisations/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contacte" element={<Contacte/>}/>
        <Route path="/Mention" element={<Mention/>}/>
      </Routes>

      </div>
     )
}

export default App;
