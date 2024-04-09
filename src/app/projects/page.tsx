"use client";

import { Slide, Fade } from "react-awesome-reveal";
import { useState } from "react";
import FPLReact from "./Project items/FPLReact";
import Breckenhill from "./Project items/Breckenhill";
import CarLandingPage from "./Project items/CarLandingPage";
import Element from "./Project items/Element";
import PortfolioProject from "./Project items/PortfolioProject";

export default function Page() {
  const [isTextBox3Visible, setTextBox3Visible] = useState(false);

  const toggleTextBox3 = () => {
    setTextBox3Visible(!isTextBox3Visible);
  };

  return (
    <main>
      <div className="container">
        <section className="bg-transparent py-5 text-center container">
          <div className="row py-lg-5">
            <Slide triggerOnce={true}>
              <div className="col-lg-6 col-md-8 mx-auto pt-5">
                <h1>Projects</h1>
                <Fade delay={1000} triggerOnce={true}>
                  <p className="fs-5 mb-2">
                    Freelance and personal projects which showcase a variety of
                    skills, languages and frameworks.
                  </p>
                </Fade>
              </div>
            </Slide>
          </div>
        </section>
        <div className="album pt-1 bg-body-tertiary bg-transparent">
          <Fade cascade delay={1500}>
            <div className="container pb-0 mb-0">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Element />
                <Breckenhill />
                <CarLandingPage />
                <FPLReact />
                <PortfolioProject />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
