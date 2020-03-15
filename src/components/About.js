import React from 'react';
import '../App.css';
import Myself from '../assets/Myself.jpg'

export default function About(props){
    return (
      <div className="about">
          <div className="my-img-div">
            <img className="my-img" src={Myself} alt="Author" />
          </div>
          <div className="my-bio">
            <h2>About Me</h2>
            <ul>
              <li>I am 21(soon to be 22) years old self-taught programmer.</li>
              <li>Started My Programmin journey last year, from CS50X course-
                <a href="https://cs50.harvard.edu/certificates/9c68aafd-d3a4-4d02-be0d-416a9a5e2a8f" target="_blank">
                 Check Certificate
                </a>
              </li>
              <li>After that, did CS50:Web MOOC from Harvard, where I learnt Backend development
                using Flask and Django and learnt about databases-
                <a href="https://certificates.cs50.io/9b8f9b2b-5c80-4241-83f7-cf6e7f852641.pdf?size=letter" target="_blank">
                Check Certificate
                </a>
                </li>
              <li>Comfortable with major programming languages.</li>
              <li>Learnt React from online resources and this portfolio is built using Reactjs</li>
              <li>Currently learning React Native from CS50M course, and have made some beginners projects</li>
              <li> Comfortable with major programming languages - C, Java, Python, JavaScript </li>
              <li>My Github profile - <a href="https://github.com/ArjobanSingh" target="_blank">HERE! </a></li>
            </ul>
          </div>
      </div>
    )
}
