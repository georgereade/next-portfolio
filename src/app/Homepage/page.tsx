"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Homepage() {
  return (
    <main className="bg-[url('/electric-blue-tree.jpg')] bg-center md:bg-left md:bg-cover bg-fixed">
      <div
        className="container pt-3 items-center place-content-center h-screen flex flex-col md:flex-row"
        id="hero"
      >
        <Fade delay={2e1} cascade damping={1e-1} triggerOnce={true}>
          {/* <img
            alt="Main logo with my name"
            src="/electric-blue-tree.jpg"
            className="pt-24 object-none place-content-center skew-x-3 opacity-50"
          /> */}
        </Fade>
        <div className="bg-transparent text-secondary text-center mb-6">
          <Fade triggerOnce={true}>
            <div className="flex flex-col">
              <h1 className="my-1 md:my-4 py-12 mx-2 text-xl md:text-3xl md:pt-40 leading-loose">
                UK-based freelance web developer creating clean, modern and fast
                web apps
                <br />
              </h1>
              <div className="flex flex-col rounded-xl backdrop-blur-xl w-full h-fit shadow-orange-300 shadow-md border-2 border-orange-300 z-50">
                <h2 className="pt-4 text-xl md:text-3xl">
                  {" "}
                  All of my work follows principles of <br />
                  <span className="font-extrabold text-orange-300">
                    accessibility, responsiveness
                  </span>{" "}
                  and{" "}
                  <span className="font-extrabold text-orange-300">
                    performance
                  </span>
                </h2>
                <p className="py-4 leading-loose text-md md:text-xl">
                  {" "}
                  View the examples below or get in touch to see what I can do
                  for you
                </p>
              </div>

              <div
                className="flex flex-row justify-content-sm-center py-28"
                id="indexbtns"
              >
                <Fade delay={800} triggerOnce={true}>
                  <a
                    href="#projects-section"
                    className="btn btn-outline-info btn-lg mx-4 fw-bold my-1 transition ease-in-out w-40 md:w-64 hover:scale-110 delay-50 origin-center shadow-xl shadow-blue-500"
                    id="projectsbtn"
                  >
                    My Work
                  </a>
                </Fade>
                <Fade delay={1100} triggerOnce={true}>
                  <a
                    href="#contact-section"
                    className="btn btn-outline-info btn-lg mx-4 fw-bold my-1 transition ease-in-out w-40 md:w-64 hover:scale-110 delay-50 shadow-xl shadow-green-500"
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
