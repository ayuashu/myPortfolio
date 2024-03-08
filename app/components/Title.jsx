"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Title = () => {

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A198A6] to-[#544751]">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-4xl sm:text-7xl"
              sequence={[
                "Ayush",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Blockchain Enthusiast",
                1000,
                "Competitive Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "#FF5733" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            A final year M.Tech. student at IIT Patna. I love to code and learn
            new things. I am a blockchain enthusiast and a full stack developer.
            I am also a competitive programmer and love to solve problems.
          </p>
          <div>
          <Link href="/components/Contact"> 
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 font-semibold bg-gradient-to-r hover:bg-slate-200 from-primary-600 to-secondary text-[#FAF6F2]">
                Hire Me
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r hover:bg-slate-200 from-secondary-900 to-primary-500 text-[#FAF6F2] border border-white mt-3">
              <a
                href='https://drive.google.com/file/d/1pbnv0ilBMi9r5bmbbTZPbxTynvoipFnp/view?usp=drive_link'
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                download
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/Images/logo_boy.png"
              alt="Ayush logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Title;
