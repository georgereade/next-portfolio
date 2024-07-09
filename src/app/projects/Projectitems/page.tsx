"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";
import { CiCircleChevDown } from "react-icons/ci";

interface CardData {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  link: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    imgSrc: "/utd-web.png",
    imgAlt: "project screenshot",
    title: "Under The Drum",
    description: `An upcoming music festival. Includes a ticket sales platform
      using Stripe&apos;s API for secure payments, Spotify and Google Maps integration, and a mailing list form. Built with
      <strong> Next.js</strong> and <strong>Tailwind CSS</strong>.`,
    link: "https://www.underthedrum.co.uk",
  },
  {
    id: 2,
    imgSrc: "/Element.png",
    imgAlt: "project screenshot",
    title: "Element Consultants",
    description: `Designed with <strong>WordPress, custom CSS and JavaScript</strong> for an
      environmental consultancy. Uses a clean and fresh design with large images. The colour scheme draws from the company&apos;s
      logo, and other design choices such as fonts focused on being clear and professional.`,
    link: "https://www.elementconsultants.co.uk",
  },
  {
    id: 3,
    imgSrc: "/Breckenhill2.png",
    imgAlt: "project screenshot",
    title: "Breckenhill",
    description: `Wedding and events venue building on an existing
                  <strong>WordPress</strong> site, focusing on improving
                  <strong>
                    performance, responsiveness, layout and accessibility
                  </strong>
                  . I used a bright and bold theme, with classic fonts. I worked
                  alongside a designer for the colour scheme and photos.`,
    link: "https://www.breckenhill.co.uk",
  },
  {
    id: 4,
    imgSrc: "/CarLanding.png",
    imgAlt: "project screenshot",
    title: "Landing Page Demo",
    description: `A demonstration of how I can showcase your company&apos;s new
                product or service. In this example, the design is clean and
                precise to mirror the car, which also inspires the colour scheme
                and navbar. This page is built with responsiveness and
                accessibility as core priorities.`,
    link: "https://georgereade.github.io/Car-landing-page/",
  },
  {
    id: 5,
    imgSrc: "/portfolio.png",
    imgAlt: "project screenshot",
    title: "Portfolio",
    description: `I built this portfolio using the React framework
                <strong> Next.js</strong>, written in
                <strong>Typescript</strong> and using
                <strong>Tailwind CSS</strong> for styling.`,
    link: "https://georgereade.github.io/Car-landing-page/",
  },
];

export default function Page() {
  const [visibleTextBoxes, setVisibleTextBoxes] = useState<{
    [key: number]: boolean;
  }>({});
  const [rotationAngles, setRotationAngles] = useState<{
    [key: number]: number;
  }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleTextBox = (id: number) => {
    setVisibleTextBoxes((prev) => ({ ...prev, [id]: !prev[id] }));
    setRotationAngles((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 180,
    }));
  };

  useEffect(() => {
    Object.keys(visibleTextBoxes).forEach((key) => {
      const id = parseInt(key);
      if (contentRefs.current[id]) {
        contentRefs.current[id]!.style.height = visibleTextBoxes[id]
          ? `${contentRefs.current[id]!.scrollHeight}px`
          : "0px";
      }
    });
  }, [visibleTextBoxes]);

  return (
    <div className="flex flex-row snap-x w-screen lg:flex-wrap lg:justify-center overflow-x-auto snap-mandatory snap-always h-full scrollbar">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          className="mx-2 lg:mx-24 bg-gray-800 rounded-xl relative min-w-fit lg:min-w-min sm:w-1/3 sm:max-w-1/3 my-4 scroll-mx-0 snap-center"
        >
          <CardHeader>
            <h4 className="text-xl md:text-3xl font-bold mx-auto border-b border-slate-500">
              {card.title}
            </h4>
          </CardHeader>
          <CardBody className="p-1">
            <img
              src={card.imgSrc}
              alt={card.imgAlt}
              onClick={() => toggleTextBox(card.id)}
              className="pointer hover:drop-shadow-2xl transition ease-in-out rounded-md"
            />
            <div
              ref={(el) => (contentRefs.current[card.id] = el)}
              className={`overflow-hidden transition-height duration-500 ease-in-out`}
            >
              <Fade>
                <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
              </Fade>
            </div>
          </CardBody>
          <CardFooter className="flex flex-row justify-around">
            <a href={card.link}>
              <Button
                variant="flat"
                className="rounded-sm border-2 transition ease-in-out hover:scale-110 hover:text-emerald-500 hover:border-emerald-500"
              >
                Visit
              </Button>
            </a>
            <div
              onClick={() => toggleTextBox(card.id)}
              className="pointer flex flex-row transition ease-in-out delay-150"
              style={{
                transform: `rotate(${rotationAngles[card.id] || 0}deg)`,
              }}
            >
              <CiCircleChevDown className="text-4xl text-slate-300 transition ease-in-out hover:scale-110"></CiCircleChevDown>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
