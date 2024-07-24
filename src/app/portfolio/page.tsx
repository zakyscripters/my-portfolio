import Square from "@/src/components/ornaments/square";
import { thumbnail_projects } from "@/src/components/projects/project";
import clsx from "clsx";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Project - Portfolio",
  description: "This is the projects page and I wish you all the best",
};

const ProjectsPage = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex w-full h-[4rem]">
        <div
          className={clsx("w-5/6 md:w-4/5", "border-r border-valorantBlack/50")}
        />
        <div className={"w-1/6 md:w-1/5"} />
      </div>
      <div className="flex w-full">
        <div
          className={clsx(
            "w-5/6 md:w-4/5",
            "flex flex-col items-end justify-end border-t border-r border-r-valorantBlack/50 border-t-valorantBlack/50"
          )}
        >
          <Square className="bg-valorant w-[10px] h-[10px]" />
          <h1 className="z-10 sm:-mb-0 md:-mb-9 font-bold text-5xl text-valorant sm:text-7xl md:text-8xl lg:text-9xl">
            PROJECTS
          </h1>
          <div className="gap-3 border-valorantBlack/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-l w-[90%] md:w-[80%]">
            {thumbnail_projects.map((item, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    index % 2 == 1
                      ? "md:border-l border-t border-b"
                      : index % 2 == 0
                      ? "md:border-r border-t border-b"
                      : "",
                    "p-5 border-valorantBlack/50"
                  )}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "w-1/6 md:w-1/5",
            "border-t border-t-valorantBlack/50"
          )}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
