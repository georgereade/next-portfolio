"use client";

import Header from "../components/Header";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <div>
        {" "}
        <div className="py-5 mt-5 container">
          <Slide triggerOnce={true} delay={500}>
            <h4>Education</h4>
            <h5>Courses and Bootcamps</h5>
          </Slide>
          <ul>
            <Fade triggerOnce={true} delay={1500}>
              <li>
                The Complete 2023 Web Development Bootcamp (Udemy)
                <a href="https://www.udemy.com/certificate/UC-c255844f-ef51-4b45-8575-5083307947fa/">
                  {" "}
                  Link to certificate
                </a>
              </li>
              <li>
                Google UX Design Certificate
                <a href="https://www.coursera.org/professional-certificates/google-ux-design/">
                  {" "}
                  Link to course
                </a>
              </li>
              <li>
                The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
                (Udemy)
                <a href="https://www.udemy.com/certificate/UC-566e6ca8-6454-4236-9f8d-a3f07b0f11e5/">
                  {" "}
                  Link to certificate
                </a>
              </li>
            </Fade>
          </ul>
          <Fade triggerOnce={true} delay={1500}>
            <h5>University of Leeds: Chinese 2013 - 2017</h5>

            <ul>
              <li>
                Comprehensive Chinese course, primarily focused on learning
                Mandarin. This included modules on the history and culture of
                China.
              </li>
              <li>
                Studied additional computer science modules including an
                introduction to web development, gaining my initial experience
                and interest in coding and data science.
              </li>
            </ul>
          </Fade>
          <hr />
          <Slide triggerOnce={true} delay={500}>
            <h4>Experience</h4>
            <h5>Penta Group: Insight Director 2018 - Present</h5>
          </Slide>
          <Fade triggerOnce={true} delay={1500}>
            <ul>
              <li>
                Scope, oversee and plan insight reports and marketing projects.
              </li>
              <li>Manage and train a group of four junior analysts.</li>
              <li>
                Prepare and maintain dashboards and ensure ongoing accuracy of a
                varied selection of data sources.
              </li>
              <li>
                Pre-sales support, including project design, pricing, and
                advising on the best solutions to meet client requirements.
              </li>
              <li>
                Heavily involved in successful pitches to prospective clients in
                the role of technical, reputation and brand expert.
              </li>
              <li>
                Present findings to groups of up to 50 people, including senior
                stakeholders such as the Heads of Communications of FTSE 100
                businesses.
              </li>
              <li>Lead the introduction of new automation tools.</li>
            </ul>
          </Fade>
          <hr />
          <Slide triggerOnce={true} delay={500}>
            <h4>Skills</h4>
          </Slide>
          <Fade triggerOnce={true} delay={1500}>
            <p>
              Javascript / HTML / CSS / React.js / Next.js / Node.js / Chinese
              (Mandarin) / Excel / SQL / Presentations / Data Visualisation
            </p>
          </Fade>
          <Slide triggerOnce={true} delay={500}>
            {" "}
            <h4>Interests</h4>
          </Slide>
          <Fade triggerOnce={true} delay={1500}>
            <p>Sports / Music / Technology / Languages / Video Games</p>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}
