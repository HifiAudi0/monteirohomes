import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import React, { useState, useCallback, useMemo, useRef } from 'react';

import './App.css';
import './textRightToLeft.css';
// import './3dCardImage.css';
// import './motion-container.css';
import './imageZoom.css';

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

import { useForm } from "react-hook-form";
import * as Yup from "yup";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

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

        <a href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle home-social-icons" src="./img/fb.png" alt="Facebook logo" />
          <span className="home-social-text">facebook.com/profile.php?id=100064311003388</span>
        </a><br className="home-social-responsiveness" />

        <a href="tel:905-599-1345">
          <Image className="rounded-circle home-social-icons" src="./img/phone.png" alt="A phone number to reach Phil at." />
          <span className="home-social-text">Phil @ (647) 885-2384</span>
        </a><br className="home-social-responsiveness" /><br className="home-socials-large-screens" />

        <a href="mailto:phil@monteirohomes.ca">
          <img className="rounded-circle home-social-icons" src="./img/email.png" alt="An email to each Phil at." />
          <span className="home-social-text">phil@monteirohomes.ca</span>
        </a><br className="home-social-responsiveness" />


        <a href="https://www.instagram.com/monteirohomes/" target="_blank">
          <span className="home-socials-icons-large-screens">
            <Image className="rounded-circle home-social-icons" src="./img/instagram.png" alt="Instagram logo" />
            <span className="home-social-text">instagram.com/monteirohomes/</span>
          </span>
        </a>

      </div >
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

        <Navbar scrolling dark expand="md"> {/* transparent bg */}

          <Nav className="mx-auto">





            <Link to={"/Home"} className="nav-link" id="navLink">HOME
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
            <NavDropdown title="Services & Gallery" className="nav-fontstyle nav-link">
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
            {/* 
              <a href="/Gallery" className="nav-link">GALLERY</a> */}

            <a href="/Quote" className="nav-link">QUOTE</a>


            <a href="/About" className="nav-link">ABOUT US</a>

            <a href="/Contact" className="nav-link">CONTACT</a>

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
          {/* <Route path="/Gallery" element={<Gallery />} /> */}
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
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



      <br /><br /><br /><br /><br /><br /><br /><br />




      <br /><br />
      <p className="servicesPara">Welcome to our expert home renovation services! As a trusted and experienced contractor, we take great pride in transforming houses into dream homes. Our dedicated team of professionals is committed to delivering exceptional results that exceed your expectations. Whether you're looking to update your kitchen, remodel your bathroom, or renovate your entire living space, we have the expertise and skills to bring your vision to life.<br /><br /> We understand that every home is unique, and we work closely with our clients to create personalized designs that reflect their style and preferences. From concept to completion, we handle every aspect of the renovation process with meticulous attention to detail, ensuring a seamless and stress-free experience for our clients. Our services encompass a wide range of specialties, including flooring, painting, plumbing, electrical work, cabinetry, and more.<br /><br /> With a focus on quality craftsmanship and using premium materials, we strive to enhance the beauty, functionality, and value of your home. We are committed to delivering projects on time and within budget, without compromising on quality. Customer satisfaction is our top priority, and we go the extra mile to ensure that our clients are delighted with the final results. Trust us with your home renovation needs, and let us turn your house into the home of your dreams. Contact us today to discuss your project and schedule a consultation.
      </p>

      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      {/* <h3 className="headingHover">Hover over the image to see the AFTER image.</h3> */}


      {/* <span p>BEFORE</span>
      <span p>AFTER</span> */}
      <span className="servicesImageContainer servicesImageContainerBefore">

        <img src="./img/before_basement.jpg" className="beforeImgOne beforeAfterImg" />

        <p class="beforeAfterText">BEFORE</p>
      </span>


      {/* </a> */}
      <span className="servicesImageContainer ">
        <img src="./img/after_basement.jpg" className="afterImgOne beforeAfterImg" />
        <p class="beforeAfterText">AFTER</p>
      </span >
      <br />

      <span className="servicesImageContainer servicesImageContainerBefore">
        <img src="./img/before_kitchen.jpg" class="beforeImgTwo beforeAfterImg" />
        <p class="beforeAfterText">BEFORE</p>
      </span >

      <span className="servicesImageContainer">
        <img src="./img/after_kitchen.jpg" class="afterImgTwo beforeAfterImg" />
        <p class="beforeAfterText">AFTER</p>
      </span >
      <br />





      <span className="servicesImageContainer servicesImageContainerBefore">
        <img src="./img/before_walkway.jpg" class="beforeImgThree beforeAfterImg" />
        <p class="beforeAfterText">BEFORE</p>
      </span >
      <span className="servicesImageContainer">
        {/* <p class="title title-before before-after" >BEFORE</p>
        <p class="title title-after before-after">AFTER</p> */}
        <img src="./img/after_walkway.jpg" class="afterImgThree beforeAfterImg" />
        <p class="beforeAfterText">AFTER</p>
      </span >
      <br /> <br /> <br /> <br />


      <Footer />
    </>
  );
}


function Kitchen() {


  return (

    <>
      <ImageZoom />

      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />

      {/* <!-- (A) LIGHTBOX CONTAINER --> */}
      <div id="lightbox"></div>





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
              <img src="./img/kitchen/kitchen1.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              <img src="./img/kitchen/kitchen2.jpg" className="kitchen image-border kitchen-image-right zoomD" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen3.jpg" className="kitchen image-border zoomD" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen4.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              {/* <img className="kitchen-card-bg" src="./img/cardBg.png"></img> */}
              <p className="kitchen-para alignedPara">We specialize in providing top-notch kitchen remodeling services that will breathe new life into your culinary space.<br /><br /> Our team of skilled professionals understands the significance of the kitchen as the heart of your home, and we are dedicated to creating a functional, stylish, and inviting space that meets your unique needs.<br /><br /> Whether you desire a complete kitchen overhaul or a targeted renovation, we offer a wide range of services to suit your requirements.<br /><br /> From custom cabinetry and countertop installations to flooring upgrades and appliance replacements, we handle every aspect of your kitchen project with utmost care and attention to detail.

                <br /><br /> Our team works closely with you to understand your vision, offering expert advice and guidance along the way.<br /><br /> We pride ourselves on using high-quality materials and employing innovative design techniques to ensure a stunning end result.<br /><br /> With our kitchen renovation services, you can expect seamless project management, timely completion, and exceptional craftsmanship.<br /><br /> Transform your kitchen into a space that reflects your style and enhances your daily life by entrusting us with your kitchen renovation project. Contact us today to get started on creating the kitchen of your dreams.
              </p>
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen5.jpg" className="kitchen image-border zoomD" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen6.jpg" className="kitchen image-border zoomD" />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen7.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen8.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen9.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen10.jpg" className="kitchen image-border zoomD" />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen11.jpg" className="kitchen image-border zoomD" />
            </div>
          </div>
        </motion.div >
        <br />   <br />

      </div >

      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}




function Bath() {
  return (

    <>

      <ImageZoom />

      {/* <!-- (A) LIGHTBOX CONTAINER --> */}
      <div id="lightbox"></div>

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

            <img src="./img/bath/bath1.jpg" className="bath-image image-border zoomD" />

          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath2.jpg" className="bath-image image-border zoomD" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath3.jpg" className="bath-image image-border zoomD" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath4.jpg" className="bath-image image-border zoomD" />
          </div>

          <div className="bath-grid-item">
            <p className="alignedPara">We specialize in providing exceptional bathroom renovation services that will transform your bathroom into a luxurious and functional retreat. Our team of skilled professionals understands the importance of a well-designed and comfortable bathroom, and we are dedicated to creating a space that reflects your personal style and meets your specific needs.<br /> <br />  Whether you're looking to update your fixtures, replace outdated tiles, or completely remodel your bathroom, we offer a wide range of services to suit your requirements. Our expertise includes bathroom layout redesign, bathtub and shower installations, vanity and countertop replacements, flooring upgrades, and lighting enhancements.<br /> <br />
              We work closely with you to understand your vision, offering creative solutions and expert advice to maximize the potential of your bathroom. With meticulous attention to detail and a commitment to using high-quality materials, we ensure a stunning end result that exceeds your expectations.<br /> <br />  From project management to timely completion, we handle every aspect of the renovation process with professionalism and care. Our goal is to create a bathroom that not only enhances your daily routine but also adds value to your home. Trust us with your bathroom renovation needs, and let us transform your bathroom into a space of relaxation, rejuvenation, and beauty. </p>
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath5.jpg" className="bath-image image-border zoomD" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath6.jpg" className="bath-image image-border zoomD" />
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath7.jpg" className="bath-image image-border zoomD" />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath9.jpg" className="bath-image image-border zoomD" />
          </div>

        </div >
      </motion.div >
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
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
      <ImageZoom />

      {/* <!-- (A) LIGHTBOX CONTAINER --> */}
      <div id="lightbox"></div>


      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool1.jpg" className="pool image-border zoomD" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool2.jpg" className="pool image-border zoomD" />
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
        <Image src="./img/pools/pool3.jpg" className="pool image-border zoomD" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool4.jpg" className="pool image-border zoomD" />
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool5.jpg" className="pool image-border zoomD" />
      </motion.div>

    </>
  );
}

function Deck() {
  return (
    <>
      <p>
        we offer a comprehensive range of services to transform your outdoor space, including deck, fencing, and patio renovations. Whether you're looking to revitalize your deck, upgrade your fencing, or create a stunning patio area, our experienced team is here to bring your vision to life. Our deck renovation services encompass everything from repairs and resurfacing to adding new features such as built-in seating, pergolas, or outdoor kitchens..<br /><br /> We understand that your deck is a gathering place for family and friends, and we strive to create a functional and aesthetically pleasing space that enhances your outdoor living experience. When it comes to fencing, we provide a variety of options, including wood, vinyl, or metal fencing, tailored to your privacy and security needs. Our expert team ensures precise installation and durable materials that withstand the test of time..<br /><br /> Additionally, our patio renovation services focus on transforming your outdoor area into a beautiful and functional space. We can assist with patio extensions, upgrades, or even a complete patio redesign to suit your style and lifestyle. Whether you desire a cozy outdoor lounge area or a space for outdoor dining and entertaining, we will work closely with you to create a personalized patio that meets your needs..<br /><br /> With our attention to detail, quality craftsmanship, and use of premium materials, we guarantee exceptional results that exceed your expectations. Trust us to renovate your deck, fencing, and patio, and let us help you create an outdoor sanctuary for relaxation, entertainment, and enjoyment.
      </p>
    </>
  );
}

function Gallery() {
  return (
    <>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      <h3 className="headingHover">Hover over the image to see the AFTER image.</h3>

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

      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />

    </>
  );
}

function Quote() {
  return (
    <>

    </>
  );
}


function About() {
  return (
    <>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="about-grid-container">

        <div className="about-grid-item">

          <img src="./img/van.jpg" className="vanPic" />
        </div>

        <div className="about-grid-item">
          <h3>About Us</h3>
          <h3>Family-Owned Contractor with 8 Years of Trusted Service</h3>
          <p>Welcome to our family-owned contracting business, where we have been proudly serving our community for the past 8 years. As a small business, we understand the importance of personalized service and building strong relationships with our clients..<br /><br /> With a passion for craftsmanship and a commitment to excellence, we have earned a reputation for delivering top-quality work and exceeding customer expectations. Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring attention to detail and meticulous execution..<br /><br /> From home renovations and remodeling to repairs and installations, we offer a comprehensive range of services tailored to meet your specific needs. As a family-owned business, we prioritize open communication, honesty, and integrity in all our interactions. We take pride in our work, treating every project as if it were our own, and ensuring customer satisfaction is our top priority..<br /><br /> With us, you can expect personalized attention, reliable service, and a finished result that will transform your space into something exceptional. Trust our family to enhance your home with our trusted contracting services.</p><br /><br />
        </div>
      </div>
      <br /><br /><br /><br /><br />

      <Footer />
    </>
  );
}

function Contact() {

  // document.querySelector("#ContactFormOne").classList.add = "hide";
  // document.querySelector("#ContactFormTwo").classList.add = "hide";



  return (
    <>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


      <div className="contact-grid-container">

        <div className="contact-grid-item">
          <h3>Contact Us</h3>

          <Card style={{ width: '18rem' }} className="contactCard">
            <Card.Img variant="top" src="./img/customerSupport.jpeg" />
            <Card.Body>
              <Card.Title className="contactCardTitle">Get in touch with us today!</Card.Title>
              {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
            <Card.Body>
              <Card.Link href="mailto:phil@monteirohomes.ca" className="contactCardLink"><img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Phil at." /><span p className="contactCardText">Email us</span></Card.Link><br />
              <Card.Link href="tel:905-599-1345" className="contactCardLink">     <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." /><span p className="contactCardText">Call us</span></Card.Link>
            </Card.Body>
          </Card >
        </div>

        <div className="contact-grid-item">
          <h3>Don't hesitate to get in touch with us today!</h3><br />
          <p className="alignedPara">We would love to hear from you! Please feel free to reach out to us with any inquiries or to discuss your upcoming project. Our team of experts is here to assist you every step of the way.<br /><br /> Whether you have questions about our services, need a consultation, or want to schedule an appointment, we are just a phone call or email away..<br /><br /> Don't hesitate to contact us and let us help you bring your home renovation dreams to life. We look forward to working with you!</p>
        </div>

        {/* <ContactForm /> */}

      </div>

      {/* <a href="mailto:phil@monteirohomes.ca">                <img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />Make an appointment</a> */}


      {/* <a className="social-icons" href="tel:905-599-1345">
                <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
                <span className="social-text" p>Phil @ (647) 885-2384</span>
              </a><br /> */}



      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

function ContactForm() {


  const useYupValidationResolver = (validationSchema) =>
    useCallback(
      async (data) => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });
          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? "validation",
                  message: currentError.message,
                },
              }),
              {}
            ),
          };
        }
      },
      [validationSchema]
    );
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register } = useForm({ resolver });




  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="email">Email Address:</label><br />
        <input
          id="email"
          type="email"
          {...register("email")}
        /><br />
        <label for="name">Full name:</label><br />
        <input
          id="name"
          type="name"
          {...register("name")}
        />
        <label for="phone">Phone number:</label><br />
        <input
          id="phone"
          type="phone"
          {...register("name")}
        />
        <input type="submit" />
      </form>
    </>
  );
}

// Use Controlled Components
function ControlledInput() {

  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
// Don't Use Uncontrolled Components
function UncontrolledInput() {

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid-container">
          <div className="footer-grid-item footer-grid-service-responsive">



            <h4>Service areas</h4>
            <br />
            <ul>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Georgetown
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Milton
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Oakville
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Burlington
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Etobicoke
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                Vaughan
              </li>
              <li className="alignedPara">
                <img className="checkmark" src='./img/checkmark.png' />
                and many more!
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">


            <h4> <img className="footer-logo" src="./img/logo.png" />Monteiro Homes</h4>
            <ul>

              <li>
                <h5>Custom Financing available</h5>
              </li>
            </ul>
            <h4>OFFICE HOURS</h4>
            <ul>
              <li className="alignedPara">Monday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; &nbsp; 9am - 5pm</span></li>
              <li className="alignedPara">Tuesday <span p className="hoursOfOperation alignedPara">&nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;9am - 5pm</span></li>
              <li className="alignedPara">Wednesday <span p className="hoursOfOperation alignedPara">&nbsp; 9am - 5pm</span></li>
              <li className="alignedPara">Thursday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; 9am - 5pm</span></li>
              <li className="alignedPara">Friday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;9am - 5pm</span></li>
            </ul>
          </div>



          <div className="footer-grid-item">
            <h4 className="footer-socials-heading">Socials</h4>
            <div className="alignedPara">



              <a className="social-icons" href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
                <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" /><span className="social-text" p>facebook.com/profile.php?id=100064311003388</span>
              </a><br />

              <a className="social-icons" href="tel:905-599-1345">
                <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
                <span className="social-text" p>Phil @ (647) 885-2384</span>
              </a><br />

              <a className="social-icons" href="mailto:phil@monteirohomes.ca">
                <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />
                <span className="social-text">phil@monteirohomes.ca</span>
              </a><br />


              <a className="social-icons" href="https://www.instagram.com/monteirohomes/" target="_blank">
                <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" /><span className="social-text" p>instagram.com/monteirohomes/</span>
              </a>


              {/* <a className="social-icons" href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
                <FacebookRoundedIcon className="footer-social-material-icon" sx={{ fontSize: 40 }} style={{ color: 'white' }} />
                <span className="social-text" p>Facebook</span>

              </a><br />

              <a className="social-icons" href="tel:905-599-1345">
                <SmartphoneIcon className="footer-social-material-icon" sx={{ fontSize: 40 }} style={{ color: 'white' }} />
                <span className="social-text" p>Phone</span>
              </a><br />

              <a className="social-icons" href="mailto:phil@monteirohomes.ca">
                <EmailIcon className="footer-social-material-icon" sx={{ fontSize: 40 }} style={{ color: 'white' }} />
                <span className="social-text">Email</span>
              </a><br />


              <a className="social-icons " href="https://www.instagram.com/monteirohomes/" target="_blank">
                <InstagramIcon className="footer-social-material-icon" sx={{ fontSize: 40 }} style={{ color: 'white' }} />
                <span className="social-text" p>Instagram</span>
              </a> */}

            </div>
          </div>
        </div>

      </footer>

    </>
  );
}

function ImageZoom() {
  window.onload = () => {
    // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
    let all = document.getElementsByClassName("zoomD"),
      lightbox = document.getElementById("lightbox");


    // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
    // * SIMPLY CLONE INTO LIGHTBOX & SHOW
    if (all.length > 0) {
      for (let i of all) {
        i.onclick = () => {
          let clone = i.cloneNode();
          clone.className = "";
          lightbox.innerHTML = "";
          lightbox.appendChild(clone);
          lightbox.className = "show";
        };
      }
    }

    // (C) CLICK TO CLOSE LIGHTBOX
    lightbox.onclick = () => lightbox.className = "";
  };
  return (
    <>
    </>
  );
}

export default App;
