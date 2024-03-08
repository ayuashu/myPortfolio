"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "../NavBar";

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] gap-10">
  <div>
    <NavBar />
  </div>
  <div className="text-white">
    <div className="grid grid-cols-1 md:grid-cols-6 md:my-20 py-4 gap-4 relative px-20 md:mx-48">
      <div className="md:col-span-1"></div>  
      <div className="md:col-span-2 md:mx-4">
        {/* Left content */}
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9F5B49] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="z-10 mt-20">
          <h5 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md md:text-xl">
            I'm always open to discussing product design work or partnership
            opportunities. Whether you have a question or just want to say hi,
            my inbox is open. I will try my best to get back to you!
          </p>
          <div className="socials flex flex-row-reverse gap-4 mr-7 md:mr-32">
            <Link href='https://github.com/ayuashu'>
              <img
                src="/Images/github.gif" 
                alt="Github"
                className="h-10 md:h-14 w-10 md:w-14 cursor-pointer bg-orange-200 rounded-md hover:bg-orange-300"
              />
            </Link>
          
            <Link href='https://www.linkedin.com/in/ayush-kumar-jain-41481b241'>
              <img
                src="/Images/linkedin.gif"
                alt="Linkedin"
                className="h-10 md:h-14 w-10 md:w-14 cursor-pointer bg-orange-200 rounded-md hover:bg-orange-300"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 border-2 border-[#EFB68F] rounded-2xl md:mx-4 md:my-4 px-4 md:px-8 py-4 md:py-8 shadow-lg shadow-slate-300">
        {/* Form */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm md:text-xl">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="abc@email.com"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm md:text-lg rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm md:text-xl"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just say hi!!!"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm md:text-lg rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm md:text-xl"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about ..."
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm md:text-lg rounded-lg block w-full p-2.5 "
            />
          </div>
          <button className="bg-[#EFB68F] hover:bg-orange-800 text-[#323236] font-semibold text-sm md:text-2xl py-3 rounded-lg w-full">
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Hurray you have reached us !!!
            </p>
          )}
        </form>
      </div>
      <div className="md:col-span-1"></div>
    </div>
  </div>
</main>

  );
};

export default Email;
