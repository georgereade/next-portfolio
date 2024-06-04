"use client";

import { Fade } from "react-awesome-reveal";
import ToDoListIcons from "../Icon Lists/ToDoListIcons";
import { useState } from "react";

export default function Page() {
  const [isTextBox2Visible, setTextBox2Visible] = useState(false);

  const toggleTextBox2 = () => {
    setTextBox2Visible(!isTextBox2Visible);
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="225"
          src="/to-do-list.png"
          alt="project screenshot"
          onClick={toggleTextBox2}
          className="pointer hover:scale-105 transition ease-in-out rounded-md"
        />
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <h6 className="mx-3 mt-1">
          <strong>To Do List</strong>
        </h6>

        <div className="card-body">
          {isTextBox2Visible && (
            <Fade>
              <p className="card-text text-dark">
                A simple to do list app with a persistent database,
                demonstrating use of the back end with
                <strong> Node.js, Express, EJS</strong> and partials. The
                database is hosted on <strong>MongoDB</strong> and deployed on
                Render.com.
              </p>
            </Fade>
          )}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
              <a href="https://gr-to-do-list.onrender.com/">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/eye-solid.svg" height="24" alt="view icon" /> Visit
                </button>
              </a>
              <a href="https://github.com/georgereade/Portfolio/tree/main/projects/Hosted-To-Do-List">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <img src="/github.svg" height="24" alt="git icon" /> Source
                  code
                </button>
              </a>
            </div>
            <div onClick={toggleTextBox2} className="pointer">
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
            <ToDoListIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
