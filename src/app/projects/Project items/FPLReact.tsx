"use client";

import { Fade } from "react-awesome-reveal";
import FPLProjectIcons from "../Icon Lists/FPLProjectIcons";
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
          src="/fpl-react.png"
          alt="project screenshot"
          onClick={toggleTextBox1}
          className="pointer"
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
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> View
                </button>
              </a>
              <a href="https://github.com/georgereade/fpl-react-app">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/github.svg" height="24" alt="git icon" /> Source
                  code
                </button>
              </a>
            </div>
            <div onClick={toggleTextBox1}>
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
            <FPLProjectIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
