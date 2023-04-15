import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import headerImage from "./../images/header_image.svg";

const Header = ({ title }) => {
  const slider = useRef(null);
  const header = useRef(null);

  const tl = gsap.timeline();

  const ham = () => {
    slider.current.style.right = "0vw";
  };

  const cross = () => {
    slider.current.style.right = "-70vw";
  };

  useEffect(() => {
    //to fix glitchy display before animation
    header.current.style = "visibility: visible";
    tl.from(".stagger1", {
      opacity: 0,
      y: -40,
      ease: Power4.easeOut,
      duration: 2,
    });
  }, []);

  return (
    <header className="header" ref={header}>
      <div className="header-wrapper">
        <nav className="nav">
          <figcaption>Sqiniseko Zulu</figcaption>
          <div id="ham" onClick={() => ham()}>
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
          </div>
          <div id="slider" ref={slider}>
            <div id="cross" onClick={() => cross()}>
              <div className="div1"></div>
              <div className="div2"></div>
            </div>
            <div className="ul-container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/#Projects">About</Link>
                </li>
                <li>
                  <Link to="https://www.github.com/ashauranceheavens">
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="hero">
          <div className="hero-wrapper">
            <div className="header-container">
              {title ? (
                <h1 className="stagger1 heading">{title}</h1>
              ) : (
                <>
                  <h1 className="stagger1 heading">
                    Custom Web Designs That Stand Out From The Rest
                  </h1>
                  <p className="subheading stagger1">No More Boring Websites</p>
                  <a href="" className="stagger1">
                    Schedule An Appointment
                  </a>
                </>
              )}
            </div>
            <img src={headerImage} alt="Sqiniseko" className="img stagger1" />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
