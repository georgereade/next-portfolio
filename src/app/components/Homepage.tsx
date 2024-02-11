"use client";

import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "./Footer";
import { FaJs, FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Homepage() {
  return (
    <div>
      <div className="container py-3 my-4 pb-5" id="hero">
        <Fade delay={2e1} cascade damping={1e-1} triggerOnce={true}>
          <img
            alt="Main logo with my name"
            src="/main-logo.png"
            width="450"
            height="450"
            id="mainLogo"
          />
        </Fade>
        <div className="bg-transparent text-secondary text-center mb-3">
          <Slide triggerOnce={true}>
            <div className="col-lg-12 mx-auto">
              <p className="fs-5 mb-4 pt-5">UK-based web developer </p>
              <p className="fs-5 mb-4">
                {" "}
                View my projects or find out more about me at the links below
              </p>{" "}
              <div
                className="d-grid gap-2 d-sm-flex justify-content-sm-center"
                id="indexbtns"
              >
                <Fade delay={800} triggerOnce={true}>
                  <a
                    href="projects"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold my-1"
                    id="projectsbtn"
                  >
                    Projects
                  </a>
                </Fade>
                <Fade delay={1100} triggerOnce={true}>
                  <a
                    href="CV"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold my-1"
                    id="cvbtn"
                  >
                    About Me
                  </a>
                </Fade>
              </div>
            </div>
          </Slide>
          <div className="icon-row mb-4 mt-5">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
