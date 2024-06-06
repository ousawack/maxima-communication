"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [70, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-6xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "red",
              borderColor: scrollYProgress.get() > 0 ? "white" : "red",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="red"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

const Process = () => {
  return (
    <div className="container max-w-6xl my-36">
      {/* ---------------------------------- Part 1 -------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-3xl font-bold">Our Process</div>
        <div className="max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
          repellendus beatae fugit reprehenderit quae tenetur praesentium harum
          aut maxime. Quam voluptatibus vero temporibus soluta quae repellendus
          aliquid doloremque eaque.
        </div>
      </div>
      <TracingBeam>
        {/* ---------------------------------- Part 2 -------------------------------------------------------- */}
        <div className="flex items-center justify-between my-20 h-[600px]">
          {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}
          <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
            <img
              src="image-url"
              alt="Discover"
              className="max-h-full max-w-full"
            />
          </div>

          {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}
          <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
            <div className="text-4xl font-bold text-white">Discover</div>
            <div className="text-lg text-gray-100 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus explicabo quia vero neque temporibus? Corporis
              dolorum natus laudantium error enim inventore, deserunt, sed
              tenetur nobis accusamus delectus dicta eveniet voluptate.
            </div>
          </div>
        </div>

        {/* ---------------------------------- Part 3 -------------------------------------------------------- */}
        <div className="flex items-center justify-between my-20 h-[600px]">
          {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}
          <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
            <div className="text-4xl font-bold text-white">BUILD</div>
            <div className="text-lg text-gray-100 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus explicabo quia vero neque temporibus? Corporis
              dolorum natus laudantium error enim inventore, deserunt, sed
              tenetur nobis accusamus delectus dicta eveniet voluptate.
            </div>
          </div>
          {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}
          <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
            <img
              src="image-url"
              alt="Build"
              className="max-h-full max-w-full"
            />
          </div>
        </div>

        {/* ---------------------------------- Part 4 -------------------------------------------------------- */}
        <div className="flex items-center justify-between my-20 h-[600px]">
          {/* -------------------------------- THE IMAGE ------------------------------------------------------ */}
          <div className="w-1/2 flex items-center justify-center bg-blue-800 h-full">
            <img
              src="image-url"
              alt="Deliver"
              className="max-h-full max-w-full"
            />
          </div>

          {/* ---------------------------------- THE TEXT -------------------------------------------------------- */}
          <div className="w-1/2 bg-blue-400 h-full flex flex-col items-center justify-center gap-8 px-16">
            <div className="text-4xl font-bold text-white">DELIVER</div>
            <div className="text-lg text-gray-100 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus explicabo quia vero neque temporibus? Corporis
              dolorum natus laudantium error enim inventore, deserunt, sed
              tenetur nobis accusamus delectus dicta eveniet voluptate.
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Process;
