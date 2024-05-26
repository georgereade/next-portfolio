"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Mystack() {
  return (
    <div className="container flex flex-col text-center">
      <p className="lead leading-loose">My tech stack</p>
      <div className="icon-row pb-6">
        <Fade cascade delay={500} damping={0.2} triggerOnce={true}>
          {" "}
          <FaJs className="icon techIcon" fill="#EFF52B" title="JavaScript" />
          <FaHtml5 className="icon techIcon" fill="red" title="HTML" />
          <FaCss3 className="icon techIcon" fill="#2B78F5" title="CSS" />
          <FaReact className="icon techIcon" fill="#61dbfb" title="React" />
          <SiNextdotjs className="icon techIcon" fill="white" title="Next.js" />
          <FaNode className="icon techIcon" fill="#66cc33" title="Node.js" />
          <SiTailwindcss
            className="icon techIcon"
            fill="rgb(56, 189, 248)"
            title="Tailwind CSS"
          />
          <FaWordpress
            className="icon techIcon"
            fill="white"
            title="WordPress"
          />
        </Fade>
      </div>
    </div>
  );
}
