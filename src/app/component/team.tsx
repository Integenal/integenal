import React from "react";
import { Anim } from "../methods/anim";
import Mem from "./mem";

export default function Team() {
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center  gap-10 ">
      <Anim
        width="fit-content"
        initialX={-100}
        initialY={0}
        visibleX={0}
        visibleY={0}>
        <div className="flex gap-10 flex-col text-center lg:text-left">
          <h1 className="font-Popp md:font-Popp1 text-5xl md:text-7xl ">
            Our Team,
          </h1>
          <h2 className="font-Popp2 lg:max-w-[300px] break-words text-4xl">
            The great minds behind out work
          </h2>
        </div>
      </Anim>
      <Anim
        width="fit-content"
        initialX={100}
        initialY={0}
        visibleX={0}
        visibleY={0}>
        <div className="h-fit relative grid lg:bg-[#eee6d2] py-6 px-3 rounded-xl lg:shadow-md shadow-zinc-900 place-items-center grid-cols-1  md:grid-cols-3 gap-10 lg:gap-24">
          <span className="absolute font-Popp3 sm:text-center text-gray-700 text-xl -top-10 left-0 mb-6 hidden lg:block ">
            Members
          </span>

          <Anim
            width="fit-content"
            initialX={100}
            initialY={0}
            visibleX={0}
            visibleY={0}>
            <Mem
              id="1"
              position="ceo"
              name="Jiro"
              link="github.com/jiroachkarian"
            />
          </Anim>
          <Anim
            width="fit-content"
            initialX={100}
            initialY={0}
            visibleX={0}
            visibleY={0}>
            <Mem
              id="2"
              position="ceo"
              name="Harout"
              link="github.com/jiroachkarian"
            />
          </Anim>

          <Anim
            width="fit-content"
            initialX={100}
            initialY={0}
            visibleX={0}
            visibleY={0}>
            <Mem
              id="3"
              position="ceo"
              name="Carly"
              link="github.com/jiroachkarian"
            />
          </Anim>
        </div>
      </Anim>
    </div>
  );
}
/**        <div className="mt-10 grid place-items-center grid-cols-2 md:grid-cols-3 gap-10 lg:gap-24">
          <Mem
            id="1"
            position="ceo"
            name="Jiro"
            link="github.com/jiroachkarian"
          />
          <Mem
            id="2"
            position="ceo"
            name="Harout"
            link="github.com/jiroachkarian"
          />
          <Mem
            id="3"
            position="ceo"
            name="Carly"
            link="github.com/jiroachkarian"
          />
        </div>
 */
