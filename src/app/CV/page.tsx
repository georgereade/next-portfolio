"use client";

import Header from "../components/Header";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <div>
        <div className="container px-4 py-5 mt-4">
          <h2 className="pb-2 border-bottom text-white mt-5 pt-5">About Me</h2>
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <Fade cascade triggerOnce={true}>
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold">Hello, I&apos;m George</h2>
                <h4 className="white" id="aboutMeH4">
                  I am available for any freelance website projects. I can work
                  with you to design, build and implement your ideas.
                </h4>
                <Fade delay={500} triggerOnce={true}>
                  <Image
                    src="/me-on-bike2.jpg"
                    className="profilepic"
                    alt="picture of me"
                    width="200"
                    height="200"
                  />
                </Fade>
              </div>

              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-1 g-4">
                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-code-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0">Web Development</h4>
                    <p>
                      I work with languages and frameworks including Javascript,
                      HTML, CSS, React.js, Next.js and Node. I enjoy learning
                      new skills and taking on challenges. I also have
                      experience with CMS tools including Wordpress.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-person-workspace"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0">Other Experience</h4>
                    <p>
                      Six years of experience in data analysis and insight roles
                      has helped me to develop important technical, client
                      facing and project management skills. This has also helped
                      me to appreciate the importance of testing and
                      user-centric design.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>{" "}
        <Slide triggerOnce={true} delay={500}>
          <div className="py-5 mt-5 container">
            <h4>Education</h4>
            <h5>Courses and Bootcamps</h5>
            <ul>
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
            </ul>
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
            <hr />
            <h4>Skills</h4>
            <p>
              Javascript / HTML / CSS / React.js / Next.js / Node.js / Chinese
              (Mandarin) / Excel / SQL / Presentations / Data Visualisation
            </p>{" "}
            <h4>Interests</h4>
            <p>Sports / Music / Technology / Languages / Video Games</p>
          </div>
        </Slide>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
