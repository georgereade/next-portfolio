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
        <div className="container px-4 py-5 mt-4">
          <h2 className="pb-2 border-bottom text-white mt-5 pt-5">About Me</h2>
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <Fade cascade>
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold">Hello, I&apos;m George</h2>
                <h4 className="white" id="aboutMeH4">
                  A wide range of skills and interests helps me to be versatile
                  and flexible.
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
                      new skills and taking on challenges.
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
                    <h4 className="fw-semibold mb-0">Experience</h4>
                    <p>
                      Six years experience in data analysis and insight roles
                      has helped me to develop important technical, client
                      facing and project management skills. This has helped me
                      to appreciate the importance of testing and user-centric
                      design.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-music-note-beamed"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                        <path
                          fillRule="evenodd"
                          d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                        />
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0">Other Skills</h4>
                    <p>
                      I love learning foreign languages, and lived in Shanghai
                      for a year while studying Chinese. I also have a strong
                      interest in music and play the guitar and drums.
                    </p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-controller"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                      </svg>
                    </div>
                    <h4 className="fw-semibold mb-0">Interests</h4>
                    <p>
                      I am passionate about sports, particularly football and
                      tennis, as well as video games of all varieties.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>{" "}
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
