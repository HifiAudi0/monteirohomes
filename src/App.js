import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';

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

import { InstagramEmbed } from 'react-social-media-embed';

import './ButtonAnimation.css';

import './textAnimation.css';

// import $ from 'jquery';

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

var navLightColor = "white";
var navDarkColor = "black";


function ChangeNavColor(props) {
  useEffect(() => {
    const allNavLinks = document.querySelectorAll(".nav-link")
    const navCompanyName = document.querySelectorAll(".companyName")
    // console.log("PROPS..........", props.color);

    allNavLinks.forEach((link) => {
      // link.classList.add = "nav-color-dark";
      //link.setAttribute("id", "nav-not-homepage");
      link.style.color = props.color

      // link.classList.remove("nav-color-light");
    });

    navCompanyName.forEach((aLink) => {
      // link.classList.add = "nav-color-dark";
      //link.setAttribute("id", "nav-not-homepage");
      aLink.style.color = props.color

      // link.classList.remove("nav-color-light");
    });

  }, []);

  return (
    <>
    </>
  );
}




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

      <ChangeNavColor color={navDarkColor} />


      <div id="home"></div>

      {/* <div className="bgImage"> */}

      {/* poster="./img/kitchen/kitchen8.jpg" */}
      {/* <button className="active">play</button> */}

      {/* BUG FIX - Video would play full-screen (unwanted) on iOS devices.
    The solution was to add the playsInline attribute to the video tag.
    More importantly its "playsInline" in React. If you use "playsinline" it will not work. */}

      <video id="background-video" playsInline autoPlay loop muted preload="auto">
        <source id="video-src" src="./img/bg-480pSD.mp4" type="video/mp4" alt="A video of a beautify custom built home living rooma and patio." >
        </source>
        Did not load video.
      </video>


      {/* </div> */}
      {/* <img className="companyName" src="./img/companyName.svg" /> */}

      <div className="text-container">
        <p id="target-id" className="target">SERVICING THE GTA<br />FULL HOME RENOVATION & DESIGN<br />CUSTOM FINANCING AVAILABLE</p>
      </div >

      <br />



      <div className="home-socials">

        <a href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle home-social-icons" src="./img/fb.png" alt="Facebook logo" />
          <span className="home-social-text">facebook.com/MonteiroHomes</span>
        </a><br className="home-social-responsiveness" />

        <a href="tel:(647)885-2384">
          <Image className="rounded-circle home-social-icons" src="./img/phone.png" alt="A phone number to reach Phil at." />
          <span className="home-social-text">Phil @ (647) 885-2384</span>
        </a><br className="home-social-responsiveness" /><br className="home-socials-large-screens" />

        <a href="mailto:phil@monteirohomes.ca">
          <img className="rounded-circle home-social-icons home-social-icons-email home-social-email" src="./img/email.png" alt="An email to each Phil at." />
          <span className="home-social-text home-social-text-email">phil@monteirohomes.ca</span>
        </a><br className="home-social-responsiveness" />


        <a href="https://www.instagram.com/monteirohomes/" target="_blank">
          <span className="home-socials-icons-large-screens">
            <Image className="rounded-circle home-social-icons home-social-instagram" src="./img/instagram.png" alt="Instagram logo" />
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

        <Navbar scrolling dark expand="md" id="navbar"> {/* transparent bg */}

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
              <NavDropdown.Item className="nav-fontstyle" eventKey="4.3" href="/garage" disabled>GARAGE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-fontstyle" eventKey="4.4" href="/pool">POOLS</NavDropdown.Item>
              <NavDropdown.Item className="nav-fontstyle" eventKey="4.4" href="/deck">FENCING, DECKS & PATIOS</NavDropdown.Item>
            </NavDropdown>
            {/* </LinkContainer> */}


            <a href="/Faq" className="nav-link">FAQ</a>

            <img className="logo" src="./img/logo.png" alt="A picture of the Monterio homes logo." />
            <span><p className="companyName">onteiro Homes</p></span>


            {/* 
              <a href="/Gallery" className="nav-link">GALLERY</a> */}

            <a href="/Quote" className="nav-link" id="nav-link-quote">QUOTE</a>


            <a href="/About" className="nav-link">ABOUT US</a>

            <a href="/Contact" className="nav-link">CONTACT</a>
            <br />
          </Nav></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bath" element={<Bath />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/garage" element={<Services />} />
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
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />
      <br /><br />
      <h3 className="basementHeading">Comprehensive Renovation Services for Your Dream Home Transformation</h3>
      <h4 className="basementHeading">From Kitchen to Bathroom, Deck to Basement - We've Got You Covered!</h4>


      <br /><br />
      <p className="servicesPara">Welcome to our expert home renovation services! As a trusted and experienced contractor, we take great pride in transforming houses into dream homes. Our dedicated team of professionals is committed to delivering exceptional results that exceed your expectations. Whether you're looking to update your kitchen, remodel your bathroom, or renovate your entire living space, we have the expertise and skills to bring your vision to life.<br /><br /> We understand that every home is unique, and we work closely with our clients to create personalized designs that reflect their style and preferences. From concept to completion, we handle every aspect of the renovation process with meticulous attention to detail, ensuring a seamless and stress-free experience for our clients. Our services encompass a wide range of specialties, including flooring, painting, plumbing, electrical work, cabinetry, and more.<br /><br /> With a focus on quality craftsmanship and using premium materials, we strive to enhance the beauty, functionality, and value of your home. We are committed to delivering projects on time and within budget, without compromising on quality. Customer satisfaction is our top priority, and we go the extra mile to ensure that our clients are delighted with the final results. Trust us with your home renovation needs, and let us turn your house into the home of your dreams. Contact us today to discuss your project and schedule a consultation.
      </p>

      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      {/* <h3 className="headingHover">Hover over the image to see the AFTER image.</h3> */}


      {/* <span p>BEFORE</span>
      <span p>AFTER</span> */}
      <span className="servicesImageContainer servicesImageContainerBefore">

        <img src="./img/before_basement.jpg" className="beforeAfterImg" alt="A basement picture before renovation." />

        <p className="beforeAfterText">BEFORE</p>
      </span>


      {/* </a> */}
      <span className="servicesImageContainer ">
        <img src="./img/after_basement.jpg" className="beforeAfterImg" alt="A basement picture after renovation." />
        <p className="beforeAfterText">AFTER</p>
      </span >
      <br />

      <span className="servicesImageContainer servicesImageContainerBefore">
        <img src="./img/before_kitchen.jpg" className="beforeAfterImg" alt="A kitchen picture before renovation." />
        <p className="beforeAfterText">BEFORE</p>
      </span >

      <span className="servicesImageContainer">
        <img src="./img/after_kitchen.jpg" className="beforeAfterImg" alt="A kitchen picture after renovation." />
        <p className="beforeAfterText">AFTER</p>
      </span >
      <br />





      <span className="servicesImageContainer servicesImageContainerBefore">
        <img src="./img/before_walkway.jpg" className="beforeImgThree beforeAfterImg" alt="A walkway picture before renovation." />
        <p className="beforeAfterText">BEFORE</p>
      </span >
      <span className="servicesImageContainer">
        {/* <p className="title title-before before-after" >BEFORE</p>
        <p className="title title-after before-after">AFTER</p> */}
        <img src="./img/after_walkway.jpg" className="afterImgThree beforeAfterImg" alt="A walkway picture after renovation." />
        <p className="beforeAfterText">AFTER</p>
      </span >
      <br /> <br /> <br /> <br />


      <Footer />
    </>
  );
}


function Kitchen() {


  return (

    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <ImageZoom />

      <br />  <br />  <br />

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
              <img src="./img/kitchen/kitchen1.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              <img src="./img/kitchen/kitchen2.jpg" className="kitchen image-border kitchen-image-right zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen3.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen4.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              {/* <img className="kitchen-card-bg" src="./img/cardBg.png"></img> */}
              <p className="kitchen-para alignedPara">We specialize in providing top-notch kitchen remodeling services that will breathe new life into your culinary space.<br /><br /> Our team of skilled professionals understands the significance of the kitchen as the heart of your home, and we are dedicated to creating a functional, stylish, and inviting space that meets your unique needs.<br /><br /> Whether you desire a complete kitchen overhaul or a targeted renovation, we offer a wide range of services to suit your requirements.<br /><br /> From custom cabinetry and countertop installations to flooring upgrades and appliance replacements, we handle every aspect of your kitchen project with utmost care and attention to detail.

                <br /><br /> Our team works closely with you to understand your vision, offering expert advice and guidance along the way.<br /><br /> We pride ourselves on using high-quality materials and employing innovative design techniques to ensure a stunning end result.<br /><br /> With our kitchen renovation services, you can expect seamless project management, timely completion, and exceptional craftsmanship.<br /><br /> Transform your kitchen into a space that reflects your style and enhances your daily life by entrusting us with your kitchen renovation project. Contact us today to get started on creating the kitchen of your dreams.
              </p>
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen5.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen6.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>

            <div className="grid-item">
              <Image src="./img/kitchen/kitchen7.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen8.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen9.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen10.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
            <div className="grid-item">
              <Image src="./img/kitchen/kitchen11.jpg" className="kitchen image-border zoomD pointer" alt="A picture of a finished kitchen renovation." />
            </div>
          </div>
        </motion.div >
        <br />   <br />

      </div >

      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}




function Bath() {
  return (

    <>

      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


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

            <img src="./img/bath/bath1.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />

          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath2.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath3.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath4.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>

          <div className="bath-grid-item">
            <p className="alignedPara">We specialize in providing exceptional bathroom renovation services that will transform your bathroom into a luxurious and functional retreat. Our team of skilled professionals understands the importance of a well-designed and comfortable bathroom, and we are dedicated to creating a space that reflects your personal style and meets your specific needs.<br /> <br />  Whether you're looking to update your fixtures, replace outdated tiles, or completely remodel your bathroom, we offer a wide range of services to suit your requirements. Our expertise includes bathroom layout redesign, bathtub and shower installations, vanity and countertop replacements, flooring upgrades, and lighting enhancements.<br /> <br />
              We work closely with you to understand your vision, offering creative solutions and expert advice to maximize the potential of your bathroom. With meticulous attention to detail and a commitment to using high-quality materials, we ensure a stunning end result that exceeds your expectations.<br /> <br />  From project management to timely completion, we handle every aspect of the renovation process with professionalism and care. Our goal is to create a bathroom that not only enhances your daily routine but also adds value to your home. Trust us with your bathroom renovation needs, and let us transform your bathroom into a space of relaxation, rejuvenation, and beauty. </p>
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath5.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath6.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath7.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>
          <div className="bath-grid-item">
            <img src="./img/bath/bath9.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>

        </div >
      </motion.div >
      <br /> <br /> <br />
      <Footer />
    </>
  );
}

function Basement() {
  return (
    <>

      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <br /> <br /> <br /> <br />

      <h3 className="basementHeading">Basements</h3>
      <h4 className="basementHeading">Transform your basement area, everything is custom built to suite your budget and needs.</h4>

      <span className="servicesImageContainer servicesImageContainerBefore">

        <img src="./img/before_basement.jpg" className="beforeAfterImg zoomD pointer" alt="A basement picture before renovation." />

        <p className="beforeAfterText">BEFORE</p>
      </span>


      {/* </a> */}
      <span className="servicesImageContainer ">
        <img src="./img/after_basement.jpg" className="beforeAfterImg zoomD pointer" alt="A basement picture after renovation." />
        <p className="beforeAfterText">AFTER</p>
      </span >
      <span className="servicesImageContainer  servicesImageContainerBefore">
        <img src="./img/basement/basement1.jpg" className="beforeAfterImg zoomD pointer" alt="A basement picture after renovation." />
      </span>
      <span className="servicesImageContainer ">
        <img src="./img/basement/basement2.jpg" className="beforeAfterImg zoomD pointer" alt="A basement picture after renovation." />
      </span>
      <br />
      <span className="servicesImageContainer  servicesImageContainerBefore">
        <img src="./img/basement/basement3.jpg" className="beforeAfterImg zoomD pointer" alt="A basement picture after renovation." />
      </span>
      <br /> <br /> <br />

      <p className="alignedPara basementPara">
        Whether you envision a cozy entertainment area, a home office, a guest suite, or a personal gym, we have the expertise to bring your basement renovation dreams to life. Our dedicated team of professionals works closely with you to understand your vision and design a customized plan that maximizes the potential of your basement.<br /> <br />  From framing and insulation to drywall installation, flooring, and lighting, we handle every aspect of the renovation process with meticulous attention to detail. We also offer expertise in plumbing and electrical work to ensure that your basement meets all your requirements. With our commitment to quality craftsmanship and the use of premium materials, we create a finished basement that seamlessly blends with the rest of your home.<br /> <br />  Our project management approach ensures timely completion and open communication throughout the renovation process, providing you with peace of mind. Trust us to transform your basement into a functional and inviting space that suits your lifestyle and exceeds your expectations.
      </p>
      <br /><br />
      <Footer />
    </>
  );
}

function Garage() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h3 className="basementHeading">Garage's</h3>
      <h4></h4>
      <div className="bath-grid-container">

        <p className="basementPar">
          we take pride in offering comprehensive garage renovation services that will transform your garage into a functional and organized space. Whether you're looking to convert your garage into a workshop, create a home gym, or simply optimize its storage capabilities, our experienced team is here to help. We begin by understanding your specific goals and requirements, and then we design a customized plan to maximize the potential of your garage. Our services include everything from installing durable and easy-to-clean flooring to customizing storage solutions, such as cabinets, shelving, and overhead racks, to efficiently utilize the space. We can also assist with insulation, lighting, and electrical work to ensure that your garage is comfortable and well-lit. With our attention to detail and commitment to quality craftsmanship, we deliver outstanding results that not only enhance the functionality of your garage but also elevate its aesthetics. Our skilled team manages the entire renovation process, from concept to completion, ensuring a smooth and hassle-free experience for you. Turn your garage into a versatile and organized space that adds value to your home.
        </p>
      </div>
    </>
  );
}

function Pool() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <ImageZoom />


      {/* <!-- (A) LIGHTBOX CONTAINER --> */}
      <div id="lightbox"></div>


      <br />  <br />

      <h3 className="basementHeading">Pools</h3>
      <h4 className="basementHeading">Completely custom built heated pools with all the bells and whistles.</h4>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <Image src="./img/pools/pool1.jpg" className="pool image-border zoomD pointer" alt="A picture of a finished pool renovation." />
      </motion.div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool2.jpg" className="pool image-border zoomD pointer" alt="A picture of a finished pool renovation." />
        <br /> <br /> <br />
      </motion.div>

      <p className="poolPara alignedPara">
        Whether your pool requires a complete overhaul or targeted upgrades, our experienced team is here to help. We understand that a pool is not only a place for relaxation and enjoyment but also a focal point of your outdoor space.<br /><br /> Our pool renovation services encompass a wide range of solutions, including resurfacing, tile replacement, coping repairs, equipment upgrades, and lighting enhancements. We work closely with you to understand your specific needs and desires, providing expert advice and creative ideas to transform your pool into a stunning retreat.<br /><br /> With meticulous attention to detail and using high-quality materials, we ensure a durable and aesthetically pleasing end result. Our skilled professionals manage the entire renovation process, from initial consultation and design to the final installation, ensuring a smooth and hassle-free experience for you.<br /><br /> Whether you want to restore an old pool to its former glory or upgrade your pool with modern features, we have the expertise to deliver exceptional results. Enhance the beauty and functionality of your pool with our professional renovation services.<br />
      </p>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="./img/pools/pool3.jpg" className="pool image-border zoomD pointer" alt="A picture of a finished pool renovation." />
      </motion.div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool4.jpg" className="pool image-border zoomD pointer" alt="A picture of a finished pool renovation." />
      </motion.div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}>
        <Image src="./img/pools/pool5.jpg" className="pool image-border zoomD pointer" alt="A picture of a finished pool renovation." />
      </motion.div>

      <br /> <br />

      <Footer />

    </>
  );
}

function Deck() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <h3 className="basementHeading">Enhance Your Outdoor Living with Our Fencing, Deck & Patio Renovation Services</h3>
      <h4 className="basementHeading">Customized Solutions for Beautiful and Functional Outdoor Spaces</h4>
      <div className="decks-grid-container">

        <div className="deck-grid-item">
          <img src="./img/fencingDeckPatio/patio1.jpg" className="decks-image image-border zoomD pointer" alt="A picture of a finished patio renovation." />
        </div>
        <div className="decks-grid-item">
          <img src="./img/fencingDeckPatio/patio2.jpg" className="decks-image image-border zoomD pointer" alt="A picture of a finished patio renovation." />
        </div>

        <div className="decks-grid-item">
          <img src="./img/fencingDeckPatio/patio3.jpg" className="decks-image image-border zoomD pointer" alt="A picture of a finished patio renovation." />
        </div>
        <p className="alignedPara deckPara">
          <br />
          We offer a comprehensive range of services to transform your outdoor space, including deck, fencing, and patio renovations.<br /><br /> Whether you're looking to revitalize your deck, upgrade your fencing, or create a stunning patio area, our experienced team is here to bring your vision to life. Our deck renovation services encompass everything from repairs and resurfacing to adding new features such as built-in seating, pergolas, or outdoor kitchens..<br /><br /> We understand that your deck is a gathering place for family and friends, and we strive to create a functional and aesthetically pleasing space that enhances your outdoor living experience.<br /><br /> When it comes to fencing, we provide a variety of options, including wood, vinyl, or metal fencing, tailored to your privacy and security needs. Our expert team ensures precise installation and durable materials that withstand the test of time..<br /><br /> Additionally, our patio renovation services focus on transforming your outdoor area into a beautiful and functional space.<br /><br /> We can assist with patio extensions, upgrades, or even a complete patio redesign to suit your style and lifestyle. Whether you desire a cozy outdoor lounge area or a space for outdoor dining and entertaining, we will work closely with you to create a personalized patio that meets your needs..<br /><br /> With our attention to detail, quality craftsmanship, and use of premium materials, we guarantee exceptional results that exceed your expectations. Trust us to renovate your deck, fencing, and patio, and let us help you create an outdoor sanctuary for relaxation, entertainment, and enjoyment.   <br />   <br />   <br />
        </p>
      </div>
      <Footer />
    </>
  );
}

function Gallery() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
      <h3 className="headingHover">Hover over the image to see the AFTER image.</h3>

      <div className="body-container">
        <div className="card">

          <div className="wrapper">
            <img src="./img/before_basement.jpg" className="cover-image" alt="A basement picture before renovation." />
          </div>
          <p className="title title-before before-after" >BEFORE</p>
          <p className="title title-after before-after">AFTER</p>
          <img src="./img/after_basement.jpg" className="character" alt="A basement picture after renovation." />
        </div>
        {/* </a> */}


        <div className="card">
          <div className="wrapper">
            <img src="./img/before_kitchen.jpg" className="cover-image" alt="A kitchen picture before renovation." />
          </div>
          <p className="title title-before before-after" >BEFORE</p>
          <p className="title title-after before-after">AFTER</p>
          <img src="./img/after_kitchen.jpg" className="character" alt="A kitchen picture after renovation." />
        </div>



        <div className="card">
          <div className="wrapper">
            <img src="./img/before_walkway.jpg" className="cover-image" alt="A walkway picture before revnoation." />
          </div>
          <p className="title title-before before-after" >BEFORE</p>
          <p className="title title-after before-after">AFTER</p>
          <img src="./img/after_walkway.jpg" className="character" alt="A walkway picture after renovation." />
        </div>
      </div>

      <Footer />
    </>
  );
}

function Faq() {


  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />


      <br /><br />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",

          stiffness: 260,
          damping: 20
        }}>
        <Image src="./img/faq.png" className="faq" alt="A picture illustrating frequently asked questions." /><br />
        <br />
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
          <h3 className="faq-heading" id="faq-heading-answers">We have answers!</h3><br />
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
            <Typography className="accordHeading">How much will it cost to do the job?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              All our work is customized for your individual needs.<br /><br /> We will provide you with a free estimate after we have a chance to discuss your project with you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">Why should I choose Monteiro Homes?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              We are a family owned and operated business. We take great pride in our work and treat every project as if it were our own home.<br /><br />We are fully licensed and have been in business for over 8 years. We have many satisfied customers and would be happy to provide you with references.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">What areas do you service?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              We provide our services all throughout the GTA and surrounding areas.<br /><br /> Including but not limited to: Georgetown, Milton, Oakville, Burlington, Etobicoke, Vaughan, Brampton and more.<br /><br /> If your unsure if we service your area, please contact us.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="accordHeading">What payment methods do you accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordPara">
              We accept cash, cheque, e-transfer. Credit cards are not accepted.<br /><br /> Financing is available, please contact us for more information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>

      <div className="faqLineBreaks">
        <br /> <br />  <br /> <br />  <br /> <br />  <br /> <br />  <br /> <br />  <br /> <br />  <br /> <br />  <br /> <br /> <br />
      </div>
      <Footer />

    </>
  );
}

function Quote() {
  // const node = document.createElement("div");
  // node.classList.add("quoteContainer");
  // const elements = document.getElementsByClassName("hbspt-form");

  //  node.appendChild(elements[0]);
  // document.body.insertAdjacentHTML('beforeend', elements[0]);


  return (
    <>
      <ChangeNavColor color={navLightColor} />
      <RemoveQuoteForm />
      <QuoteForm />

    </>
  );
}



function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Name validation
    if (!form.name) {
      formIsValid = false;
      errors['name'] = 'Name is required.';
    }

    // Email validation
    if (!form.email) {
      formIsValid = false;
      errors['email'] = 'Email is required.';
    } else {
      let lastAtPos = form.email.lastIndexOf('@');
      let lastDotPos = form.email.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && form.email.indexOf('@@') === -1 && lastDotPos > 2 && (form.email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors['email'] = 'Email is not valid.';
      }
    }

    // Message validation
    if (!form.message) {
      formIsValid = false;
      errors['message'] = 'Message is required.';
    }

    setErrors(errors);
    return formIsValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // submit form
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    // <form action="http://162.240.97.142:52940/sendMailFlask" method="POST">
    <>
      {/* <div className="quoteContainer"> */}
      <h2 className="quoteHeading">Scroll down and get your FREE quote today!</h2><br />

      <img src="./img/customerSupport2-resized.jpg" className="quoteImgSupport" alt="A picture illustrating of a customer service rep." /><br /><br />
      {/* <div className="quote-grid-item"> */}
      <InstagramEmbed className="formInstagramPost" url="https://www.instagram.com/p/Cl1YH0nuzul/" />
      {/* </div> */}
      {/* <div className="quote-grid-item"> */}
      <form action="http://www.monteirohomes.com/sendEmailPM.php" method="POST" className="quoteForm">

        <img className="logo" src="./img/logo.png" alt="A picture of the Monterio homes logo." />
        <h3 className="formHeading">Get a free estimate today!</h3>
        <label for="name" className="formLabels">Name (required)</label><br />
        <input type='text' className="formInputText" name='name' value={form.name} onChange={handleChange} placeholder='Your name' /><br /><br />
        {errors['name'] && <span className="error">{errors['name']}</span>}
        <label for="email" className="formLabels">Emil address (required)</label><br />
        <input type='email' className="formInputText" name='email' value={form.email} onChange={handleChange} placeholder='Your email' /><br /><br />
        {errors['email'] && <span className="error">{errors['email']}</span>}
        <label for="message" className="formLabels">Your message (required)</label><br />
        <textarea name='message' className="formInputText" id="formInputMessage" value={form.message} onChange={handleChange} placeholder='Your message' /><br /><br />
        {errors['message'] && <span className="error">{errors['message']}</span>}
        <button type='submit' className="formSubmitBtn">SEND MESSAGE</button><br /><br />

      </form>
      {/* </div> */}
      {/* </div> */}
      <br /><br />
      <Footer />
    </>
  );
}


function About() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />

      {/* <img className="canadianFlagIcon" src="./img/canadian-flag-icon.png" /> */}


      {/* <div className="about-grid-container"> */}

      <div className="about-grid-item about-grid-item-top">

        <img src="./img/van.jpg" className="vanPic" alt="A picture of the Monterio Homes logo on the company van." />
        <br /><img className="canadianFlag" src="./img/canadianflag.jpeg" /><br /><br /><p>Support local Canadian businesses</p>
      </div>

      <div className="about-grid-item">
        <h3 className="aboutUsHeading">About Us</h3>

        <h3 className="aboutUsHeading">Canadian Family-Owned Contractor with 8 Years of Trusted Service</h3><br />
        <p>Welcome to our family-owned contracting business, where we have been proudly serving our community for the past 8 years. As a small business, we understand the importance of personalized service and building strong relationships with our clients..<br /><br /> With a passion for craftsmanship and a commitment to excellence, we have earned a reputation for delivering top-quality work and exceeding customer expectations. Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring attention to detail and meticulous execution..<br /><br /> From home renovations and remodeling to repairs and installations, we offer a comprehensive range of services tailored to meet your specific needs. As a family-owned business, we prioritize open communication, honesty, and integrity in all our interactions. We take pride in our work, treating every project as if it were our own, and ensuring customer satisfaction is our top priority..<br /><br /> With us, you can expect personalized attention, reliable service, and a finished result that will transform your space into something exceptional. Trust our family to enhance your home with our trusted contracting services.</p><br /><br />
      </div>
      {/* </div> */}
      <br /><br /><br /><br /><br />

      <Footer />
    </>
  );
}

function RemoveQuoteForm() {
  const elements = document.getElementsByClassName("hbspt-form");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  return (
    <>
    </>
  );
}

function Contact() {

  // document.querySelector("#ContactFormOne").classList.add = "hide";
  // document.querySelector("#ContactFormTwo").classList.add = "hide";


  return (
    <>

      <ChangeNavColor color={navLightColor} />

      <RemoveQuoteForm />





      {/* <div className="contact-grid-container"> */}

      {/* <div className="contact-grid-item">
        <h3 className="contactUsHeading">Contact Us</h3>

      </div> */}

      <div className="contact-grid-item">
        <br /> <br /> <br /> <br /> <br /> <br />
        <h3 className="contactUsHeading">Don't hesitate to get in touch with us today!</h3><br />
        <p className="alignedPara contactPara">We would love to hear from you! Please feel free to reach out to us with any inquiries or to discuss your upcoming project. Our team of experts is here to assist you every step of the way.
          <span className="alignedpara contactPara contactParaResponsive"><br /><br /> Whether you have questions about our services, need a consultation, or want to schedule an appointment, we are just a phone call or email away..<br /><br /> Don't hesitate to contact us and let us help you bring your home renovation dreams to life. We look forward to working with you!<br /><br /></span>
        </p>


        <Image className="contactSupportImage" variant="top" src="./img/customerSupport-resized.jpeg" alt="A picture of a customer support reprensenative on the phone." />


        {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}

        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}


        <a href="mailto:phil@monteirohomes.ca" className="contactCardLink">

          {/* <span p className="contactCardText">Email us</span> */}

          {/* 
                <button class="custom-btn btn-11">Read More</button> */}

          <button className="buttonEmailUs custom-btn btn-11">

            <img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Phil at." />
            <span className="buttonEmailUsText">EMAIL US</span>

          </button>
        </a>
        <br />
        {/* <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." /> */}
        {/* <span p className="contactCardText">Call us</span> */}
        <a href="tel:(647)885-2384">
          <button className="buttonCallUs custom-btn btn-11">
            <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." />
            <span className="buttonCallUsText">CALL US</span>
          </button>
        </a>
      </div >

      {/* <ContactForm /> */}

      {/* </div> */}

      {/* <a href="mailto:phil@monteirohomes.ca">                <img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />Make an appointment</a> */}


      {/* <a className="social-icons" href="tel:905-599-1345">
                <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
                <span className="social-text" p>Phil @ (647) 885-2384</span>
              </a><br /> */}


      <br /><br />

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



            <h3>Service areas</h3>
            <ul>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Georgetown
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Milton
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Oakville
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Burlington
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Etobicoke
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Vaughan
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                Brampton
              </li>
              <li className="alignedPara footer-service-area-text">
                <img className="checkmark" src='./img/checkmark.png' alt="A picture of a checkmark indicating we service the following area." />
                and many more!
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">


            <h3 className="footer-service-area-text"> <img className="footer-logo" src="./img/logo.png" alt="A picture of the Monteiro Homes logo." />Monteiro Homes</h3>
            <ul>

              <li>
                <h5 className="footer-service-area-text">Custom Financing available</h5>
              </li>
            </ul>
            <h4>OFFICE HOURS</h4>
            <ul>
              <li className="alignedPara daysOfOperation">Monday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; &nbsp; 9am - 5pm</span></li>
              <li className="alignedPara daysOfOperation">Tuesday <span p className="hoursOfOperation alignedPara">&nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;9am - 5pm</span></li>
              <li className="alignedPara daysOfOperation">Wednesday <span p className="hoursOfOperation alignedPara">&nbsp; 9am - 5pm</span></li>
              <li className="alignedPara daysOfOperation">Thursday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; 9am - 5pm</span></li>
              <li className="alignedPara daysOfOperation">Friday <span p className="hoursOfOperation alignedPara">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;9am - 5pm</span></li>
            </ul>
          </div>



          <div className="footer-grid-item">
            <h4 className="footer-socials-heading">Socials</h4>
            <div className="alignedPara">



              <a className="social-icons textAnimation" href="https://www.facebook.com/profile.php?id=100064311003388" target="_blank">
                <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" /><span className="social-text" p>facebook.com/monteirohomes</span>
              </a><br />

              <a className="social-icons textAnimation" href="tel:647-885-2384">
                <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number icon to reach Phil at." />
                <span className="social-text" p>Phil @ (647) 885-2384</span>
              </a><br />

              <a className="social-icons textAnimation" href="mailto:phil@monteirohomes.ca">
                <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/email.png" width="60px" height="60px" alt="An email icon to each Phil at." />
                <span className="social-text">phil@monteirohomes.ca</span>
              </a><br />


              <a className="social-icons textAnimation" href="https://www.instagram.com/monteirohomes/" target="_blank">
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
