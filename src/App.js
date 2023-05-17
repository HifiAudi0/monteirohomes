import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import './textRightToLeft.css';
import './3dCardImage.css';

function App() {
  return (
    <>

      <Links />




    </>
  );
}

function Home() {
  return (
    <>
      {/* <!-- NAV BAR --> */}

      <div id="home"></div>

      <div className="bgImage">

        <video id="background-video" autoPlay loop muted>
          <source id="video-src" src="./img/bg.mp4" type="video/mp4">
          </source>
          Did not load video.
        </video>

      </div>

      <div class="text-container">
        <p class="target ">MONTEIRO HOMES</p>
      </div>

      <br />
      {/* <!-- NAV BAR ENDS --> */}
    </>
  );
}

function Links() {
  return (
    <>

      {/* <nav className="navbar navbar-expand-lg navbar-dark mx-auto">

        <div className="" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link fw-bold fs-3 active " aria-current="page" href="#home">HOME</a>
            <a className="nav-link fw-bold fs-3" href="/Services">SERVICES</a>
            <a className="nav-link fw-bold fs-3" href="#quote">QUOTE</a>
            <a className="nav-link fw-bold fs-3" href="#faq">FAQ</a>
            <a className="nav-link fw-bold fs-3" href="#contact">CONTACT</a>
          </div>
        </div>


      </nav> */}
      <Router>
        <Navbar scrolling dark expand="md" fixed="top"> {/* transparent bg */}

          <Nav className="mx-auto">



            <div className="nav">

              <Link to={"/Home"} className="nav-link">HOME
              </Link>


              <LinkContainer to={"/Services"}>
                <a href="/Services" id="" className="nav-link">SERVICES</a>
              </LinkContainer>


              <a href="/Faq" className="nav-link">FAQ</a>

              <img className="logo" src="./img/logo.png" />

              <a href="/Gallery" className="nav-link">GALLERY</a>

              <a href="/Quote" className="nav-link">QUOTE</a>


              <a href="/Contact" className="nav-link">CONTACT</a>


            </div>
          </Nav></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*">

          </Route>
        </Routes>
      </Router>
    </>
  );
}

function Services() {
  return (
    <>




    </>
  );
}

function Gallery() {
  return (
    <>
      <h3>Before</h3>
      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      <div class="card">
        <div class="wrapper">
          <img src="./img/before_basement.jpg" class="cover-image" />
        </div>
        <p class="title title-before before-after" >BEFORE</p>
        <p class="title title-after before-after">AFTER</p>
        <img src="./img/after_basement.jpg" class="character" />
      </div>
      {/* </a> */}


      <div class="card">
        <div class="wrapper">
          <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
        </div>
        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
      </div>



      <div class="card">
        <div class="wrapper">
          <img src="./img/before_walkway.jpg" class="cover-image" />
        </div>
        <p class="title title-before before-after" >BEFORE</p>
        <p class="title title-after before-after">AFTER</p>
        <img src="./img/after_walkway.jpg" class="character" />
      </div>

    </>
  );
}

function Faq() {
  return (
    <>
    </>
  );
}

function Quote() {
  return (
    <>
    </>
  );
}

function Contact() {
  return (
    <>
    </>
  );
}

export default App;
