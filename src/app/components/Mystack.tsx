"use client";

import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaJs, FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Mystack() {
  return (
    <div>
      <div className="icon-row mb-4 mt-5">
        <Fade cascade delay={500} damping={0.2} triggerOnce={true}>
          {" "}
          <FaJs className="icon techIcon" fill="#EFF52B" title="JavaScript" />
          <FaHtml5 className="icon techIcon" fill="red" title="HTML" />
          <FaCss3 className="icon techIcon" fill="#2B78F5" title="CSS" />
          <FaReact className="icon techIcon" fill="#61dbfb" title="React" />
          <SiNextdotjs className="icon techIcon" fill="white" title="Next.js" />
          <FaNode className="icon techIcon" fill="#66cc33" title="Node.js" />
        </Fade>
      </div>
    </div>
  );
}
