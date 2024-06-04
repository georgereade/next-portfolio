"use client";

import { Fade } from "react-awesome-reveal";
import CarLandingIcons from "../Icon Lists/CarLandingIcons";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export default function Page() {
  const [isTextBox1Visible, setTextBox3Visible] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const toggleTextBox1 = () => {
    setTextBox3Visible(!isTextBox1Visible);
    setRotationAngle(rotationAngle + 180);
  };

  return (
    <div className="hidden md:block col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/CarLanding.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer hover:scale-105 transition ease-in-out rounded-md"
        />
        <h6 className="mx-3 mt-1">
          <strong>Car Landing Page</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <p className="card-text text-dark">
                A demonstration of how I can showcase your company&apos;s new
                product or service. In this example, the design is clean and
                precise to mirror the car, which also inspires the colour scheme
                and navbar. This page is built with responsiveness and
                accessibility as core priorities.
              </p>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="https://georgereade.github.io/Car-landing-page/">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> Visit
                </button>
              </a>
              <a href="https://github.com/georgereade/Car-landing-page">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img
                    src="/github.svg"
                    height="22"
                    width="22"
                    alt="git icon"
                    className=""
                  />{" "}
                  Source code
                </button>
              </a>
            </div>
            <div
              onClick={toggleTextBox1}
              className="pointer flex flex-row transition ease-in-out delay-150"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              <CiCircleChevDown className="text-2xl"></CiCircleChevDown>
            </div>
            <CarLandingIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
