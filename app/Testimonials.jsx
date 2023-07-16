import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function Testimonials() {
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

        <video
          className="mx-auto my-10 cursor-pointer px-2 lg:max-w-5xl lg:mt-2 lg:mb-12"
          width={"1280"}
          height={"768"}
          muted
        >
          <source src="/testimonial_video.mp4" />
        </video>
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
