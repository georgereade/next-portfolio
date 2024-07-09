"use client";

import { Fade } from "react-awesome-reveal";
import ProjectItems from "./Projectitems/page";

export default function Page() {
  return (
    <section
      className="bg-gray-600 w-screen overflow-x-hidden border-t-8 border-gray-200"
      id="projects-section"
    >
      <div className="">
        <section className="text-center border-b-8 border-gray-200 px-2 pb-8">
          <div className="">
            <Fade triggerOnce={true}>
              <div className="pt-5">
                <Fade delay={100} triggerOnce={true} cascade>
                  <h2 className="text-5xl pb-4">Services</h2>
                  <ul>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        <span className="text-orange-300 font-bold">
                          Designing and building{" "}
                        </span>
                        your website.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Setting you up with{" "}
                        <span className="text-orange-300 font-bold">
                          secure hosting
                        </span>{" "}
                        under your own domain name.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Implementing{" "}
                        <span className="text-orange-300 font-bold">
                          SEO strategies
                        </span>{" "}
                        to help attract traffic and drive business.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Integrating{" "}
                        <span className="text-orange-300 font-bold">
                          payment platforms
                        </span>
                        , booking forms and mailing lists.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 pt-12 md:leading-loose">
                        Whether you already have the perfect idea or want me to
                        lead the way, we can work together to build your vision.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Comfortable with any size of project, using core tools
                        of
                        <span className="font-extrabold text-blue-400">
                          {" "}
                          WordPress
                        </span>{" "}
                        and{" "}
                        <span className="font-extrabold text-emerald-500">
                          React
                        </span>
                        .
                      </p>
                    </li>
                  </ul>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>
        <div className="bg-gray-700 border-b-8 border-gray-200 pb-8">
          <Fade cascade delay={200} triggerOnce={true}>
            <div className="pb-0 mb-0">
              <div className="w-screen flex flex-col items-center">
                <h2 className="text-5xl pt-8" id="portfolio-section">
                  Portfolio
                </h2>
                <ProjectItems />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
