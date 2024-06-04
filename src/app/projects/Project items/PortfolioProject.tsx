"use client";

import { Fade } from "react-awesome-reveal";
import PortfolioIcons from "../Icon Lists/PortfolioIcons";
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
          src="/portfolio.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer hover:scale-105 transition ease-in-out rounded-md"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>Portfolio</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <p className="card-text text-dark">
                I built this portfolio using the React framework
                <strong> Next.js</strong>, written in{" "}
                <strong>Typescript</strong> and using{" "}
                <strong>Tailwind CSS</strong> for styling.
              </p>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="/">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> Visit
                </button>
              </a>
              <a href="https://github.com/georgereade/next-portfolio">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img
                    src="/github.svg"
                    height="23"
                    width="23"
                    alt="git icon"
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
            <PortfolioIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
