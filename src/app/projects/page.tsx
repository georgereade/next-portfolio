import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";

export default function Page() {
  return (
    <div>
      <Navbar />
      <section className="bg-transparent py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>My Projects</h1>
            <p className="fs-5 mb-4">
              Please see some examples of my work below. I have aimed to
              demonstrate a variety of skills and processes.
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary bg-transparent">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img width="100%" height="225" src="/fpl-react.png" />
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  FPL React Info Tool
                </text>
                <div className="card-body">
                  <p className="card-text text-dark">
                    Automatically updating gameweek stats using the FPL API,
                    built using React.js, Node and CSS. Deployed on Render.com
                    using a proxy server to bypass CORS.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://fpl-react-app.onrender.com/">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/eye-solid.svg" height="30" /> View
                        </button>
                      </a>
                      <a href="https://github.com/georgereade/fpl-react-app">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/github.svg" height="30" /> Git Repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img width="100%" height="225" src="/to-do-list.png" />
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  To Do List
                </text>
                <div className="card-body">
                  <p className="card-text text-dark">
                    This is a simple to do list app, demonstrating use of
                    Node.js, Express, EJS and partials. The database is hosted
                    on MongoDB and deployed on Render.com.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://gr-to-do-list.onrender.com/">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/eye-solid.svg" height="30" /> View
                        </button>
                      </a>
                      <a href="https://github.com/georgereade/Portfolio/tree/main/projects/Hosted-To-Do-List">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/github.svg" height="30" /> Git Repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img width="100%" height="225" src="/fpl-suggest.png" />
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Fantasy Premier League Fixture Tracker
                </text>
                <div className="card-body">
                  <p className="card-text text-dark">
                    A site made to track fixtures of each Premier League team.
                    Demonstrates use of HTML, CSS frameworks (Bootstrap) and JS
                    to determine rankings.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="./projects/FPL Suggest/index.html">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/eye-solid.svg" height="30" /> View
                        </button>
                      </a>
                      <a href="https://github.com/georgereade/Portfolio/tree/main/projects/FPL%20Suggest">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img src="/github.svg" height="30" /> Git Repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
