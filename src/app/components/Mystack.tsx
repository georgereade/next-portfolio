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
import { Tooltip } from "@nextui-org/react";

export default function Mystack() {
  return (
    <div className="container flex flex-col text-center overflow-x-hidden">
      <p className="lead leading-loose">My tech stack</p>
      <div className="flex flex-row pb-6 justify-around overflow-x-auto overflow-y-hidden scale-110 sm:scale-100 px-8">
        {" "}
        <Tooltip
          content="JavaScript"
          placement="bottom"
          delay={0}
          closeDelay={0}
        >
          <div>
            <FaJs className="techIcon" fill="#EFF52B" title="JavaScript" />
          </div>
        </Tooltip>
        <Tooltip content="HTML" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <FaHtml5 className="techIcon" fill="red" title="HTML" />
          </div>
        </Tooltip>
        <Tooltip content="CSS" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <FaCss3 className="techIcon" fill="#2B78F5" title="CSS" />
          </div>
        </Tooltip>
        <Tooltip content="React" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <FaReact className="techIcon" fill="#61dbfb" title="React" />
          </div>
        </Tooltip>
        <Tooltip content="Next.js" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <SiNextdotjs className="techIcon" fill="white" title="Next.js" />
          </div>
        </Tooltip>
        <Tooltip content="Node.js" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <FaNode className="techIcon" fill="#66cc33" title="Node.js" />
          </div>
        </Tooltip>
        <Tooltip content="Tailwind" placement="bottom" delay={0} closeDelay={0}>
          <div>
            <SiTailwindcss
              className="techIcon"
              fill="rgb(56, 189, 248)"
              title="Tailwind CSS"
            />
          </div>
        </Tooltip>
        <Tooltip
          content="WordPress"
          placement="bottom"
          delay={0}
          closeDelay={0}
        >
          <div>
            <FaWordpress className="techIcon" fill="white" title="WordPress" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
