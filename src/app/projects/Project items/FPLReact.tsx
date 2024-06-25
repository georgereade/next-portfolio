"use client";

import { Fade } from "react-awesome-reveal";
import FPLProjectIcons from "../Icon Lists/FPLProjectIcons";
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
    <div className="hidden col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/fpl-react.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer hover:drop-shadow-2xl transition ease-in-out rounded-md"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>FPL React App</strong>
        </h6>{" "}
        <div className="card-body">
          {" "}
          {isTextBox1Visible && (
            <Fade>
              <p className="card-text text-dark">
                <strong>React </strong> app which displays gameweek and team
                stats using the Fantasy Premier League <strong>API</strong>. I
                used <strong>Node</strong> and <strong>CSS</strong> and deployed
                on Render.com using a proxy server. Stats will automatically
                update throughout the season. Please note that this is hosted on
                a free server, so it may take a minute to load.
              </p>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="https://fpl-react-app.onrender.com/">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> Visit
                </button>
              </a>
              <a href="https://github.com/georgereade/fpl-react-app">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img
                    src="/github.svg"
                    height="22"
                    width="22"
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
            <FPLProjectIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
