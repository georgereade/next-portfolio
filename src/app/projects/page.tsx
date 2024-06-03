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
    <section className="bg-gray-700 py-12" id="projects-section">
      <div className="container">
        <section className="bg-transparent pb-5 text-center container">
          <div className="row py-lg-5">
            <Fade triggerOnce={true}>
              <div className="pt-5">
                {/* <h1 className="text-5xl">My Work</h1> */}
                <Fade delay={100} triggerOnce={true}>
                  <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                    My freelance and personal projects vary in complexity and
                    method, but my core tools are <br />
                    <span className="font-extrabold text-blue-400">
                      WordPress
                    </span>{" "}
                    and{" "}
                    <span className="font-extrabold text-emerald-500">
                      React
                    </span>
                    .
                  </p>
                  <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                    In addition to building your website, I can help to provide
                    secure hosting under your own domain name.{" "}
                  </p>
                  <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                    Once your website is built I will implement SEO strategies
                    to help attract traffic and drive business.{" "}
                  </p>
                  <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                    Whether you already have the perfect design idea or want me
                    to lead the way, we can work together to build your vision.
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
