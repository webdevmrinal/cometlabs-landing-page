import React from "react";
import Image from "next/image";

function Benefits() {
  return (
    <article className="my-14 mx-4 space-y-10 lg:max-w-5xl lg:mx-auto lg:space-y-20  ">
      <section className="flex gap-4 items-start">
        <Image
          src={
            "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg"
          }
          alt=""
          height={50}
          width={50}
        />
        <div>
          <h3 className="font-semibold text-lg">Benefit 1</h3>
          <p className="text-sm">
            Highlight the benefits of signing up for an appointment, online
            class, or video consultation.
          </p>
        </div>
      </section>
      <section className="flex gap-4 items-start">
        <Image
          src={
            "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg"
          }
          alt=""
          height={50}
          width={50}
        />
        <div>
          <h3 className="font-semibold text-lg">Benefit 2</h3>
          <p className="text-sm">
            For example, fitness instructors might describe how their routines
            make people healthier *and* happier.
          </p>
        </div>
      </section>
      <section className="flex gap-4 items-start">
        <Image
          src={
            "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg"
          }
          alt=""
          height={50}
          width={50}
        />
        <div>
          <h3 className="font-semibold text-lg">Benefit 3</h3>
          <p className="text-sm">
            Remind visitors how easy it is to claim your offer and start
            enjoying the benefits.
          </p>
        </div>
      </section>
    </article>
  );
}

export default Benefits;
