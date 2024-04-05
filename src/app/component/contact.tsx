"use client";
import React, { useRef, useState, useCallback } from "react";
import { Anim } from "../methods/anim";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i7cz7yf", "template_gcztfvn", form.current, {
        publicKey: "DZFz5U5UFyb6PGcGF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-[#020F12] min-h-svh text-center py-10 lg:py-20 text-white flex flex-col justify-center gap-4 items-center">
      <div className="py-2">
        <Image
          className="h-28"
          src="./assets/svg/logo.svg"
          width={150}
          height={150}
          alt="logo"
        />
      </div>
      <Anim initialX={0} initialY={100} visibleX={0} visibleY={0}>
        <>
          <h2 className="text-3xl md:text-5xl  ">Contact Us</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 lg:min-w-[500px] mt-10 px-10 min-w-full"
            action="">
            <input
              id="cName"
              name="cName"
              required
              maxLength={130}
              type="text"
              placeholder="name or company name"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3"
            />
            <input
              id="email"
              name="email"
              type="email" // Change typeof to type
              required
              maxLength={128}
              placeholder="your E-mail"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3"
            />
            <textarea
              name="message"
              id="message"
              maxLength={5000}
              placeholder="message"
              className="bg-transparent text-white outline-none border-white border-2 rounded-md px-8 py-3 min-h-[16em]"></textarea>
            <div className="text-center">
              <button
                type="submit"
                value="Send"
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
