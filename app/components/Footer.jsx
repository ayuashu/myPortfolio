import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-top-[#33353F] z-10 border-l-transparent border-r-transparent border-b-transparent text-white sm:fixed bottom-0">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Images/logo.gif"
            width={30}
            height={30}
            className="h-16 md:h-20 w-16 md:w-20 z-32 -mt-4"
          />
          <div className="text-[#808088] text-sm md:text-lg ml-4">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
