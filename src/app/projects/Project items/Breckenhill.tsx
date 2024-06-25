"use client";

import { Fade } from "react-awesome-reveal";
import BreckenhillIcons from "../Icon Lists/BreckenhillIcons";
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
          src="/Breckenhill2.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer hover:drop-shadow-2xl ease-in-out rounded-md transition-opacity"
          draggable="false"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>Breckenhill</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <div className="transition ease-in-out delay-500">
                <p className="card-text text-dark">
                  Wedding and events venue building on an existing{" "}
                  <strong>WordPress</strong> site, focusing on improving{" "}
                  <strong>
                    performance, responsiveness, layout and accessibility
                  </strong>
                  . I used a bright and bold theme, with classic fonts. I worked
                  alongside a designer for the colour scheme and photos.
                </p>
              </div>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="https://www.breckenhill.co.uk">
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
            <BreckenhillIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
