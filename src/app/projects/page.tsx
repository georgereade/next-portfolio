"use client";

import { Slide, Fade } from "react-awesome-reveal";
import { useState } from "react";
import FPLReact from "./Project items/FPLReact";
import Breckenhill from "./Project items/Breckenhill";
import CarLandingPage from "./Project items/CarLandingPage";
import Element from "./Project items/Element";
import PortfolioProject from "./Project items/PortfolioProject";
import UnderTheDrum from "./Project items/UnderTheDrum";

export default function Page() {
  const [isTextBox3Visible, setTextBox3Visible] = useState(false);

  const toggleTextBox3 = () => {
    setTextBox3Visible(!isTextBox3Visible);
  };

  return (
    <section className="bg-gray-700 py-6 mt-12 md:mt-4">
      <div className="container" id="projects-section">
        <section className="bg-transparent pb-5 text-center container">
          <div className="row py-lg-5">
            <Fade triggerOnce={true}>
              <div className="col-lg-6 col-md-8 mx-auto pt-5">
                {/* <h1 className="text-5xl">My Work</h1> */}
                <Fade delay={100} triggerOnce={true}>
                  <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                    My freelance and personal projects vary in complexity and
                    method, but my core tools are
                    <br />{" "}
                    <span className="font-extrabold text-blue-400">
                      WordPress
                    </span>{" "}
                    and{" "}
                    <span className="font-extrabold text-emerald-500">
                      React
                    </span>
                    .<br />
                    In all of my work, I build with the principles of <br />
                    <span className="font-extrabold text-orange-300">
                      accessibility, responsiveness and performance
                    </span>
                    .
                  </p>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>
        <div className="album pt-1 mb-12 bg-body-tertiary bg-transparent">
          <Fade cascade delay={200} triggerOnce={true}>
            <div className="container pb-0 mb-0">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Element />
                <Breckenhill />
                <UnderTheDrum />
                <CarLandingPage />
                <FPLReact />
                <PortfolioProject />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
