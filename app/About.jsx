import React from "react";
import Image from "next/image";

function About() {
  return (
    <article className="my-8 md:max-w-5xl md:mx-auto md:flex md:justify-start md:items-center md:gap-6 lg:gap-10">
      <Image
        className="mx-auto h-full w-full px-4 md:h-1/2 md:w-1/2 md:px-4"
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
        alt=""
        height={250}
        width={300}
      />
      <div>
          <h2 className="uppercase text-[#00c2c5] text-xs font-semibold tracking-widest mx-4 my-4">
            About
          </h2>
          <h3 className="font-semibold text-xl mx-4 my-2 lg:text-5xl lg:max-w-md">Some more information about your business</h3>
          <p className="text-sm mx-4 my-2 lg:text-lg lg:max-w-md">
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to care
            about your offer and want to work with you.
          </p>
      </div>
    </article>
  );
}

export default About;
