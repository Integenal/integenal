import React, { useState, useCallback } from "react";
import { Anim } from "../methods/anim";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#020F12] min-h-svh text-center py-10 lg:py-20 text-white flex flex-col justify-center gap-4 items-center">
      <div className="py-2">
        <Image
          className="h-28"
          src="./assets/svg/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <Anim initialX={0} initialY={100} visibleX={0} visibleY={0}>
        <>
          <h2 className="text-3xl md:text-5xl  ">Contact Us</h2>
          <form
            className="flex flex-col gap-6 lg:min-w-[500px] mt-10 px-10 min-w-full"
            action="">
            <input
              id="cName"
              name="cName"
              required
              maxLength={130}
              type="text"
              placeholder="company name"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3"
            />
            <input
              id="email"
              name="email"
              typeof="email"
              required
              maxLength={128}
              placeholder="your E-mail"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3"
            />
            <textarea
              name="message"
              id="message"
              maxLength={5000}
              placeholder="additional information"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3 min-h-[16em]"></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="font-Popp1 text-xl bg-white text-[#020F12] rounded-2xl px-10 py-2">
                Submit
              </button>
            </div>
          </form>
        </>
      </Anim>
    </div>
  );
};

export default Contact;
