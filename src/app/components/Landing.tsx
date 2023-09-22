"use client";

import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import Footer from "./Footer";
import { FaJs, FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Landing() {
  return (
    <div>
      <div className="container py-3 my-5" id="hero">
        <Fade delay={1e1} cascade damping={1e-1} triggerOnce={true}>
          <img
            alt="Main logo with my name"
            src="/main-logo.png"
            width="400"
            height="400"
          />
        </Fade>
        <div className="bg-transparent text-secondary text-center">
          {/* <div className="py-5">
            {" "} */}
          {/* <Fade delay={1e1} cascade damping={1e-1} triggerOnce={true}>
              <h1 className="display-5 fw-bold" id="nameHeader">
                George Reade
              </h1>
            </Fade> */}
          <Slide triggerOnce={true}>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4 pt-5">UK-based web developer </p>
              <p className="fs-5 mb-4">
                {" "}
                View my projects and CV at the links below or scroll down to
                learn a bit more about me
              </p>{" "}
              <div
                className="d-grid gap-2 d-sm-flex justify-content-sm-center"
                id="indexbtns"
              >
                <Fade delay={800} triggerOnce={true}>
                  <a
                    href="projects"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    id="projectsbtn"
                  >
                    Projects
                  </a>
                </Fade>
                <Fade delay={1100} triggerOnce={true}>
                  <a
                    href="CV"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    id="cvbtn"
                  >
                    CV
                  </a>
                </Fade>
              </div>
            </div>
          </Slide>
          <div className="icon-row mt-5">
            <Fade cascade delay={500} damping={0.2}>
              {" "}
              <FaJs
                className="icon techIcon"
                fill="#EFF52B"
                title="JavaScript"
              />
              <FaHtml5 className="icon techIcon" fill="red" title="HTML" />
              <FaCss3 className="icon techIcon" fill="#2B78F5" title="CSS" />
              <FaReact className="icon techIcon" fill="#61dbfb" title="React" />
              <SiNextdotjs
                className="icon techIcon"
                fill="white"
                title="Next.js"
              />
              <FaNode
                className="icon techIcon"
                fill="#66cc33"
                title="Node.js"
              />
            </Fade>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom text-white">About Me</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <Fade cascade>
            <div className="col d-flex flex-column align-items-start gap-2">
              <h2 className="fw-bold">Hello, I&apos;m George</h2>
              <h4 className="white">
                I have a wide range of skills and interests which helps me to
                connect with my projects and understand how to put my clients
                vision into action.
              </h4>
              <Fade delay={500} triggerOnce={true}>
                <Image
                  src="/profilepic.jpg"
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
                    I have worked with many modern languages and frameworks
                    including Javascript, HTML, CSS, React.js, Next.js and Node.
                    I particularly enjoy learning new skills and have recently
                    completed a web development bootcamp.
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
                    I have over five years experience in data analysis and
                    insight roles, which has helped me develop important
                    technical, client facing and project management skills. This
                    has helped me to appreciate the importance of testing and
                    user-centric design.
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
                  <h4 className="fw-semibold mb-0">Skills</h4>
                  <p>
                    I love learning foreign languages, and lived in Shanghai for
                    a year while studying Chinese. I also have a strong interest
                    in music and play the guitar and drums.
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
      </div>
      <Slide triggerOnce={true} delay={200}>
        <div className="my-5 animate__animated animate__backInUp">
          <div className="p-5 text-center bg-body-tertiary">
            <div className="container py-5">
              <h1 className="text-white">Contact Me</h1>
              <p className="col-lg-8 mx-auto lead">
                Follow the links below to get in touch
              </p>
              <div className="justify-content-between">
                <ul className="nav col-md-12 justify-content-center list-unstyled d-flex">
                  <li className="ms-3">
                    <a href="mailto:georgereade@hotmail.co.uk">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-envelope-at"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />{" "}
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="https://www.linkedin.com/in/george-reade-2a1185124">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="https://github.com/georgereade/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Footer />
    </div>
  );
}
