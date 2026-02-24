"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap } from "lucide-react";
import { useRef } from "react";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="flex flex-col justify-center py-32 px-4 bg-black min-h-screen">
      <div className="w-full max-w-6xl mx-auto" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Right side - Content */}
          <div className="flex-1">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold text-white mb-8"
            >
              King Dwiki is a unique entity defined by an extreme{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-gray-400 border-2 border-gray-500 inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                duality
              </TimelineContent>{" "}
              of light and darkness. His {" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-400 border-2 border-blue-500 inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                Kind side
              </TimelineContent>{" "}
              is a friendly, white creature with a heart of gold who enjoys trading and building muscle at the gym. Conversely, his{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-red-500 border-2 border-red-600 inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                Evil side
              </TimelineContent>{" "}
              embodies pure fury a dangerous, dark figure capable of finishing 20 solar cigarettes a day, demanding extreme caution from anyone who crosses his path.
            </TimelineContent>

            <div className="mt-12 flex gap-2 justify-between">
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 sm:text-xl text-xs"
              >
                <div className="font-medium text-white mb-1 capitalize">
                  This is King Dwiki
                </div>
                <div className="text-gray-400 font-semibold uppercase">
                  Fear the duality
                </div>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="bg-white gap-2 font-medium shadow-lg shadow-white/20 text-black h-12 px-4 rounded-full text-sm inline-flex items-center cursor-pointer"
              >
                <Zap fill="black" size={16} />
                Explore Powers
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
