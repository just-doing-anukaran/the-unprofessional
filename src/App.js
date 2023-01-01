import "./App.scss";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Poster from "./Pages/Poster";
import ScrollToTop from "./Components/ScrollToTop";
import Vector from "./Pages/Vector";
import Logo from "./Pages/Logo";
import UIUX from "./Pages/UIUX";
import Tdart from "./Pages/Tdart";
import Invitation from "./Pages/Invitation";
import Book from "./Pages/Books";
import Product from "./Pages/Product";
import Apparel from "./Pages/Apparel";
import Interior from "./Pages/Interior";
import Video from "./Pages/Video";
import Animation from "./Pages/Animation";
import Album from "./Pages/Album";
import Underconst from "./Pages/Underconst";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/posterdesigns" element={<Poster />} />
      <Route path="/vectorillustrations" element={<Vector />} />
      <Route path="/logodesigns" element={<Logo />} />
      <Route path="/responsiveuiuxdesigns" element={<UIUX />} />
      <Route path="/3dart" element={<Tdart />} />
      <Route path="/invitationcards" element={<Invitation />} />
      <Route path="/bookdesigns" element={<Book />} />
      <Route path="/productdesigns" element={<Product />} />
      <Route path="/appareldesigns" element={<Apparel />} />
      <Route path="/interiordesigns" element={<Interior />} />
      <Route path="/videoediting" element={<Video/>} />
      <Route path="/animations" element={<Animation/>} />
      <Route path="/albumcoverdesigns" element={<Album/>} />
      <Route path="/Underconst" element={<Underconst/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
