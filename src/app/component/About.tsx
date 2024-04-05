import React from "react";
import { Anim } from "../methods/anim";
import Team from "./team";

const About: React.FC = () => {
  return (
    <>
      <section
        className={`h-fit flex py-20 gap-10  flex-col items-center bg-[#020F12]  `}>
        <div className="h-fit w-full text-center lg:text-left container justify-center item-center text-white px-16 py-5 ">
          <Anim initialX={0} initialY={100} visibleX={0} visibleY={0}>
            <p
              className={`text-3xl lg:text-4xl leading-normal lg:leading-loose tracking-tight   `}>
              <span className="font-Popp mr-3">
                Well make sure websites are better and faster.
              </span>
              <span className="font-Popp3 text-gray-300">
                Our team of talented designers and developers worked together to
                create the ultimate user experience in their project.
              </span>
            </p>
          </Anim>
        </div>
        <div className="h-fit w-full text-center lg:text-left  container justify-center item-center text-white px-16 py-5 ">
          <p
            className={`text-3xl lg:text-4xl leading-normal lg:leading-loose tracking-tight   `}>
            Our team delivers exceptional results at affordable prices. We
            prioritize efficiency and quality in every project, ensuring our
            clients get the best value without breaking the bank.
          </p>
        </div>
      </section>
      <section className="h-full lg:py-28 flex justify-center items-center bg-gradient-to-r from-[#F2EBE3] to-[#F2EBE3] w-full ">
        <div className="container  w-full p-16 ">
          <Team></Team>
        </div>
      </section>
    </>
  );
};

export default About;
