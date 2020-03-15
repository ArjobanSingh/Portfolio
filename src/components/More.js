import React from 'react';
import '../App.css';
import EduBlog from '../assets/EduBlog.png'
import Project from './Project'
import Pizza from '../assets/Pizza.png'

export default function More(props){
    const eduDetails = `Social Networking kind of Web-App created using Django, which allows users to register(with email confirmation) and sign in,
    check blog posts by other users, feature to follow and unfollow others, allow users
    to post their blog-posts, and some basic things like posting and changing profile picture as well as bio.
    And last but not least, a page to see onlt posts, posted by thew Authors, the user follows.

    Created this app, When I was not good at Frontend and CSS, so its aesthetics are minimilstic but works fully fine. `;

    const pizzaDetails = `Pizza Ordering App made using Django, where users can register, login, order pizza's and some other items
    by adding them to cart. This app also uses Ajax requests to update price of eatables when extra toppings are added.
    User can go to cart after adding products in that and delete anything - he does'nt want to order or can give
    final order after seeing total price. One more thing Owner of resturant or app can go to owner's page And
    can complete orders and user can check their order details - if it is completed or not.
    This project is not online yet, but you can check its video.<a/>
    `
    return (
      <div className="projects">
        <h2 className="project-heading">PROJECTS</h2>
          <div className="project-details">
            <h3 className="project-name">Info-Hub</h3>
            <Project description={eduDetails}
              link="https://djangoinfohub.herokuapp.com/"
              img={EduBlog}
              alt="eduBlog Project"
              github="https://github.com/ArjobanSingh/Django-Project-Info-Hub"
              />
            <h3 className="project-name">Pizza Ordering App</h3>
            <Project description={pizzaDetails}
              link="https://www.youtube.com/watch?v=SnHRSHKd-o0"
              img={Pizza}
              alt="pizza-ordering Project"
              github="https://github.com/ArjobanSingh/Django-Pizza-Ordering-App"
              />

              <h4>More Projects on the way!</h4>
          </div>
          <div className="note">This is simple portfolio(for now). Will update this soon with new Projects soon
            <a href="https://github.com/ArjobanSingh/Portfolio" target="_blank">Github link for this project </a>
          </div>
      </div>
    )
}
