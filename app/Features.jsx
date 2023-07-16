import Image from "next/image";
import React from "react";

function Features() {
  return (
    <article className="border-b lg:border-none lg:max-w-5xl lg:mx-auto">
      <div className="my-8 mx-2 md:flex md:gap-2 lg:gap-4">
        <section className="pb-4 md:pb-0">
          <Image
            className="mx-auto md:w-full md:h-2/4  lg:w-full lg:h-3/5"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg"
            alt=""
            height={250}
            width={350}
          />
          <h3 className="uppercase font-semibold text-lg mt-8 mb-2 mx-2">
            Feature 1
          </h3>
          <p className="pr-4 mx-2">
            Talk about some of the details of your offer with a focus on the
            value people get back.
          </p>
        </section>
        <section className="pb-4 md:pb-0">
          <Image
            className="mx-auto md:w-full md:h-2/4 lg:w-full  lg:h-3/5"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg"
            alt=""
            height={250}
            width={350}
          />
          <h3 className="uppercase font-semibold text-lg mt-8 mb-2 mx-2">
            Feature 2
          </h3>
          <p className="pr-4 mx-2">
            Is there a pain point that your service resolves? Tell visitors
            about it here.
          </p>
        </section>
        <section className="pb-4 md:pb-0">
          <Image
            className="mx-auto md:w-full md:h-2/4 lg:w-full lg:h-3/5"
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg"
            alt=""
            height={250}
            width={350}
          />
          <h3 className="uppercase font-semibold text-lg mt-8 mb-2 mx-2">
            Feature 3
          </h3>
          <p className="pr-4 mx-2">
            Alternatively, you could use this section to address some frequently
            asked questions.
          </p>
        </section>
      </div>
    </article>
  );
}

export default Features;
