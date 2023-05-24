import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import React, { useState } from 'react';

import './App.css';
import './textRightToLeft.css';
import './3dCardImage.css';
// import './motion-container.css';

import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



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


      <div id="home"></div>

      <div className="bgImage">

        <video id="background-video" autoPlay loop muted>
          <source id="video-src" src="./img/bg.mp4" type="video/mp4">
          </source>
          Did not load video.
        </video>

      </div>

      <div className="text-container">
        <p id="target-id" className="target">MONTEIRO HOMES<br />SERVICING THE GTA<br />FULL HOME RENOVATION & DESIGN<br />CUSTOM FINANCING AVAILABLE</p>
      </div >

      <br />



      <div className="home-socials">

        {/* transparent bg */}
        <a className="home-social-icons" href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle glow-effect-links" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" /><span className="home-social-text">facebook.com/profile.php?id=100064311003388</span>
        </a>

        <a className="home-social-icons" href="tel:905-599-1345">
          <Image className="rounded-circle glow-effect-links" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." />
          <span className="home-social-text">Phil @ (647) 885-2384</span>
        </a>

        <a className="home-social-icons" href="mailto:phil@monteirohomes.ca">
          <img className="rounded-circle glow-effect-links" src="./img/email.png" width="60px" height="60px" alt="An email to each Phil at." />
          <span className="home-social-text">phil@monteirohomes.ca</span>
        </a>


        <a className="home-social-icons" href="https://www.instagram.com/monteirohomes/" target="_blank">
          <Image className="rounded-circle glow-effect-links" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" /><span className="home-social-text">instagram.com/monteirohomes/</span>
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
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.1" href="/kitchen">KITCHEN</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.1" href="/bath">BATHS</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.2" href="/basement">BASEMENT</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.3" href="/garage">GARAGE</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.4" href="/pool">POOLS</NavDropdown.Item>
                <NavDropdown.Item className="nav-fontstyle" eventKey="4.4" href="/deck">FENCING, DECKS & PATIOS</NavDropdown.Item>
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
          <Route path="/bath" element={<Bath />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/deck" element={<Deck />} />
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

      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />

      <div className="kitchenHeading">
        <h3>Elevate Your Culinary Space with Our Kitchen Renovation Services</h3>
        <h4>Customized Solutions for a Beautiful and Functional Kitchen Transformation.</h4>
      </div>

      <div className="kitchen-container">
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
          <div className="grid-container">
            <div className="grid-item">
              <img src="./img/kitchen/kitchen1.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              <img src="./img/kitchen/kitchen2.jpg" className="kitchen image-border kitchen-image-right" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen3.jpg" className="kitchen image-border" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen4.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              {/* <img className="kitchen-card-bg" src="./img/cardBg.png"></img> */}
              <p className="kitchen-para alignedPara">We specialize in providing top-notch kitchen remodeling services that will breathe new life into your culinary space.<br /><br /> Our team of skilled professionals understands the significance of the kitchen as the heart of your home, and we are dedicated to creating a functional, stylish, and inviting space that meets your unique needs.<br /><br /> Whether you desire a complete kitchen overhaul or a targeted renovation, we offer a wide range of services to suit your requirements.<br /><br /> From custom cabinetry and countertop installations to flooring upgrades and appliance replacements, we handle every aspect of your kitchen project with utmost care and attention to detail.

                <br /><br /> Our team works closely with you to understand your vision, offering expert advice and guidance along the way.<br /><br /> We pride ourselves on using high-quality materials and employing innovative design techniques to ensure a stunning end result.<br /><br /> With our kitchen renovation services, you can expect seamless project management, timely completion, and exceptional craftsmanship.<br /><br /> Transform your kitchen into a space that reflects your style and enhances your daily life by entrusting us with your kitchen renovation project. Contact us today to get started on creating the kitchen of your dreams.
              </p>
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen5.jpg" className="kitchen image-border" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen6.jpg" className="kitchen image-border" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen7.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen8.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen9.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen10.jpg" className="kitchen image-border" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen11.jpg" className="kitchen image-border" />
            </div>
          </div>
        </motion.div >
        <br />   <br />

      </div >
    </>
  );
}

function Bath() {
  return (

    <>
      <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />
      <div className="kitchenHeading">
        <h3>Transform Your Bathroom into a Personal Oasis</h3>
        <h4>Professional Bathroom Renovation Services Tailored to Your Style and Needs.</h4>
      </div>

      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}>
        <div className="bath-grid-container">
          <div className="bath-grid-item">

            <img src="./img/bath/bath1.jpg" className="bath-image image-border" />

          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath2.jpg" className="bath-image image-border" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath3.jpg" className="bath-image image-border" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath4.jpg" className="bath-image image-border" />
          </div>

          <div className="bath-grid-item">
            <p className="alignedPara">We specialize in providing exceptional bathroom renovation services that will transform your bathroom into a luxurious and functional retreat. Our team of skilled professionals understands the importance of a well-designed and comfortable bathroom, and we are dedicated to creating a space that reflects your personal style and meets your specific needs.<br /> <br />  Whether you're looking to update your fixtures, replace outdated tiles, or completely remodel your bathroom, we offer a wide range of services to suit your requirements. Our expertise includes bathroom layout redesign, bathtub and shower installations, vanity and countertop replacements, flooring upgrades, and lighting enhancements.<br /> <br />
              We work closely with you to understand your vision, offering creative solutions and expert advice to maximize the potential of your bathroom. With meticulous attention to detail and a commitment to using high-quality materials, we ensure a stunning end result that exceeds your expectations.<br /> <br />  From project management to timely completion, we handle every aspect of the renovation process with professionalism and care. Our goal is to create a bathroom that not only enhances your daily routine but also adds value to your home. Trust us with your bathroom renovation needs, and let us transform your bathroom into a space of relaxation, rejuvenation, and beauty. </p>
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath5.jpg" className="bath-image image-border" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath6.jpg" className="bath-image image-border" />
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath7.jpg" className="bath-image image-border" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath9.jpg" className="bath-image image-border" />
          </div>

        </div >
      </motion.div >


    </>
  );
}

function Basement() {
  return (
    <>
      <p>
        Whether you envision a cozy entertainment area, a home office, a guest suite, or a personal gym, we have the expertise to bring your basement renovation dreams to life. Our dedicated team of professionals works closely with you to understand your vision and design a customized plan that maximizes the potential of your basement. From framing and insulation to drywall installation, flooring, and lighting, we handle every aspect of the renovation process with meticulous attention to detail. We also offer expertise in plumbing and electrical work to ensure that your basement meets all your requirements. With our commitment to quality craftsmanship and the use of premium materials, we create a finished basement that seamlessly blends with the rest of your home. Our project management approach ensures timely completion and open communication throughout the renovation process, providing you with peace of mind. Trust us to transform your basement into a functional and inviting space that suits your lifestyle and exceeds your expectations.
      </p>
    </>
  );
}

function Garage() {
  return (
    <>
      <p>
        we take pride in offering comprehensive garage renovation services that will transform your garage into a functional and organized space. Whether you're looking to convert your garage into a workshop, create a home gym, or simply optimize its storage capabilities, our experienced team is here to help. We begin by understanding your specific goals and requirements, and then we design a customized plan to maximize the potential of your garage. Our services include everything from installing durable and easy-to-clean flooring to customizing storage solutions, such as cabinets, shelving, and overhead racks, to efficiently utilize the space. We can also assist with insulation, lighting, and electrical work to ensure that your garage is comfortable and well-lit. With our attention to detail and commitment to quality craftsmanship, we deliver outstanding results that not only enhance the functionality of your garage but also elevate its aesthetics. Our skilled team manages the entire renovation process, from concept to completion, ensuring a smooth and hassle-free experience for you. Turn your garage into a versatile and organized space that adds value to your home.
      </p>
    </>
  );
}

function Pool() {
  return (
    <>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool1.jpg" className="pool image-border" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool2.jpg" className="pool image-border" />
        <br /> <br /> <br />
      </motion.div>
      <p className="poolPara">
        <br /><br />
        Whether your pool requires a complete overhaul or targeted upgrades, our experienced team is here to help. We understand that a pool is not only a place for relaxation and enjoyment but also a focal point of your outdoor space.<br /><br /> Our pool renovation services encompass a wide range of solutions, including resurfacing, tile replacement, coping repairs, equipment upgrades, and lighting enhancements. We work closely with you to understand your specific needs and desires, providing expert advice and creative ideas to transform your pool into a stunning retreat.<br /><br /> With meticulous attention to detail and using high-quality materials, we ensure a durable and aesthetically pleasing end result. Our skilled professionals manage the entire renovation process, from initial consultation and design to the final installation, ensuring a smooth and hassle-free experience for you.<br /><br /> Whether you want to restore an old pool to its former glory or upgrade your pool with modern features, we have the expertise to deliver exceptional results. Enhance the beauty and functionality of your pool with our professional renovation services.<br />
      </p>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool3.jpg" className="pool image-border" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool4.jpg" className="pool image-border" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool5.jpg" className="pool image-border" />
      </motion.div>

    </>
  );
}

function Deck() {
  return (
    <>
      <p>
        we offer a comprehensive range of services to transform your outdoor space, including deck, fencing, and patio renovations. Whether you're looking to revitalize your deck, upgrade your fencing, or create a stunning patio area, our experienced team is here to bring your vision to life. Our deck renovation services encompass everything from repairs and resurfacing to adding new features such as built-in seating, pergolas, or outdoor kitchens. We understand that your deck is a gathering place for family and friends, and we strive to create a functional and aesthetically pleasing space that enhances your outdoor living experience. When it comes to fencing, we provide a variety of options, including wood, vinyl, or metal fencing, tailored to your privacy and security needs. Our expert team ensures precise installation and durable materials that withstand the test of time. Additionally, our patio renovation services focus on transforming your outdoor area into a beautiful and functional space. We can assist with patio extensions, upgrades, or even a complete patio redesign to suit your style and lifestyle. Whether you desire a cozy outdoor lounge area or a space for outdoor dining and entertaining, we will work closely with you to create a personalized patio that meets your needs. With our attention to detail, quality craftsmanship, and use of premium materials, we guarantee exceptional results that exceed your expectations. Trust us to renovate your deck, fencing, and patio, and let us help you create an outdoor sanctuary for relaxation, entertainment, and enjoyment.
      </p>
    </>
  );
}

function Gallery() {
  return (
    <>

      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      <div className="body-container">
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
      </div>

      <Footer />
    </>
  );
}

function Faq() {


  return (
    <>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",

          stiffness: 260,
          damping: 20
        }}>
        <Image src="./img/faq.png" className="faq" /><br />
      </motion.div >


      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}>
        <div>
          <h3 className="faq-heading">You have questions?</h3>
          <h3 className="faq-heading">We have answers!</h3>
        </div>
      </motion.div >

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20
        }}>
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
              We are a family owned and operated business. We take great pride in our work and treat every project as if it were our own home. We are fully licensed and have been in business for over 8 years. We have many satisfied customers and would be happy to provide you with references.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">What area's do you service?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              We provide our services all throughtout the GTA and surrounding areas. Including but not limited to: Georgetown, Milton, Oakville, Burlington, Etobicoke, Vaughan and more. If your unsure if we service your area, please contact us.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">What payment methods do you accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              We accept cash, cheque, e-transfer. Credit cards are not accepted. Financing is available, please contact us for more information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">

            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>

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
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h3>Don't hesitate get in touch with us today!</h3>
      <p>We would love to hear from you! Please feel free to reach out to us with any inquiries or to discuss your upcoming project. Our team of experts is here to assist you every step of the way. Whether you have questions about our services, need a consultation, or want to schedule an appointment, we are just a phone call or email away. Don't hesitate to contact us and let us help you bring your home renovation dreams to life. We look forward to working with you!</p>
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

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid-container">
          <div className="footer-grid-item">

            <h4>Service areas:</h4>
            <ul>
              <li>
                Georgetown
              </li>
              <li>
                Milton
              </li>
              <li>
                Oakville
              </li>
              <li>
                Burlington
              </li>
              <li>
                Etobicoke
              </li>
              <li>
                Vaughan
              </li>
              <li>
                an many more!
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">

            <h4>Monteiro Homes</h4>
            <ul>

              <li>
                <h5>Custom Financing available</h5>
              </li>
            </ul>
          </div>


          <div className="footer-grid-item">
            <div className="alignedPara">

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
          </div>
        </div>

      </footer>

    </>
  );
}

export default App;
