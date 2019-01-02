import React from 'react';
import { Grid, Col, Row, } from 'react-bootstrap';
import profile from "./Images/profile_pic.jpg";
import { IoMdPin } from "react-icons/io";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';




const Image = () => {


  return (

    <Grid fluid='True'>
      <Row>
        <Col xs={12} md={4} className="profile_info" > <img className="profile_img" src={profile} />
          <div className="profile_text">
            <p><IoMdPin color='#cc0605' /> London,UK</p>
            <SocialIcon url="http://twitter.com/jaketrent" />

            <p>social media stuff: linkin,github,tewitter </p>
            <p>github</p>
            <p>hackatons</p>
            <p>My languages: </p>
            <p>hobbies</p>
          </div>
        </Col>
        <Col xs={12} md={7} className="profile_intro" >
          <h1>Hi there </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
         Intro about you, interest,</p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Intro about you, interest,
         </p>


          <h3>My projects</h3>
          <ul>
            <li> Gym website </li>
            <li> Lash website:  <a href=" https://lashwebsite.netlify.com/"> https://lashwebsite.netlify.com/ </a></li>
            <li><a href="https://searchtv.netlify.com/">Tv series find, API with Async/Await. </a> </li>
            <li> <a href="https://hienh.github.io/hien_bootstrapWIT/">WiT site</a></li>
            <li><a href="https://weather-api.netlify.com/?_ga=2.80185303.1306123382.1545529990-2078763423.1542043851"> Weather search, API with Async/Await. </a> </li>
          </ul>
        </Col>
      </Row>
    </Grid>


  );
};

export default Image;