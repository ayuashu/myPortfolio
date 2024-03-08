"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButtons from "../TabButtons";
import NavBar from "../NavBar";

const tabContent = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            C
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            C++
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Go
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            HTML
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            CSS
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Python
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            ReactJS
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            NextJS
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Node.js
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Express
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            MongoDB
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            JavaScript
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Tailwind CSS
          </button>
          <button className="bg-red-300 text-black text-sm lg:text-lg font-bold px-2 py-1 rounded-lg m-1 shadow-md shadow-red-300">
            Hyperledger Fabric
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#EFB68F] text-black text-sm lg:text-lg font-bold rounded-xl flex flex-col w-full md:w-1/2 px-4 py-4 shadow-md shadow-red-300">
          <div>Indian Institute of Technology, Patna</div>
          <div>M.Tech. in Computer Science & Engineering</div>
          <div>2022 - 2024</div>
          <div>CGPA: 8.98</div>
        </div>
        <div className="bg-[#EFB68F] text-black text-sm lg:text-lg font-bold rounded-xl flex flex-col w-full md:w-1/2 px-4 py-4 shadow-md shadow-red-300">
          <div>Institute of Engineering, Jiwaji University, Gwalior</div>
          <div>BE in Computer Science & Engineering</div>
          <div>2018 - 2022</div>
          <div>%: 82.1</div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <div>
        <ul className="list-disc pl-2 text-red-300 text-sm">
          {/* <li>
            Building fully responsive web applications by freeCodeCamp.org
          </li>
          <li>Blockchain Developer by IBM</li>
          <li>Blockchain Developer by Coursera</li>
          <li>Blockchain Developer by Udemy</li> */}
        </ul>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] gap-10">
      <div>
        <NavBar />
      </div>
      <div className="text-white md:mt-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
          <div className="md:col-span-2 px-20 py-20">
            <img
              src="/Images/about.avif"
              alt="About"
              className="rounded-lg w-full"
              style={{ height: "400px" }}
            />
          </div>

          <div className="md:col-span-3 mt-4 md:mt-0 text-left flex flex-col h-full px-2">
            <h2 className="text-4xl md:text-8xl md:mt-8 font-bold text-[#E1DCD2] mb-4">About me</h2>
            <p className="text-base lg:text-lg">
              I am a final year student at Indian Institute of Technology,
              Patna. Currently, I am pursuing my Masters of Technology in
              Computer Science & Engineering. I am passionate about web
              development and also am a blockchain developer. I am always open
              to learning new technologies and frameworks. I am a quick learner
              and a good team player. I am always open to new opportunities and
              challenges. I am looking for a full-time opportunity as a Software
              Developer starting from July 2024. Feel free to reach out to me
              for any opportunities or collaborations.
            </p>

            <div className="flex flex-row mt-8">
              <TabButtons
                selectTab={() => handleTabChange("skills")}
                active={tab == "skills"}
              >
                Skills
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange("education")}
                active={tab == "education"}
              >
                Education
              </TabButtons>
              <TabButtons
                selectTab={() => handleTabChange("certification")}
                active={tab == "certification"}
              >
                {/* Certifications */}
              </TabButtons>
            </div>
            <div className="mt-8 text-red">
              {tabContent.find((t) => t.id == tab).content}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
