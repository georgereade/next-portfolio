"use client";

import { Button, Link } from "@nextui-org/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <main className="bg-[url('/electric-blue-tree.jpg')] bg-center md:bg-left md:bg-cover md:bg-fixed w-screen scroll-smooth">
      <div
        className="pt-3 items-center place-content-center h-screen flex flex-col"
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
            <div className="flex flex-col w-96 px-4 md:w-auto items-center">
              <h1 className="my-1 md:my-4 py-12 pt-28 mx-4 text-xl md:text-3xl md:pt-40 leading-loose text-white">
                UK-based freelance web developer creating clean, modern and fast
                web apps
                <br />
              </h1>
              <div className="flex flex-col rounded-xl backdrop-blur-xl h-fit shadow-orange-300 shadow-md border-2 border-orange-300 z-50">
                <h2 className="pt-4 text-xl md:text-3xl mx-8 text-gray-300">
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
                <p className="py-4 leading-loose text-md md:text-xl mx-16">
                  {" "}
                  View some examples below or get in touch to see what I can do
                  for you
                </p>
              </div>

              <div
                className="flex flex-row justify-content-sm-center py-28"
                id="indexbtns"
              >
                <Fade delay={800} triggerOnce={true}>
                  <Link href="#projects-section">
                    <Button
                      className="text-2xl uppercase m-4 p-2 font-bold bg-transparent text-blue-500 border-blue-500 border-2 rounded-lg transition ease-in-out w-40 md:w-64 hover:bg-blue-500 hover:text-white delay-50 origin-center shadow-xl hover:shadow-blue-500"
                      id="projectsbtn"
                    >
                      Portfolio
                    </Button>
                  </Link>
                </Fade>
                <Fade delay={1100} triggerOnce={true}>
                  <Link href="#contact-section">
                    <Button
                      className="text-2xl uppercase m-4 p-2 font-bold bg-transparent text-emerald-500 border-emerald-500 border-2 rounded-lg transition ease-in-out w-40 md:w-64 hover:bg-emerald-500 hover:text-white delay-50 shadow-xl hover:shadow-green-500"
                      id="cvbtn"
                    >
                      Contact
                    </Button>
                  </Link>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
