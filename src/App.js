import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import './App.css';
import './textRightToLeft.css';
import './3dCardImage.css';

import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';


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


      <div className="home-socials">

        {/* transparent bg */}
        <a className="home-social-icons" href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle glow-effect-links" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" /><span className="home-social-text" p>facebook.com/profile.php?id=100064311003388</span>
        </a>

        <a className="home-social-icons" href="tel:905-599-1345">
          <Image className="rounded-circle glow-effect-links" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
          <span className="home-social-text" p>Phil @ (647) 885-2384</span>
        </a>

        <a className="home-social-icons" href="mailto:phil@monteirohomes.ca">
          <img className="rounded-circle glow-effect-links" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />
          <span className="home-social-text">phil@monteirohomes.ca</span>
        </a>


        <a className="home-social-icons " href="https://www.instagram.com/monteirohomes/" target="_blank">
          <Image className="rounded-circle glow-effect-links" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" /><span className="home-social-text" p>instagram.com/monteirohomes/</span>
        </a>

      </div>
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


              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" className="services-dropdown" variant="secondary">
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

              {/* <LinkContainer to={"/Products"}> */}
              <NavDropdown title="Services" className="nav-fontstyle">
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.1" href="/services">ALL SERVICES</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.1" href="/kitchen">KITCHEN</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.2" href="/basement">BASEMENT</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.3" href="/garage">GARAGE</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.4" href="/pool">POOLS</NavDropdown.Item>
              </NavDropdown>
              {/* </LinkContainer> */}


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
          <Route path="/kitchen" element={<Kitchen />} />
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

      <p>Welcome to our expert home renovation services! As a trusted and experienced contractor, we take great pride in transforming houses into dream homes. Our dedicated team of professionals is committed to delivering exceptional results that exceed your expectations. Whether you're looking to update your kitchen, remodel your bathroom, or renovate your entire living space, we have the expertise and skills to bring your vision to life.<br /><br /> We understand that every home is unique, and we work closely with our clients to create personalized designs that reflect their style and preferences. From concept to completion, we handle every aspect of the renovation process with meticulous attention to detail, ensuring a seamless and stress-free experience for our clients. Our services encompass a wide range of specialties, including flooring, painting, plumbing, electrical work, cabinetry, and more.<br /><br /> With a focus on quality craftsmanship and using premium materials, we strive to enhance the beauty, functionality, and value of your home. We are committed to delivering projects on time and within budget, without compromising on quality. Customer satisfaction is our top priority, and we go the extra mile to ensure that our clients are delighted with the final results. Trust us with your home renovation needs, and let us turn your house into the home of your dreams. Contact us today to discuss your project and schedule a consultation.
      </p>


    </>
  );
}

function Kitchen() {
  return (
    <>
      <p>At our home renovation company, we specialize in providing top-notch kitchen remodeling services that will breathe new life into your culinary space. Our team of skilled professionals understands the significance of the kitchen as the heart of your home, and we are dedicated to creating a functional, stylish, and inviting space that meets your unique needs.<br /><br /> Whether you desire a complete kitchen overhaul or a targeted renovation, we offer a wide range of services to suit your requirements. From custom cabinetry and countertop installations to flooring upgrades and appliance replacements, we handle every aspect of your kitchen project with utmost care and attention to detail. Our team works closely with you to understand your vision, offering expert advice and guidance along the way.<br /><br /> We pride ourselves on using high-quality materials and employing innovative design techniques to ensure a stunning end result. With our kitchen renovation services, you can expect seamless project management, timely completion, and exceptional craftsmanship. Transform your kitchen into a space that reflects your style and enhances your daily life by entrusting us with your kitchen renovation project. Contact us today to get started on creating the kitchen of your dreams.</p>
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
          <img src="./img/before_kitchen.jpg" class="cover-image" />
        </div>
        <p class="title title-before before-after" >BEFORE</p>
        <p class="title title-after before-after">AFTER</p>
        <img src="./img/after_kitchen.jpg" class="character" />
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
      <h3>You have questions?</h3>
      <h3>We have answers!</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordHeading">How much does it cost to do?....</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">
            All our work is customized for your individual needs. We will provide you with a free estimate after we have a chance to discuss your project with you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="accordHeading">Why should I choose you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="accordHeading">What area's do you service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">
            We provide our services all throughtout the GTA and surrounding areas. Get in touch with us today about your home renovation project. We will make things right.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="accordHeading">?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="accordHeading">?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="accordHeading">?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordPara">

          </Typography>
        </AccordionDetails>
      </Accordion>


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
      <h3>Don't hestaite get in touch with us today!</h3>
      <div className="socials">

        {/* transparent bg */}
        <a className="social-icons" href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle glow-effect-links" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" /><span className="social-text" p>facebook.com/profile.php?id=100064311003388</span>
        </a><br />

        <a className="social-icons" href="tel:905-599-1345">
          <Image className="rounded-circle glow-effect-links" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
          <span className="social-text" p>Phil @ (647) 885-2384</span>
        </a><br />

        <a className="social-icons" href="mailto:phil@monteirohomes.ca">
          <img className="rounded-circle glow-effect-links" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />
          <span className="social-text">phil@monteirohomes.ca</span>
        </a><br />


        <a className="social-icons " href="https://www.instagram.com/monteirohomes/" target="_blank">
          <Image className="rounded-circle glow-effect-links" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" /><span className="social-text" p>instagram.com/monteirohomes/</span>
        </a>

      </div>
    </>
  );
}

export default App;
