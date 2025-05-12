import React from "react";
import "./About.css";
import AboutImg from "../assets/Group 17432.png";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";

function About() {
  return (
    <>
      <div className="about">
        <img src={AboutImg} alt="" />

        <div className="about-container">
          <div className="contact-us">
            <h1>Contact Us</h1>
            <p>Address: Lorem ipsum dolor sit amet consectetur. </p>
            <p>Email id: abc@gmail.com</p>
            <p>Phone No: 1234567890</p>
          </div>
          <div className="follow-us">
            <h1>Follow us</h1>
            <span className="socials-logo">
              <SlSocialFacebook size={"30px"} />
              <TiSocialLinkedin size={"30px"} />
              <FaInstagram size={"30px"} />
              <TiSocialTwitter size={"30px"} />
              <FaYoutube size={"30px"} />
              <FaQuora size={"30px"} />
            </span>
          </div>
          <div className="office">
            <h1>Head Office</h1>
            <p>
              <span>
                <IoLocation color="#fff" />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <MdMyLocation color="#fff" />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <MdMyLocation color="#fff" />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <RiUserLocationLine color="#fff" />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
