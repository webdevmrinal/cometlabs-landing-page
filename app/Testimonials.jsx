"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function Testimonials() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [buttonClass, setButtonClass] = useState(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 md:p-5 md:text-4xl rounded-full text-2xl bg-[#e8fafb]"
  );

  const handlePlayer = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
      setButtonClass("hidden");
    } else {
      videoRef.current.pause();
      setPlaying(false);
      setButtonClass(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 md:p-5 md:text-4xl rounded-full text-2xl bg-[#e8fafb]"
      );
    }
  };

  return (
    <article className="relative border border-b lg:border-none">
      <div
        className="absolute top-0 -z-10 bg-[#e8fbfb] h-[45%] w-screen"
        aria-hidden
      />

      <div className="lg:max-w-5xl lg:mx-auto">
        <div className="lg:pb-8">
          <h2 className="text-3xl text-[#152f2e] text-center font-semibold my-10 md-14 md:mx-44 lg:text-5xl lg:mx-64 lg:my-5 lg:pt-10">
            Show visitors what they&apos;re signing up for
          </h2>
          <p className="text-center mx-10 md:mx-36 lg:mx-60">
            Include a video or photo from one of your sessions to help people
            understand your service (or just to hype ‘em up).
          </p>
        </div>

        <div className="relative" onClick={handlePlayer}>
          <video
            ref={videoRef}
            className="mx-auto my-10 cursor-pointer px-2 lg:max-w-5xl lg:mt-2 lg:mb-12"
            width={"1280"}
            height={"768"}
            muted
          >
            <source src="/testimonial_video.mp4" />
          </video>
          <button className={buttonClass}>
            {!playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 flex items-center justify-center md:w-12 md:h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 flex items-center justify-center md:w-12 md:h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="px-4 space-y-2 lg:py-8">
          <h4 className="uppercase text-center text-[#00c2c5] text-xs font-semibold tracking-widest mx-16 my-4">
            Don&apos;t just take our word for it
          </h4>
          <div className="md:pt-8 md:flex md:gap-8 lg:gap-60">
            <section>
              <div className="flex gap-1">
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
              </div>
              <p className="italic text-[#152f2e] leading-5 md:text-xl">
                Share a real testimonial that hits some of your benefits (but
                isn&apos;t too sales-y).
              </p>
              <div className="flex py-4">
                <Image
                  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="text-xs mx-2 space-y-2">
                  <p className="font-semibold">Real Name</p>
                  <p>Location</p>
                </div>
              </div>
            </section>
            <section>
              <div className="flex gap-1">
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
                <AiFillStar color="#00c2c5" size={13} />
              </div>
              <p className="italic text-[#152f2e] leading-5 md:text-xl">
                Include someone talking about how easy it was to sign up and
                participate.
              </p>
              <div className="flex py-4 mb-4">
                <Image
                  className="mx-0"
                  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
                  alt=""
                  height={70}
                  width={70}
                />
                <div className="text-xs mx-2 space-y-2">
                  <p className="font-semibold">Real Name</p>
                  <p>Location</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
