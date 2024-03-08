import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const findNextWordIndex = (text, limit) => {
    const words = text.split(" ");
    let charCount = 0;
    let nextWordIndex = -1;
    for (let i = 0; i < words.length; i++) {
      charCount += words[i].length;
      if (charCount > limit) {
        nextWordIndex = i;
        break;
      }
    }
    return nextWordIndex;
  };

  const nextWordIndex = findNextWordIndex(description, 100);

  return (
    <div className="border-2 px-2 py-2 rounded-xl shadow-lg shadow-orange-300 ">
      <div
        className="h-48 md:h-64 rounded-xl relative group -mt-4 md:-mt-8 -mr-4 md:-mr-8 ml-4 md:ml-8 shadow-md shadow-warmGray-400"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-xl bg-[#181818] py-3 px-4 md:h-38 mr-4 md:mr-6">
        <h5 className="text-xl md:text-2xl font-semibold mb-2">{title}</h5>
        <p className="text-sm md:text-base text-[#ADB7BE]">
          {showFullDescription
            ? description
            : description.slice(0, nextWordIndex) +
              " "}
          {nextWordIndex !== -1 && (
            <button
              onClick={toggleDescription}
              className="text-[#EFB68F] hover:text-yellow-500 text-sm"
            >
              {showFullDescription ? "   Read less" : "   Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
