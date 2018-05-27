import React, { Component } from 'react';

import './About.css';

import backgroundImage from '../images/intro/9.jpg';

import comp2016_7 from '../images/2016-comp/7.jpg';

import comp2017_20 from '../images/2017-comp/20.jpg';
import comp2017_11 from '../images/2017-comp/11.jpg';

import build2017_5 from '../images/2017-build/5.jpg';
import build2017_2 from '../images/2017-build/2.jpg';
import BackgroundImage from "../BackgroundImage/BackgroundImage";

// TODO: CHANGE TITLE

// TODO: REFACTOR INLINE STYLES

// TODO: break into more components Paragraph, image

export default class About extends Component {
  render() {
    return (
      <div>
        <BackgroundImage src={backgroundImage}/>
        <h1 className="page-title">About</h1>

        <div className="about-outer">
          <img src={comp2017_20} style={{ marginTop: '-0.5vw' }} className="about-img left" alt="the team at competition" />
          <h2 className="main-h2" style={{ marginTop: '-0.5vw' }}>TEAM OVERVIEW</h2>
          <p>We are Fairview Robotics, a high school robotics team from Fairview High School in Boulder, Colorado.
            Our robotics team consists of a group of motivated students that have a passion for robotics and STEM.
            Our team participates in the FIRST Robotics Competition (FRC), which gives us the opportunity to express
            ourselves
            through STEM and robotics, something that we don’t typically get the opportunity to do. By participating in
            this competition, we provide an outlet to motivated students to pursue their interests in math, science,
            technology, and engineering.</p>

          <img src={comp2017_11} className="about-img right" alt="high fiving" />
          <p>Our rookie season was in 2007, and since then, we have grown to become a very successful team.
            In 2010, our team won the regional event and attended the World Championship in Atlanta. In the 2017 Denver
            regional competition, we won 6th place out of 50 teams that came from all across the United States.
            This year, we hope to compete at both the Denver and Utah regional competitions, as well as going to
            Nationals!</p>

          <img src={build2017_5} className="about-img left" alt="the team working on the robot" />
          <p>The great thing about how we structure our team is that it’s highly educational, completely student run,
            and
            fun for all of our team members. Inclusivity and diversity are hardwired into our team. The perceived
            difficulty
            of robotics can be very off-putting to an inexperienced individual, so we try to close this gap by offering
            training and creating an inclusive, fun, and creatively active environment.</p>


          <img src={comp2016_7} style={{ marginTop: '2.5vh' }} className="about-img right" alt="2016 robot" />
          <h2 className="main-h2" style={{ marginTop: '5vw' }}>ABOUT FIRST ROBOTICS</h2>
          <p>FIRST (For Inspiration and Recognition of Science Technology) Robotics is a national competition where high
            school
            teams build and program 120-pound robots from scratch during a six week period. This competition inspires
            young
            adults to pursue careers in engineering, computer science, mathematics, and many other STEM fields. It also
            gives its participants valuable, real-life leadership skills, communication skills, and self-confidence. By
            participating in FIRST Robotics, we hope to provide these opportunities to our students here on the team.
            For
            more information on FIRST Robotics, visit <a
              href="https://www.firstinspires.org/">https://www.firstinspires.org/</a>.</p>

          <img src={build2017_2} className="about-img left" alt="bag night 2017" />
          <h2 className="main-h2" style={{ marginTop: '2.5vw' }}>MEETINGS &amp; SCHEDULE</h2>
          <p>During the first semester, we meet every week after school on Wednesdays between 3:30-5:00 PM. However,
            for the six weeks of our season between January and February, we meet every day after school between
            3:30-7:00 PM and on Saturdays from 10 AM - 4 PM. This is in order to build the robot to solve the challenges
            described by the annual FIRST competition announced at the beginning of January. While you will learn more
            as a dedicated member of the team, we understand that people have other commitments, and it’s not essential
            to come to every meeting during the build season.</p>
        </div>
      </div>
    );
  }
}
