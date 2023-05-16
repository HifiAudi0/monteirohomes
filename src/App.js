import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
// import { LinkContainer } from "react-router-bootstrap";
import './App.css';

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

      <nav className="navbar navbar-expand-lg navbar-dark mx-auto">

        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

        <div className="" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link fw-bold fs-3 active " aria-current="page" href="#home">HOME</a>
            <a className="nav-link fw-bold fs-3" href="#features">SERVICES</a>
            <a className="nav-link fw-bold fs-3" href="#quote">QUOTE</a>
            <a className="nav-link fw-bold fs-3" href="#faq">FAQ</a>
            <a className="nav-link fw-bold fs-3" href="#contact">CONTACT</a>
          </div>
        </div>


      </nav>


      <div className="bgImage">

        <video id="background-video" autoPlay loop muted>
          <source id="video-src" src="./img/bg.mp4" type="video/mp4">
          </source>
          Did not load video.
        </video>

      </div>

      <br />
      {/* <!-- NAV BAR ENDS --> */}
    </>
  );
}

function Links() {
  return (
    <>
      <Router>
        <img className="logo" src="./img/the_clean_getaway_logo_transparent.png" />
        <div className="nav">

          <a href="/Home" className="nav-link">HOME</a>



          <a href="/Services" className="nav-link">SERVICES</a>


          <a href="/Faq" className="nav-link">FAQ</a>



          <a href="/Quote" className="nav-link">QUOTE</a>


          <a href="/Contact" className="nav-link">CONTACT</a>


        </div>

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
