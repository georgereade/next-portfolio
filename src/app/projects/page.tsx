"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Slide, Fade } from "react-awesome-reveal";
import PortfolioIcons from "./PortfolioIcons";
import FPLProjectIcons from "./FPLProjectIcons";
import ToDoListIcons from "./ToDoListIcons";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <section className="bg-transparent py-5 text-center container">
        <div className="row py-lg-5">
          <Slide>
            <div className="col-lg-6 col-md-8 mx-auto pt-3">
              <h1>Projects</h1>
              <Fade delay={1000}>
                <p className="fs-5 mb-4">
                  Here are some key examples of my work below. I have aimed to
                  showcase a variety of my skills and technologies and I am
                  constantly seeking to expand my knowledge.
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
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    width="100%"
                    height="225"
                    src="/fpl-react.png"
                    alt="project screenshot"
                  />
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <h6 className="mx-3 mt-1">
                    <strong>FPL React Info Tool</strong>
                  </h6>
                  <div className="card-body">
                    <p className="card-text text-dark">
                      <strong>React </strong> app which displays gameweek and
                      team stats using the Fantasy Premier League API. I used{" "}
                      <strong>Node</strong> and <strong>CSS</strong> and
                      deployed on Render.com using a proxy server. Stats will
                      automatically throughout the season.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="https://fpl-react-app.onrender.com/">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img
                              src="/eye-solid.svg"
                              height="24"
                              alt="view icon"
                            />{" "}
                            View Live Site
                          </button>
                        </a>
                        <a href="https://github.com/georgereade/fpl-react-app">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img src="/github.svg" height="24" alt="git icon" />{" "}
                            Source code
                          </button>
                        </a>
                      </div>
                      <FPLProjectIcons />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    width="100%"
                    height="225"
                    src="/to-do-list.png"
                    alt="project screenshot"
                  />
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <h6 className="mx-3 mt-1">
                    <strong>To Do List</strong>
                  </h6>
                  <div className="card-body">
                    <p className="card-text text-dark">
                      This is a simple to do list app with a persistent
                      database, demonstrating use of the back end with
                      <strong> Node.js, Express, EJS</strong> and partials. The
                      database is hosted on <strong>MongoDB</strong> and
                      deployed on Render.com.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="https://gr-to-do-list.onrender.com/">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img
                              src="/eye-solid.svg"
                              height="24"
                              alt="view icon"
                            />{" "}
                            View Live Site
                          </button>
                        </a>
                        <a href="https://github.com/georgereade/Portfolio/tree/main/projects/Hosted-To-Do-List">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img src="/github.svg" height="24" alt="git icon" />{" "}
                            Source code
                          </button>
                        </a>
                      </div>
                      <ToDoListIcons />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    width="100%"
                    height="225"
                    src="/portfolio-ss.png"
                    alt="project screenshot"
                  />
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <h6 className="mx-3 mt-1">
                    <strong>Portfolio</strong>
                  </h6>
                  <div className="card-body">
                    <p className="card-text text-dark">
                      I built this portfolio using the React framework
                      <strong> Next.js</strong>, written in{" "}
                      <strong>Typescript</strong> and using{" "}
                      <strong>Bootstrap</strong> for styling. I self-taught
                      Next.js which proved to be an enjoyable and engaging
                      challenge.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img
                              src="/eye-solid.svg"
                              height="24"
                              alt="view icon"
                            />{" "}
                            View Live Site
                          </button>
                        </a>
                        <a href="https://github.com/georgereade/next-portfolio">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <img src="/github.svg" height="24" alt="git icon" />{" "}
                            Source code
                          </button>
                        </a>
                      </div>
                      <PortfolioIcons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}
