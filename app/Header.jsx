import React from "react";
import Image from "next/image";

function index() {
  return (
    <header className="relative">
      <div className="lg:max-w-5xl lg:mx-auto ">
        <Image
          className="h-16 w-32 md:h-24 md:w-48 mx-4 "
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
          alt=""
          height={100}
          width={200}
        />
      </div>
      <div className="absolute -top-20 md:top-0 -z-10 bg-[url('https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg')] h-screen w-screen bg-cover" />
    </header>
  );
}

export default index;
