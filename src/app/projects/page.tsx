"use client";

import { Fade } from "react-awesome-reveal";
import ProjectItems from "./Projectitems/page";

export default function Page() {
  return (
    <section className="bg-gray-700 py-12 w-screen" id="projects-section">
      <div className="">
        <section className="bg-transparent pb-5 text-center">
          <div className="row py-lg-5">
            <Fade triggerOnce={true}>
              <div className="pt-5">
                {/* <h1 className="text-5xl">My Work</h1> */}
                <Fade delay={100} triggerOnce={true} cascade>
                  <ul>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Helping to provide{" "}
                        <span className="text-orange-300">secure hosting</span>{" "}
                        under your own domain name.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Implementing{" "}
                        <span className="text-orange-300 ease-in-out delay-10 hover:scale-110">
                          SEO strategies
                        </span>{" "}
                        to help attract traffic and drive business.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Integrating{" "}
                        <span className="text-orange-300 ease-in-out delay-10 hover:scale-110">
                          payment platforms
                        </span>
                        , booking forms and mailing lists.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-xl md:text-2xl pb-2 md:leading-loose">
                        Whether you already have the perfect design idea or want
                        me to lead the way, we can work together to build your
                        vision.
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
        <div>
          <Fade cascade delay={200} triggerOnce={true}>
            <div className="pb-0 mb-0">
              <div className="w-screen flex flex-col items-center">
                <ProjectItems />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
