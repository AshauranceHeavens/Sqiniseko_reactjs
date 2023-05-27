import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import image from "./../images/header-img.jpeg";
import php from "./../images/php.png";
import php2 from "./../images/php-code.png";
import react from "./../images/atom.png";
import react2 from "./../images/structure.png";
import sass from "./../images/sass.png";
import sass2 from "./../images/sass_icon.png";

import design from "./../images/official/design_tools.svg";
import hosting from "./../images/official/instant_support.svg";
import seo from "./../images/official/search_engines.svg";
import responsive from "./../images/official/responsive.svg";
import speed from "./../images/official/fast_loading.svg";
import support from "./../images/official/active_support.svg";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".transition", {
      scrollTrigger: {
        trigger: ".transition",
        start: "center bottom",
      },
      y: 50,
      stagger: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".transition1", {
      scrollTrigger: {
        trigger: ".transition1",
        start: "center bottom",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });
  }, []);

  return (
    <section id="main">
      <div className="main-container">
        <div className="section section2">
          <div className="section_wrapper">
            <div className="text">
              <h2>
                You deserve a custom built website that can get you more leads
                for your business
              </h2>
              <p>
                Having a website that doesn't generate new leads for your
                business can be frustrating and and very demotivating, and that
                is why I am here to help you. I develop beautiful custom
                websites at an affordable price for people and businesses like
                yours.
              </p>
              <a href="https://calendly.com/ashaurance/30min">
                Schedule An Appointment
              </a>
            </div>
          </div>
        </div>
        <div className=" section3">
          <h2>Benefits of working with me</h2>
          <div className="grid">
            <div className="box">
              <h3>24/7</h3>
              <p>
                A beautiful and custom engaging website that increases
                engagement and generate leads 24/7
              </p>
            </div>
            <div className="box">
              <h3>Optimization</h3>
              <p>
                An optimized website to get you more traffic and save you time
                to focus more on your business growth
              </p>
            </div>
            <div className="box">
              <h3>New Leads</h3>
              <p>
                A website that will generate new leads for your business
                resulting in you business growth
              </p>
            </div>
          </div>
        </div>
        <div className="languages">
          <h2>Languages I Speak</h2>
          <div className="languages-wrapper">
            <div className="languages-container">
              <img className="language" src={react2} alt="" />
              <img className="language" src={sass} alt="" />
              <img className="language" src={php2} alt="" />
              <img className="language" src={sass2} alt="" />
              <img className="language" src={php} alt="" />
              <img className="language" src={react} alt="" />
            </div>
          </div>
        </div>
        <div className="features">
          <h2>Features</h2>
          <div className="grid-container">
            <div className="grid-box">
              <img src={design} alt="image" />
              <div className="text">
                <h3>Custom Website Design</h3>
                <p>
                  With us, you dont have to go through the trouble for hiring
                  your own web designer and pay extra
                </p>
              </div>
            </div>
            <div className="grid-box even">
              <img src={hosting} alt="image" />
              <div className="text">
                <h3>Website Hosting At An ISP and plan of your choice</h3>
                <p>
                  You get to focus on your business while we get your website
                  online for you
                </p>
              </div>
            </div>
            <div className="grid-box">
              <img src={seo} alt="image" />
              <div className="text">
                <h3>Search Engine Optimization</h3>
                <p>
                  We make sure that your custom website will be indexed by major
                  search engines like google, getting you visibility and more
                  leads for your business
                </p>
              </div>
            </div>
            <div className="grid-box even">
              <img src={responsive} alt="image" />
              <div className="text">
                <h3>Responsive Website Design</h3>
                <p>
                  Your website will be compatible with multiple devices of
                  different screen sizes, which means your website will be
                  accessible by all users, gaining you more leads
                </p>
              </div>
            </div>
            <div className="grid-box">
              <img src={speed} alt="image" />
              <div className="text">
                <h3>Speed</h3>
                <p>
                  You get a fastr loading website to ensure quality user
                  experience that will reduce bounce rate on your website
                </p>
              </div>
            </div>
            <div className="grid-box even">
              <img src={support} alt="image" />
              <div className="text">
                <h3>Support</h3>
                <p>
                  Were are available 7 days of the week to assist you so your
                  website stays online 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits">
          <h2>A Proven Plan To A Custom Website</h2>
          <div className="steps">
            <div className="step step1">
              <h3>Step 1</h3>
              <p>Schedule an appointment</p>
            </div>
            <div className="step step2">
              <h3>Step 2</h3>
              <p>I bring your dream website into reality</p>
            </div>
            <div className="step step3">
              <h3>Step 3</h3>
              <p>You stick out from the rest and get better business</p>
            </div>
          </div>
        </div>
        <div className="projects" id="Projects">
          <h2>
            For the last four years I have been building custom, lead generating
            websites that stand out from the crowd.
          </h2>
          <div className="projects-wrapper">
            <div className="project project1">
              <div className="overlay">
                <a href="/Theoffcampus">Theoffcampus</a>
              </div>
            </div>
            <div className="project project3">
              <div className="overlay">
                <a href="/ZamaZungu">Zama Zungu</a>
              </div>
            </div>
            <div className="project project2">
              <div className="overlay">
                <a href="/TaxiFareCalculator">TaxiFare</a>
              </div>
            </div>
            <div className="project project4">
              <div className="overlay">
                <a href="https://nelisiwenkwali.github.io/">Nelisiwe</a>
              </div>
            </div>
          </div>
        </div>
        <div className="cta">
          <h2>You will be relieved from actively searching for new clients</h2>
          <div className="cta_wrapper">
            <h3>Make An Appointment</h3>
            <a href="https://calendly.com/ashaurance/30min">
              Schedule An Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
