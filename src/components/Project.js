import React from 'react';
import '../App.css';

export default function Project(props){
    return (
      <div className="project-overview">
        <p className="details">{props.description}

        {props.link ?
        <a href={props.link} target="_blank"> Visit</a>: <a/>}
        <br />
        Github Code link -
        <a href={props.github} target="_blank">Here</a>
        </p>
        <div className="my-img-div">
          <a href={props.link} target="_blank">
          <img className="my-img" src={props.img} alt={props.alt} />
          </a>
        </div>
      </div>
    )
}
