import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
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

import { motion, useScroll } from "framer-motion";
import { useInView } from "framer-motion";
// import { useRef } from "react";

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

import './hamburgerMenu.css';

import 'animate.css';

import "./glowing_button.css";

// import $ from 'jquery';

import CountUp from "react-countup";

import './scrollDownArrow.css';


import GoogleMapReact from 'google-map-react';

import './imageSlider.css';

import './scrollAnimation.css';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



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
      <Router>
        <Links />
      </Router>



    </>
  );
}

function Home() {

  const { scrollYProgress } = useScroll();



  scrollYProgress.onChange(y => {

    console.log("y............", y);
    // console.log(typeof (y))
    const str = y.toString();
    const result = Number(str.slice(2, 4));
    console.log("result............", result);
    var value = 50 + result;
    console.log("value............", value)

    if (y == 1) {
      console.log("y isssssssssssssssssssssssssssssss 1");
      document.querySelector(".scrollFinishText").style.width = "150px";
      document.querySelector(".scrollFinishText").style.height = "150px";
    }
    else {
      document.querySelector(".scrollFinishText").style.width = `${value}px`;
      document.querySelector(".scrollFinishText").style.height = `${value}px`;
    }


  })
  // useEffect(() => {
  //   console.log("re-rendered......................")
  // }, []);

  return (
    <>

      <span id='home'></span>
      {/* <h1 className="page-mainHeading">Get a FREE quote!</h1> */}

      <ChangeNavColor color={navDarkColor} />

      <div id="home"></div>




      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}>
      </motion.div>
      <span className="scrollStartText">Start</span>
      {/* <span className="scrollFinishText">Finish</span> */}

      <img src="./img/logo.png" className="scrollFinishText" />

      {/* <code>useScroll</code> demo */}

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


      <img className="logo animate__animated animate__heartBeat animate__infinite" src="./img/logo.png" alt="A picture of the Monterio homes logo." />
      <span><p className="companyName animate__animated animate__heartBeat animate__infinite">onteiro Homes</p></span>

      {/* </div> */}
      {/* <img className="companyName" src="./img/companyName.svg" /> */}
      <div className="rightToLeft-lineBreaks">
        <br /> <br /> <br />
      </div>
      <div className="text-container">
        <p id="target-id" className="target">SERVICING THE GTA<br />FULL HOME RENOVATION & DESIGN<br />CUSTOM FINANCING AVAILABLE</p>
      </div >

      <br />



      {/* 
      <div className="home-socials alignedPara">

        <a href="https://www.facebook.com/profile.php?id=100064311003388s" target="_blank">
          <img className="rounded-circle home-social-icons home-social-icons-facebook" src="./img/fb.png" alt="Facebook logo" />
          <span className="home-social-text">facebook.com/MonteiroHomes</span>
        </a><br className="home-social-responsiveness" />

        <a href="tel:(647)885-2384">
          <Image className="rounded-circle home-social-icons home-social-icons-phone" src="./img/phone.png" alt="A phone number to reach Phil at." />
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

      </div > */}

      <div className="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style={{ opacity: 1 }}>
        <div className="scroll-prompt-arrow-container">
          <div className="scroll-prompt-arrow"><div></div></div>
          <div className="scroll-prompt-arrow"><div></div></div>
        </div>
      </div>

      {/* <div className="animate__animated animate__fadeInLeft animate__delay-2s">Example
       
      </div> */}
      <Services />
      <Faq />
      <Quote />
      {/* <Bath /> */}
      <Location />
      <About />
      <Contact />
    </>
  );
}

function Socials() {
  window.onload = () => {
    // document.querySelector('.socialsBg').addEventListener('animationstart', function () {
    //   document.querySelector('.socialsIconsGroup').classList.add('socialsPopOut');
    // });


    /*
    document.querySelector('.socialsBg').addEventListener('animationstart', function () {
      document.querySelectorAll('.social-icons').forEach(element => {
        element?.classList.add('socialsPopOut');
      });
    });

    document.querySelector('.socialsBg').addEventListener('animationend', function () {
      document.querySelector('.socialsBg').style.height = "35%";
    });
*/


  }
  return (
    <>
      {/* <div className="socialsBg">
        <div className="socialsHamburgerIcon"><p className="socialsMenuText">&#9776;
          SOCIALS</p>
        </div>
        <div className="socialsIconsGroup">
          <a className="social-icons textAnimation" href="https://www.facebook.com/profile.php?id=100064311003388" target="_blank">
            <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" />
          </a><br />

          <a className="social-icons textAnimation" href="tel:647-885-2384">
            <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number icon to reach Phil at." />

          </a><br />

          <a className="social-icons textAnimation" href="mailto:phil@monteirohomes.ca">
            <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/email.png" width="60px" height="60px" alt="An email icon to each Phil at." />

          </a><br />


          <a className="social-icons textAnimation" href="https://www.instagram.com/monteirohomes/" target="_blank">
            <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" />
          </a>
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
}

//const BASE_URL = process.env.REACT_APP_BASE_URL;


function Links() {


  function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }
  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }

  var location = useLocation();
  console.log("LOCATION............", location.pathname);

  if (location.pathname == "/Home" || location.pathname == "/") {
    console.log("HOME.............")
    return (
      <>

        <span className="open" onClick={openNavbar}>&#9776; Menu</span>
        <div id="navbar" className="overlay">
          <a href="javascript:void(0);" onClick={closeNavbar} className="close">&#9932;</a>
          <div className="overlay-content">
            <a href="/Home"><span className="navNumbers">1</span>Home</a>
            <a href="#services"><span className="navNumbers">2</span>All Services</a>
            <a className="navSubcategory" href="/kitchen"><span className="navNumbers">2.1</span>Kitchen</a>
            <a className="navSubcategory" href="/bath"><span className="navNumbers">2.2</span>Bath</a>
            <a className="navSubcategory" href="/basement"><span className="navNumbers">2.3</span>Basement</a>
            <a className="navSubcategory" href="/pool"><span className="navNumbers">2.4</span>Pool</a>
            <a className="navSubcategory" href="/deck"><span className="navNumbers">2.5</span>Fencing, Deck & Patio</a>
            <a href="#faq"><span className="navNumbers">3</span>Faq</a>
            <a href="#quote"><span className="navNumbers">4</span>Quote</a>
            <a href="#location"><span className="navNumbers">5</span>Location & Hours</a>
            <a href="#contact"><span className="navNumbers">6</span>Contact</a>
          </div>
        </div>


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
          <Route path="/Location" element={<Location />} />

          <Route path="*">

          </Route>
        </Routes>

      </>
    );

  }

  else {
    console.log("SERVICES PAGE..............");

    return (
      <>

        <span className="open" onClick={openNavbar}>&#9776; Menu</span>
        <div id="navbar" className="overlay">
          <a href="javascript:void(0);" onClick={closeNavbar} className="close">&#9932;</a>
          <div className="overlay-content">
            <a href="/Home">Back to Home</a>
            <a href="#services">All Services</a>
            <a href="/kitchen">Kitchen</a>
            <a href="/bath">Bath</a>
            <a href="/basement">Basement</a>
            <a href="/pool">Pool</a>
            <a href="/deck">Fencing, Deck & Patio</a>
            {/* <a href="#faq">Faq</a>
            <a href="#quote">Quote</a>
            <a href="#location">Location & Hours</a>
            <a href="/Home#contact">Contact</a> */}
          </div>
        </div>


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
          {/* <Route path="/Faq" element={<Faq />} /> */}
          {/* <Route path="/Gallery" element={<Gallery />} /> */}
          {/* <Route path="/Quote" element={<Quote />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Location" element={<Location />} /> */}

          <Route path="*">

          </Route>
        </Routes>

      </>
    );
  }

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



      {/* <Navbar scrolling dark expand="md" id="navbar">
          <Nav className="mx-auto">

            <Link to={"/Home"} className="nav-link" id="navLink">HOME
            </Link>

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



            <a href="/Faq" className="nav-link">FAQ</a>

            <img className="logo" src="./img/logo.png" alt="A picture of the Monterio homes logo." />
            <span><p className="companyName">onteiro Homes</p></span>


   

            <a href="/Quote" className="nav-link" id="nav-link-quote">QUOTE</a>


            <a href="/About" className="nav-link">ABOUT US</a>

            <a href="/Contact" className="nav-link">CONTACT</a>
            <br />
          </Nav></Navbar> */}


      {/* </html> */}





    </>
  );
}


function Counter({ number, title }) {
  return (
    <>
      {/* <img className="counterCardImage" src="./img/numberCounterCard1.png" /> */}


      <span className="counterTitle">
        <CountUp duration={8} className="counter" end={number} start={0} enableScrollSpy={true} scrollSpyDelay={0} delay={0} />
        {title}</span>



    </>
  );
}



function ImageSlider(props) {
  window.addEventListener("DOMContentLoaded", (event) => {


  });

  const sliderChanged = (e) => {
    const container = document.querySelectorAll('.sliderContainer');
    // document.querySelector('.slider').addEventListener('input', (e) => {
    for (let i = 0; i < container.length; ++i) {
      container[i].style.setProperty('--position', `${e.target.value}%`);
    }
    // })
  }
  return (
    <>
      <main>
        <div className="sliderContainer">
          <div className="image-container">
            <img
              className="image-before slider-image imagesInSlider"
              src={props.firstImageUrl}
              alt="color photo"
            />
            <img
              className="image-after slider-image imagesInSlider"
              src={props.secondImageUrl}
              alt="black and white"
            />
          </div>
          {/* <!-- step="10" --> */}
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            aria-label="Percentage of before photo shown"
            className="slider"
            onChange={sliderChanged}
          />
          <div className="slider-line" aria-hidden="true"></div>
          <div className="slider-button" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

// const boxes = props.box;

// function ScrollAnimation() {
//    const boxes = document.querySelectorAll(".box");


//   console.log("boxes", boxes)

//   window.addEventListener("scroll", checkBoxes);


//   checkBoxes();

//   function checkBoxes() {
//     const triggerBottom = (window.innerHeight / 5) * 4;

//     boxes.forEach((box) => {
//       const boxTop = box.getBoundingClientRect().top;

//       if (boxTop < triggerBottom) {
//         box.classList.add("show");
//       } else {
//         box.classList.remove("show");
//       }
//     });
//   }


//   return (
//     <>
//     </>
//   );
// }

function ScrollAnimation() {

  useEffect(() => {


    const boxes = document.querySelectorAll(".box");


    console.log("boxes", boxes)

    window.addEventListener("scroll", checkBoxes);


    checkBoxes();



    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }

  }, []);


  return (
    <>

    </>
  );
}



function Services() {

  // const activiateImgOverlay = (e) => {
  //   // document.querySelector("")
  //   console.log("e............", e)
  //   const image = document.querySelectorAll("e");
  //   console.log("image", image);

  //   for (let i = 0; i < image.length; ++i) {
  //     image[i].classList.add = "callUsBtn";
  //   }

  const scrollRef = useRef(null)






  return (
    <>

      {/* <ScrollAnimation box={document.querySelectorAll(".box")} /> */}
      <div className="scrollAnimation">

        <ScrollAnimation />

        < ChangeNavColor color={navLightColor} />




        {/* 
        <h1 class="animate__animated animate__bounce">An animated element</h1>

        <figure>
          <img width="421" height="461" src="./img/bath/bath1.jpg" className="pointer" alt="" decoding="async" loading="lazy" />                      <figcaption>
            <strong><span>Bathroom Remodeling</span></strong>
            <button><a href="tel:(647)885-2384">Call Us</a></button>
          </figcaption>
        </figure> */}

        < br /><br />   <br /><br />   <br /><br />   <br /><br />
        <br /><br />   <br /><br />   <br /><br />   <br /><br />
        {/* <h3 className="page-mainHeading">Comprehensive Renovation Services for Your Dream Home Transformation</h3> */}


        <div className="box">
          <span id='services'></span>
          <h4 className="page-mainHeading">Service you can trust!</h4>
        </div>

        <div className="box">
          <br /><br />


          <Card className="serviceSectionCards serviceSectionIntroText">
            <Card.Body>
              <Card.Text>
                <div className="services-container">
                  <div className="services-item">

                    {/* <Row xs={1} sm={1} md={2} className="g-4 counterContainer">

                      <Col> */}
                    <img className="handsImage" src="./img/hands2.svg" />
                    <div className="counterCardContainerFirst">
                      <Counter number={70} title=" + Total Customers served" />

                    </div><br />
                    {/* </Col>
                      <Col>

                        <img className="diamondImage" src="./img/diamond.svg" />
                        <div className="counterCardContainerSecond">
                          <Counter number={8} title=" + years in business" />
                        </div>
                      </Col>
                    </Row > */}
                    <p className="servicesPara">Welcome to our expert home renovation services! As a <strong>trusted and experienced contractor,</strong> we take great pride in transforming houses into dream homes.<br /><br />
                      <img className="informative-icons informative-icons-left" src="./img/icons/goal.png" />
                      <br /><br />Our dedicated team of professionals is committed to delivering <strong>exceptional results</strong> that exceed your expectations.
                      <br /><br /> Whether you're looking to update your kitchen, remodel your bathroom, or renovate your entire living space, we have the expertise and skills to bring your vision to life.<br /><br />
                      <img className="informative-icons informative-icons-left" src="./img/icons/time.png" />
                      <br /><br /> We are committed to  <strong>delivering projects on time and within budget</strong>, without compromising on quality. Customer satisfaction is our top priority, and we go the extra mile to ensure that our clients are delighted with the final results.  </p>
                  </div>

                  <div className="services-item">

                    <img className="diamondImage" src="./img/diamond.svg" />
                    <div className="counterCardContainerSecond">
                      <Counter number={10} title=" + years in business" />
                    </div><br />
                    <p className="servicesPara"> We understand that every home is unique, and we work closely with our clients to create personalized designs that reflect their style and preferences.<br /><br />

                      <img className="informative-icons informative-icons-right" src="./img/icons/project.png" />
                      <br /><br /> <strong>From concept to completion</strong>, we handle every aspect of the renovation process with meticulous attention to detail, ensuring a seamless and stress-free experience for our clients. Our services encompass a wide range of specialties, including flooring, painting, plumbing, electrical work, cabinetry, and more.<br /><br />

                      <img className="informative-icons informative-icons-right" src="./img/icons/equipment.png" />
                      <br /><br />With a focus on<strong> quality craftsmanship and using premium materials,</strong> we strive to enhance the beauty, functionality, and value of your home.Trust us with your home renovation needs, and let us turn your house into the home of your dreams. Contact us today to discuss your project and schedule a consultation.
                    </p>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

        <br /><br />
        <div className="box">
          <span id='services'></span>
          <h4 className="page-mainHeading">From Kitchen to Bathroom, Deck to Basement - We've Got You Covered!</h4>
        </div>
        <br /><br />

        <div className="box">
          <Row xs={1} sm={1} md={2} className="g-4">

            <Col>


              <Card className="serviceSectionCards">
                <Card.Img variant="top" src="./img/kitchen/kitchen7.jpg" />
                <Card.Body>
                  <Card.Title>Kitchens</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary buttonServices">Visit Kitchen Section</Button>
              </Card>

            </Col>
            <Col>


              <Card className="serviceSectionCards">
                <Card.Img variant="top" src="./img/bath/bath18.jpg" />
                <Card.Body>
                  <Card.Title>Baths</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary buttonServices">Check out our Bath Section</Button>
              </Card>

            </Col>
          </Row>
        </div>

        <div className="box">

          <Row xs={1} sm={1} md={2} className="g-4">
            <Col>
              <Card className="serviceSectionCards">
                <Card.Img variant="top" src="./img/basement/basement3.jpg" />
                <Card.Body>
                  <Card.Title>Basement</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary buttonServices">The Basement Section</Button>
              </Card>
            </Col>
            <Col>
              <Card className="serviceSectionCards">
                <Card.Img variant="top" src="./img/pools/pool2.jpg" className="serviceSectionCardPool" />
                <Card.Body>
                  <Card.Title>Pools</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary buttonServices">Our Pool Section</Button>
              </Card>
            </Col>
          </Row>
        </div>


        <div className="box">

          <Row sm={1} md={2} className="g-4">

            <Col>
              <Card className="serviceSectionCards">
                <Card.Img variant="top" src="./img/fencingDeckPatio/patio3.jpg" />
                <Card.Body>
                  <Card.Title>Fencing, Decks & Patios</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary buttonServices">See our Fencing, Decks & Patio section</Button>
              </Card>
            </Col>
          </Row>
        </div>

        <br /><br />
        <div className="box">
          <h1 className="page-mainHeading">Before and After Gallery</h1>
        </div>
        <br />

        <div className="box">
          <ImageSlider firstImageUrl="./img/before_basement.jpg" secondImageUrl="./img/after_basement.jpg" />
        </div>

        <div className="box">
          <ImageSlider firstImageUrl="./img/before_kitchen.jpg" secondImageUrl="./img/after_kitchen.jpg" />
        </div>

        <div className="box">
          <ImageSlider firstImageUrl="./img/before_walkway.jpg" secondImageUrl="./img/after_walkway.jpg" />
        </div>
        {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank"> */}
        {/* <h3 className="headingHover">Hover over the image to see the AFTER image.</h3> */}


        {/* <span p>BEFORE</span>
      <span p>AFTER</span> */}

        {/* <span className="servicesImageContainer servicesImageContainerBefore"> */}
        {/* <p className="servicesHeadingBefore">BEFORE
          <span className="servicesHeadingAfter">AFTER
          </span>
        </p>
        <br />

        <ImageSlider firstImageUrl="./img/before_basement.jpg" secondImageUrl="./img/after_basement.jpg" />


        <ImageSlider firstImageUrl="./img/before_kitchen.jpg" secondImageUrl="./img/after_kitchen.jpg" />


        <ImageSlider firstImageUrl="./img/before_walkway.jpg" secondImageUrl="./img/after_walkway.jpg" />

        <div className="services-flex-container">
          <div className="services-flex-item-left">
            <img src="./img/before_basement.jpg" className="beforeAfterImg" alt="A basement picture before renovation." />

            <p className="beforeAfterText">BEFORE</p>

          </div>

          <div className="services-flex-item-right">
    
            <span className="servicesImageContainer ">
              <img src="./img/after_basement.jpg" className="beforeAfterImg" alt="A basement picture after renovation." />
              <p className="beforeAfterText">AFTER</p>
            </span >
            <br />
          </div>
          <div className="services-flex-item-left">

            <span className="servicesImageContainer servicesImageContainerBefore">
              <img src="./img/before_kitchen.jpg" className="beforeAfterImg" alt="A kitchen picture before renovation." />
              <p className="beforeAfterText">BEFORE</p>
            </span >
          </div>
          <div className="services-flex-item-right">

            <span className="servicesImageContainer">
              <img src="./img/after_kitchen.jpg" className="beforeAfterImg" alt="A kitchen picture after renovation." />
              <p className="beforeAfterText">AFTER</p>
            </span >
            <br />
          </div>


          <div className="services-flex-item-left">


            <span className="servicesImageContainer servicesImageContainerBefore">
              <img src="./img/before_walkway.jpg" className="beforeImgThree beforeAfterImg" alt="A walkway picture before renovation." />
              <p className="beforeAfterText">BEFORE</p>
            </span >
          </div>
          <div className="services-flex-item-right">

            <span className="servicesImageContainer">
              <img src="./img/after_walkway.jpg" className="afterImgThree beforeAfterImg" alt="A walkway picture after renovation." />
              <p className="beforeAfterText">AFTER</p>
            </span >
            <br /> <br /> <br /> <br />
          </div>
        </div> */}
        {/* </motion.div > */}
      </div >
    </>
  );
}


function Kitchen() {


  return (

    <>
      <ChangeNavColor color={navLightColor} />




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

function CallNow() {
  return (
    <>
      <a href="tel:(647)885-2384" className="buttonText">Call Now</a>
    </>
  );
}

function EmailNow() {
  return (
    <>
      <a href="mailto:phil@monteirohomes.ca" className="buttonText">Email Now</a>
    </>
  );
}

function ZoomIn() {
  return (
    <>
      <a href className="buttonZoomInText">Click picture to Zoom-In</a>
    </>
  );
}

function ImageOverlay() {
  return (
    <>
      <div className="middle">

        <CallNow />

        <div className="betweenButtons"></div>
        <EmailNow />
        <div className="betweenButtons"></div>

        <ZoomIn />

      </div>
    </>
  );
}



function Bath() {
  return (

    <>

      <body className="servicesPageBody">

        <ChangeNavColor color={navLightColor} />




        <ImageZoom />

        {/* <!-- (A) LIGHTBOX CONTAINER --> */}
        <div id="lightbox"></div>

        <br />
        <div className="box">
          <div className="kitchenHeading">
            <h3>Transform Your Bathroom into a Personal Oasis</h3>
            <h4>Professional Bathroom Renovation Services Tailored to Your Style and Needs.</h4>
          </div>
        </div>
        <motion.div
          className=""
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

              <div className="imageContainer">

                <img src="./img/bath/bath1.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />
                <ImageOverlay />
              </div>
            </div>

            <div className="bath-grid-item">
              <div className="imageContainer">
                <img src="./img/bath/bath2.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />

                <ImageOverlay />
              </div>
            </div>

            <div className="bath-grid-item">
              <div className="imageContainer">
                <img src="./img/bath/bath3.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />
                <ImageOverlay />
              </div>
            </div>

            <div className="bath-grid-item">
              <div className="imageContainer">
                <img src="./img/bath/bath4.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />
                <ImageOverlay />
              </div>
            </div>
            <div className="bath-grid-item">
              <p className="alignedPara">We specialize in providing exceptional bathroom renovation services that will transform your bathroom into a luxurious and functional retreat. Our team of skilled professionals understands the importance of a well-designed and comfortable bathroom, and we are dedicated to creating a space that reflects your personal style and meets your specific needs.<br /> <br />  Whether you're looking to update your fixtures, replace outdated tiles, or completely remodel your bathroom, we offer a wide range of services to suit your requirements. Our expertise includes bathroom layout redesign, bathtub and shower installations, vanity and countertop replacements, flooring upgrades, and lighting enhancements.<br /> <br />
                We work closely with you to understand your vision, offering creative solutions and expert advice to maximize the potential of your bathroom. With meticulous attention to detail and a commitment to using high-quality materials, we ensure a stunning end result that exceeds your expectations.<br /> <br />  From project management to timely completion, we handle every aspect of the renovation process with professionalism and care. Our goal is to create a bathroom that not only enhances your daily routine but also adds value to your home. Trust us with your bathroom renovation needs, and let us transform your bathroom into a space of relaxation, rejuvenation, and beauty. </p>
            </div>

            <div className="bath-grid-item">
              <div className="imageContainer">

                <img src="./img/bath/bath5.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />
                <ImageOverlay />

              </div>
            </div>
            {/* <div className="bath-grid-item">
            <img src="./img/bath/bath6.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div>

          <div className="bath-grid-item">
            <img src="./img/bath/bath7.jpg" className="bath-image image-border zoomD pointer" alt="A picture of a finished bathroom renovation." />
          </div> */}
            <div className="bath-grid-item">
              <div className="imageContainer">
                <img src="./img/bath/bath9.jpg" className="bath-image image-border zoomD pointer image" alt="A picture of a finished bathroom renovation." />
                <ImageOverlay />
              </div>
            </div>
          </div >
        </motion.div >
        <br /> <br /> <br />
      </body>

    </>
  );
}

function Basement() {
  return (
    <>

      <ChangeNavColor color={navLightColor} />




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


      <ScrollAnimation />

      <span id='faq' name='faq'></span>
      <ChangeNavColor color={navLightColor} />

      <br /><br />
      <div className="box">
        <h1 className="page-mainHeading">Frequently Asked Questions</h1>
      </div>
      <br /><br />
      <div className="box">
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
      </div>
      <div className="box">
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
      </div>
      <div className="box">
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
      </div>



    </>
  );
}

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
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
      <span id='quote'></span>
      <h1 className="page-mainHeading">Get a FREE quote!</h1>

      <ChangeNavColor color={navLightColor} />

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
      <div className="box">
        <h2 className="page-mainHeading" id="quote">Get your FREE quote today!</h2><br />
      </div>



      <div className="quote-container">



        {/* <div className="quote-grid-item"> */}

        {/* <div className="box">
            <InstagramEmbed className="formInstagramPost" url="https://www.instagram.com/p/Cl1YH0nuzul/" />
          </div> */}

        {/* </div> */}
        {/* <div className="quote-grid-item"> */}
        <div className="box">
          <form className="quoteForm" action="http://www.monteirohomes.com/sendEmailPM.php" method="POST">

            <img src="./img/customerSupport2-resized.jpg" className="quoteImgSupport" alt="A picture illustrating of a customer service rep." />
            <img className="logo" id="quoteLogo" src="./img/logo.png" alt="A picture of the Monterio homes logo." />
            <img className="sslImage" src="./img/ssl.png" alt="A picture of a security icon for HTTPS/SSL." />

            <h3 className="formHeading">Get a free estimate today!</h3><br />
            <label for="name" className="formLabels">Name (required)</label><br />
            <input type='text' className="formInputText" name='name' value={form.name} onChange={handleChange} placeholder='Your name' /><br /><br />
            {errors['name'] && <span className="error">{errors['name']}</span>}
            <label for="email" className="formLabels">Emil address (required)</label><br />
            <input type='email' className="formInputText" name='email' value={form.email} onChange={handleChange} placeholder='Your email' /><br /><br />
            {errors['email'] && <span className="error">{errors['email']}</span>}
            <label for="message" className="formLabels">Your message (required)</label><br />
            <textarea name='message' className="formInputText" id="formInputMessage" value={form.message} onChange={handleChange} placeholder='Your message' /><br /><br />
            {errors['message'] && <span className="error">{errors['message']}</span>}
            <br />       <br />       <br />
            <button type='submit' className="formSubmitBtn">SEND MESSAGE</button><br /><br />

          </form>

        </div >
      </div>
      {/* </div> */}
      {/* </div> */}
      <br /><br />
    </>
  );
}


function About() {
  return (
    <>
      <ChangeNavColor color={navLightColor} />



      {/* <img className="canadianFlagIcon" src="./img/canadian-flag-icon.png" /> */}

      <Section>

        {/* <div className="about-grid-container"> */}

        <div className="box">
          <h4 className="page-mainHeading">From Kitchen to Bathroom, Deck to Basement - We've Got You Covered!</h4>
        </div>

        <div className="box">
          <div className="about-grid-item about-grid-item-top">
            <img src="./img/van.jpg" className="vanPic" alt="A picture of the Monterio Homes logo on the company van." />

            <div className="box">
              <br /><img className="canadianFlag" src="./img/canadianflag.jpeg" /><br /><br />
              <p>Support local Canadian businesses</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="about-grid-item">


            <h3 className="aboutUsHeading">About Us</h3>

            <h3 className="aboutUsHeading">Canadian Family-Owned Contractor with 8 Years of Trusted Service</h3><br />
            <p>Welcome to our family-owned contracting business, where we have been proudly serving our community for the past 8 years. As a small business, we understand the importance of personalized service and building strong relationships with our clients..<br /><br /> With a passion for craftsmanship and a commitment to excellence, we have earned a reputation for delivering top-quality work and exceeding customer expectations. Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring attention to detail and meticulous execution..<br /><br /> From home renovations and remodeling to repairs and installations, we offer a comprehensive range of services tailored to meet your specific needs. As a family-owned business, we prioritize open communication, honesty, and integrity in all our interactions. We take pride in our work, treating every project as if it were our own, and ensuring customer satisfaction is our top priority..<br /><br /> With us, you can expect personalized attention, reliable service, and a finished result that will transform your space into something exceptional. Trust our family to enhance your home with our trusted contracting services.</p><br /><br />
          </div>
        </div>
      </Section >
      {/* </div> */}
      < br /><br /><br /><br /><br />


    </>
  );
}


const AnyReactComponent = ({ text }) => <img src="./img/logo.png" width="35px" height="35px" />;

function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 43.6198811,
      lng: -79.6787644
    },
    zoom: 10
  };

  return (
    // Important! Always set the container height explicitly
    <div className="box">
      <div className="simpleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >

          <AnyReactComponent
            lat={43.59376155130781}
            lng={-79.61112143389911}
            text="My Marker"
          // 43.59376155130781, -79.61112143389911
          // https://www.google.com/maps/@43.6198811,-79.6787644,10.5z?entry=ttu
          />
          <AnyReactComponent
            lat={43.32688478923172}
            lng={-79.8071671059716}
            text="My Marker"
          />
          {/* 43.32688478923172, -79.8071671059716 */}
          <AnyReactComponent
            lat={43.733109656168665}
            lng={-79.75635533997215}
            text="My Marker"
          />
          {/* 43.733109656168665, -79.75635533997215 */}
          <AnyReactComponent
            lat={43.467580697435764}
            lng={-79.70691686494565}
            text="My Marker"
          />
          {/* 43.467580697435764, -79.70691686494565 */}
          <AnyReactComponent
            lat={43.518390249137894}
            lng={-79.8799515275384}
            text="My Marker"
          />
          {/* 43.518390249137894, -79.8799515275384 */}
          <AnyReactComponent
            lat={43.79219612301752}
            lng={-79.54429550669967}
            text="My Marker"
          />

          {/* 43.79219612301752, -79.54429550669967 */}
          <AnyReactComponent
            lat={43.64306043598669}
            lng={-79.5129355733097}
            text="My Marker"
          />
          {/* 43.64306043598669, -79.5129355733097 */}
        </GoogleMapReact>
      </div>
    </div >
  );
}

function Location() {
  return (
    <>

      <br /><br />
      <span id='location'></span>
      <div className="box">


        <h1 className="page-mainHeading">Hours & Location</h1>
        <br />
      </div>
      {/* <iframe src="https://goo.gl/maps/2dEvuazaZWoZUEFg7" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}



      {/* <img src="./img/GoogleMaps.png" className="googleMap" alt="A map of Monteiro Homes serivce area across the GTA." /> */}
      <div className="box">
        <div className="location-container">
          <div className="location-grid-item">
            <SimpleMap />
          </div >

          <Card className="serviceSectionCards serviceSectionIntroText">

            <div className="location-grid-item">

              <h3 className="serviceAreas">Service areas</h3>

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

              <div className="location-grid-item">
                <h3 className="headingHoursOfOperation">Hours of operation</h3>
                <p className="alignedPara hoursOfOperation">Monday - Friday <br />9 AM - 5 PM</p>
              </div>
            </div >

          </Card>
        </div >
      </div >
      <br /><br />
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

      <span id='contact'></span>
      <div className="box">
        <h1 className="page-mainHeading">Get in touch with us TODAY!</h1>
      </div>

      <ChangeNavColor color={navLightColor} />







      {/* <div className="contact-grid-container"> */}

      {/* <div className="contact-grid-item">
        <h3 className="contactUsHeading">Contact Us</h3>

      </div> */}
      <div className="box">

        <div className="contact-grid-item">
          <br /> <br /> <br /> <br /> <br /> <br />
          <Card className="serviceSectionCards serviceSectionIntroText">
            <Card.Body>
              <Card.Text>

                <div className="grid-container">

                  <div className="grid-item">

                    <Image className="contactSupportImage" src="./img/customerSupport-resized.jpeg" alt="A picture of a customer support reprensenative on the phone." /><br /><br />
                    <h4 className="contactUsSubHeading">We want to hear from you!</h4> <br />
                    <p className="alignedPara">Please feel free to reach out to us with any inquiries or to discuss your upcoming project. Our team of experts is here to assist you every step of the way.</p>


                  </div>


                  <div className="grid-item">
                    <a href="mailto:phil@monteirohomes.ca" className="contactCardLink">
                      <button className="buttonEmailUs custom-btn btn-11">
                        <img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Phil at." />
                        <span className="buttonEmailUsText">EMAIL US</span>

                      </button>
                    </a>
                    <h4 className="contactUsSubHeading">You have questions, we have answers.</h4> <br />
                    <p className="alignedpara contactParaResponsive">Whether you need a consultation, or want to schedule an appointment, we are just a phone call or email away..<br /><br /> </p>
                  </div>

                  <div className="grid-item">


                    <a href="tel:(647)885-2384">
                      <button className="buttonCallUs custom-btn btn-11">
                        <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." />
                        <span className="buttonCallUsText">CALL US</span>
                      </button>
                    </a>

                    <h4 className="contactUsSubHeading">We will work with you.</h4> <br />
                    <p className="alignedPara">Don't hesitate to contact us and let us help you bring your home renovation dreams to life. We look forward to working with you!</p><br /><br />
                  </div>
                </div>


              </Card.Text>
            </Card.Body>


            <div className="socials-container">
              <a className="social-icons textAnimation glow-effect" href="https://www.facebook.com/profile.php?id=100064311003388" target="_blank">
                <img className="footer-social-icon glow-effect" src="./img/fb.png" alt="Facebook logo" />
                {/* <span className="social-text" p>facebook.com/monteirohomes</span> */}
              </a>

              <a className="social-icons textAnimation glow-effect" href="tel:647-885-2384">
                <Image className="footer-social-icon glow-effect" src="./img/phone.png" width="60px" height="60px" alt="A phone number icon to reach Phil at." />
                {/* <span className="social-text" p>Phil @ (647) 885-2384</span> */}
              </a>



              <a className="social-icons textAnimation glow-effect" href="mailto:phil@monteirohomes.ca">
                <img className="footer-social-icon glow-effect" src="./img/email.png" width="60px" height="60px" alt="An email icon to each Phil at." />
                {/* <span className="social-text">phil@monteirohomes.ca</span> */}
              </a>

              <a className="social-icons textAnimation glow-effect" href="https://www.instagram.com/monteirohomes/" target="_blank">
                <Image className="footer-social-icon glow-effect" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" />
                {/* <span className="social-text" p>instagram.com/monteirohomes/</span> */}
              </a>

            </div>
          </Card>
        </div >
        <div className="box">

        </div>

        {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}

        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}

        <div className="box">


        </div>
        <br />
        {/* <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Phil at." /> */}
        {/* <span p className="contactCardText">Call us</span> */}

      </div >

      {/* <ContactForm /> */}

      {/* </div> */}

      {/* <a href="mailto:phil@monteirohomes.ca">                <img className="rounded-circle glow-effect-links footer-socail-icon" src="./img/email.png" width="60px" height="60px" alt="An email to each Saher at." />Make an appointment</a> */}


      {/* <a className="social-icons" href="tel:905-599-1345">
                <Image className="rounded-circle glow-effect-links footer-socail-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number to reach Saher at." />
                <span className="social-text" p>Phil @ (647) 885-2384</span>
              </a><br /> */}


      <br /><br />

      {/* <NewFooter /> */}
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
                <img className="rounded-circle glow-effect-links footer-social-icon glow-effect" src="./img/email.png" width="60px" height="60px" alt="An email icon to each Phil at." />
                <span className="social-text">phil@monteirohomes.ca</span>
              </a><br />


              <a className="social-icons textAnimation" href="https://www.instagram.com/monteirohomes/" target="_blank">
                <Image className="rounded-circle glow-effect-links footer-social-icon glow-effect" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" /><span className="social-text" p>instagram.com/monteirohomes/</span>
              </a>




            </div>
          </div>
        </div>

      </footer>

    </>
  );
}

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


function NewFooter() {
  return (
    <>

      <footer>
        <div className="footer-grid-container">
          <div className="footer-grid-item">
            <div className="box">
              <p>
                <h4 className="footer-socials-heading">Socials</h4>

                <a className="social-icons" href="https://www.facebook.com/profile.php?id=100064311003388" target="_blank">
                  <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/fb.png" width="60px" height="60px" alt="Facebook logo" />
                  {/* <span className="social-text" p>facebook.com/monteirohomes</span> */}
                </a>

                <a className="social-icons" href="tel:647-885-2384">
                  <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/phone.png" width="60px" height="60px" alt="A phone number icon to reach Phil at." />
                  {/* <span className="social-text" p>Phil @ (647) 885-2384</span> */}
                </a>

                <a className="social-icons" href="mailto:phil@monteirohomes.ca">
                  <img className="rounded-circle glow-effect-links footer-social-icon" src="./img/email.png" width="60px" height="60px" alt="An email icon to each Phil at." />
                  {/* <span className="social-text">phil@monteirohomes.ca</span> */}
                </a>


                <a className="social-icons" href="https://www.instagram.com/monteirohomes/" target="_blank">
                  <Image className="rounded-circle glow-effect-links footer-social-icon" src="./img/instagram.png" width="60px" height="60px" alt="Instagram logo" />
                  {/* <span className="social-text" p>instagram.com/monteirohomes/</span> */}
                </a>
              </p>
            </div>
          </div>
        </div >
      </footer >
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
