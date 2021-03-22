import React from "react";
import "../App.css";
import Myself from "../assets/Myself.jpg";

const Point = ({ children }) => (
  <li>
    <p>{children}</p>
  </li>
);

const Certificate = ({ url, title }) => (
  <Point>
    <a target="_blank" href={url}>
      {title}
    </a>
  </Point>
);

const Titles = {
  "CS50 Mobile Application developement using React Native":
    "https://certificates.cs50.io/17219eec-3f2c-4b26-9df3-908adbd3c0e1.pdf?size=letter",
  "CS50 Web programming with Python and javascript":
    "https://certificates.cs50.io/9b8f9b2b-5c80-4241-83f7-cf6e7f852641.pdf?size=letter",
  "CS50 Introduction to computer Science":
    "https://certificates.cs50.io/9c68aafd-d3a4-4d02-be0d-416a9a5e2a8f.pdf?size=letter",
};

export default function About(props) {
  return (
    <div className="about">
      <div className="my-img-div">
        <img className="my-img" src={Myself} alt="Author" />
      </div>
      <div className="my-bio">
        <h2>About Me</h2>
        <ul>
          <Point>
            I am 23 years old Frontend Engineer, currently working at{" "}
            <a href="https://senpiper.com/" target="_blank">
              Senpiper Technologies
            </a>{" "}
            as React Developer
          </Point>
          <Point>
            Areas of my expertize includes React, JavaScript and React Native
          </Point>
          <Point>
            {" "}
            Comfortable with major programming languages - C, Java, Python,
            JavaScript{" "}
          </Point>
          <Point>
            My Github profile -{" "}
            <a href="https://github.com/ArjobanSingh" target="_blank">
              HERE!{" "}
            </a>
          </Point>
        </ul>
        <h2>Certifications</h2>
        <ul className="certifications">
          {Object.keys(Titles).map((key) => (
            <Certificate key={key} title={key} url={Titles[key]} />
          ))}
        </ul>
      </div>
    </div>
  );
}
