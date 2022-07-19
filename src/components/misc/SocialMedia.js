import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Socials(props) {
  return (
    <div className="socials flex-row">
      <a
        href="https://www.linkedin.com/in/jeffreymoulckers/"
        target="_blank"
        className="social-container flex"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="fa social" />
      </a>

      <a
        href="https://github.com/jrmoulckers"
        target="_blank"
        className="social-container flex"
        rel="noopener noreferrer"
      >
        <FaGithub className="fa social" />
      </a>
      <a
        href="https://www.facebook.com/jeffrey.moulckers"
        target="_blank"
        className="social-container flex"
        rel="noopener noreferrer"
      >
        <FaFacebook className="fa social" />
      </a>
      <a
        href="https://www.instagram.com/jeffrey.moulckers"
        target="_blank"
        className="social-container flex"
        rel="noopener noreferrer"
      >
        <FaInstagram className="fa social" />
      </a>
      <a
        href="https://twitter.com/jrmoulckers"
        target="_blank"
        className="social-container flex"
        rel="noopener noreferrer"
      >
        <FaTwitter className="fa social" />
      </a>
    </div>
  );
}

export default Socials;
