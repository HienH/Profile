import React from 'react';
import { Grid, Col, Row, } from 'react-bootstrap';
import profile from "./Images/profile_pic.jpg";
import { IoMdPin } from "react-icons/io";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import lash from "./Images/lashes.jpg";
import gym from "./Images/gym.png";
import tvseries from "./Images/tvseries.png";
import weather from "./Images/weather.png";
import witweb from "./Images/witweb.png";
import pokemon from "./Images/pokemonbmi.png";
import titanic from "./Images/titanic.png";








const Profile = () => {


    return (

        <Grid fluid='True'>
            <Row>
                <Col xs={12} lg={3} className="profile_info" > <img className="profile_img" src={profile} />
                    <div className="profile_text">
                        <p className="name">Hien Hang</p>
                        <p><IoMdPin color='#cc0605' /> London, UK</p>
                        <p>Languages:<span className="label">HTML, CSS, JavaScript, Python</span></p>
                        <p>Frameworks: <span className="label">React, Bootstrap</span></p>
                        <p> Attended Hackatons: <span className="label">3</span> </p>
                        <Row>
                        <p className="socialmedia">Find me </p>

                            <Col xs={6}>
                                <p>
                                    <SocialIcon url="https://github.com/HienH/" bgColor='#ffffff' style={{ height: 60, width: 60 ,margin: 4 }} />
                                    <a href="https://github.com/HienH/" >Github</a> 
                                </p>
                            </Col>
                            <Col xs={6}>

                                <p>
                                    <SocialIcon url="https://www.linkedin.com/in/hien-hang-871226122/" bgColor='#0077B5' style={{ height: 60, width: 60, margin: 4 }} />
                                    <a href="https://www.linkedin.com/in/hien-hang-871226122/" >Linkin</a> </p>

                            </Col>
                        </Row>
                    </div>
                </Col>
                    <Col xs={12} lg={8} className="profile_intro" >
                        <h1>Hi there </h1>
                        <p>
                            My name is Hien, I am Economics gradate and a self taught software developer. My tech journey began right after I graduated in July 2018, when I decided to dedicate myself to learn to code and joined the 100 days of code challenge. I have since found a true passion for programming.
    
                        </p>
                        <p>
                            Currently, I am enrolled in the BT furtHer programme,  a full time intensive coding bootcamp that focuses on full stack development; covering web development, python, databases and TDD which runs until February2019
                        </p>
                        <p>What i am looking for </p>
                        <hr/>
                        <h3>Here are some projects I have built  </h3>

                        <Grid>
                            <Row>
                                <Col lg={6}><p className = "header">Front end:</p></Col>
                                <Col lg={6}><p className = "header" >Data Science:</p></Col>
                                </Row>
                            <Row className="projects">
                                <Col md={2}>
                                    <p> <br/>Personal trainer website  <strong>  (REACT) </strong> 
                                <a href=" https://personaltrainer.netlify.com/"> <img src={gym} style={{ height: '130px', width: '200px' }} className = "image"/> </a>
                                    </p>
                                </Col>

                                <Col md={2}>
                                    <p>  <br/> Tv series search <br/> <strong>  (REACT with API) </strong> 
    
                                     <a href="https://searchtv.netlify.com/">
                                            <img src={tvseries} style={{ height: '130px', width: '200px' }} className = "image"/>
                                        </a>
                                    </p>
                                    </Col>
                                    <Col md={2} >
                                        <p>  <br/> Lash extension website <strong> (HTML & CSS )</strong>
                                        <a href=" https://lashwebsite.netlify.com/" > <img src={lash} style={{ height: '130px', width: '200px' }} className = "image"/> </a>
                                </p>
                                </Col>
                            <Col md={4} className= "DS">
                                    <p>
                                        <li><a href="https://nbviewer.jupyter.org/github/hienh/titanic/blob/master/Titanic.ipynb">
                                                     Kaggle Titanic challenge <strong> (Python)  </strong> -

                                            </a> 
                                         Predict which passengers survived the titanic using machine learning 
                                         </li>
                                     </p> 
                                        
                                    
                                    
                                </Col>

                            </Row>
                            <Row className="projects"> 
                                <Col md={2}>
                                    <p> 
                                    <a href="https://weather-api.netlify.com/">
                                            <img src={weather} style={{ height: '130px', width: '200px' }} className = "image" />
                                        </a>
                                        <br/>   Weather search <br/><strong>(REACT with API)</strong>

                                    </p>
                                </Col>

                                <Col md={2}>
                                    <p> 
                                    <a href="https://pokemonbmi.netlify.com/">
                                            <img src={pokemon} style={{ height: '130px', width: '200px' }} className = "image" />
                                        </a>
                                       <br/> Pokemon Bmi Calculator  <strong>(JS & HTML & CSS)</strong>

                                    </p>
                                </Col>
                                <Col md={2}>
                                    <p>
                                    <a href="https://hienh.github.io/hien_bootstrapWIT/">
                                            <img src={witweb} style={{ height: '130px', width: '200px' }} className = "image"/>
                                        </a>
                                        <br/>  WIT website <br/> <strong>(HTML & CSS)</strong>

                                    </p>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>

            </Row>
        </Grid >


            );
        };
        
export default Profile;