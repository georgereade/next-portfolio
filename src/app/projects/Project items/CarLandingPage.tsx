"use client";

import { Fade } from "react-awesome-reveal";
import BreckenhillIcons from "../Icon Lists/BreckenhillIcons";
import { useState } from "react";

export default function Page() {
  const [isTextBox1Visible, setTextBox1Visible] = useState(false);

  const toggleTextBox1 = () => {
    setTextBox1Visible(!isTextBox1Visible);
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/CarLanding.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>Car Landing Page</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <p className="card-text text-dark">
                A demonstration of a page to showcase a new product or service
                offered by your company. In this example, the design is clean
                and precise to reflect the product, which also inspires the
                colour scheme and navbar. This page is built with responsiveness
                and accessibility as core priorities.
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
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> View
                </button>
              </a>
            </div>
            <div onClick={toggleTextBox1} className="pointer">
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
            <BreckenhillIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
