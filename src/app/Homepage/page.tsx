"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Homepage() {
  return (
    <main>
      <div
        className="container py-3 my-4 pb-5 items-center place-content-center h-screen flex flex-col md:flex-row"
        id="hero"
      >
        <Fade delay={2e1} cascade damping={1e-1} triggerOnce={true}>
          <img
            alt="Main logo with my name"
            src="/main-logo.png"
            className="pt-24 size 1/12 md:w-9/12 place-content-center"
          />
        </Fade>
        <div className="bg-transparent text-secondary text-center mb-6">
          <Fade triggerOnce={true}>
            <div className="flex flex-col">
              <p className="my-1 md:my-4 text-xl md:text-3xl md:pt-40 leading-loose">
                Hi, I'm George, a UK-based web developer <br />
                View my work below or get in touch to chat about what I can do
                for you
              </p>
              <div
                className="d-grid gap-2 d-sm-flex justify-content-sm-center"
                id="indexbtns"
              >
                <Fade delay={800} triggerOnce={true}>
                  <a
                    href="#projects-section"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold my-1"
                    id="projectsbtn"
                  >
                    My Work
                  </a>
                </Fade>
                <Fade delay={1100} triggerOnce={true}>
                  <a
                    href="#contact-section"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold my-1"
                    id="cvbtn"
                  >
                    Contact
                  </a>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
