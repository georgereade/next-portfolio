"use client";

import Navbar from "../components/Navbar";
import React from "react";
import { Slide } from "react-awesome-reveal";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>George Reade</h1>
        <h2>Web Developer</h2>
        <Slide>
          <h4>Education</h4>
          <h5>Courses and Bootcamps</h5>
        </Slide>
        <ul>
          <Slide>
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
          </Slide>
        </ul>
        <Slide>
          <h5>University of Leeds: Chinese 2013 - 2017</h5>

          <ul>
            <li>
              Comprehensive Chinese course, primarily focused on learning
              Mandarin. This included modules on the history and culture of
              China.
            </li>
            <li>
              Undertook several additional computer science modules including an
              introduction to web development, gaining my initial understanding
              and interest in coding and data science.
            </li>
          </ul>
          <hr />
          <h4>Experience</h4>
          <h5>Penta Group: Insight Director 2018 - Present</h5>
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
              Pre-sales support, including project design, pricing, and advising
              on the best solutions to meet client requirements.
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
          <hr />
          <h4>Skills</h4>
          <p>
            JS / HTML / CSS / React.js / Next.js / Node.js / Chinese (Mandarin)
            / Excel / SQL / Presentations / Data Visualisation
          </p>
          <h4>Interests</h4>
          <p>Sports / Music / Technology / Languages / Video Games</p>
        </Slide>
      </div>
    </div>
  );
}
