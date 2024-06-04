"use client";

import { Fade } from "react-awesome-reveal";
import ElementIcons from "../Icon Lists/ElementIcons";
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
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/Element.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer hover:scale-105 transition ease-in-out rounded-md"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>Element Consultants</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <p className="card-text text-dark">
                Northern Ireland-based environmental consultancy. I used a clean
                and modern design with large images. The colour scheme draws
                from the company&apos;s logo, and other design choices such as
                fonts focused on being clear and professional. Designed with{" "}
                <strong>WordPress, custom CSS and JavaScript.</strong>
              </p>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="https://www.elementconsultants.co.uk">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> Visit
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
            <ElementIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
