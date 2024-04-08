"use client";

import { Fade } from "react-awesome-reveal";
import PortfolioIcons from "../Icon Lists/PortfolioIcons";
import { useState } from "react";

export default function Page() {
  const [isTextBox3Visible, setTextBox3Visible] = useState(false);

  const toggleTextBox3 = () => {
    setTextBox3Visible(!isTextBox3Visible);
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/portfolio-ss.png"
          alt="project screenshot"
          onClick={toggleTextBox3}
          className="pointer"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>Portfolio</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox3Visible && (
            <Fade>
              <p className="card-text text-dark">
                I built this portfolio using the React framework
                <strong> Next.js</strong>, written in{" "}
                <strong>Typescript</strong> and using <strong>Bootstrap</strong>{" "}
                for styling. I self-taught Next.js, which proved to be an
                enjoyable and engaging challenge.
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
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> View
                </button>
              </a>
              <a href="https://github.com/georgereade/next-portfolio">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/github.svg" height="24" alt="git icon" /> Source
                  code
                </button>
              </a>
            </div>
            <div onClick={toggleTextBox3}>
              Expand
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <PortfolioIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
