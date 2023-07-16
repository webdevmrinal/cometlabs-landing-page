import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="h-[20vh] w-screen bg-[#152f2e]">
      <div className="h-full w-full flex flex-col gap-4 items-center justify-center lg:flex-row lg:justify-between lg:max-w-5xl lg:mx-auto">
          <Image
            className="filter saturate-0 brightness-[4] "
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
            alt=""
            width={100}
            height={60}
          />
          <p className="text-[#a5a5a5] text-xs">© 2020 Insert Name Here. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
