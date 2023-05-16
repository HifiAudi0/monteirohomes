import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import './textRightToLeft.css';

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

      <div class="wrapper">
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



              <a href="/Quote" className="nav-link">QUOTE</a>


              <a href="/Contact" className="nav-link">CONTACT</a>


            </div>
          </Nav></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Faq" element={<Quote />} />
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
      <h3 id="services">Services offerd:</h3>
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
