import { cn } from "lib/cn";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <h1
        className={cn(
          "text-2xl mb-6 mt-0 font-normal flex gap-4 flex-row tracking-tight font-mono items-center justify-between"
        )}
      >
        <span>
          <span className="text-black/40 dark:text-white/40 font-sans tracking-normal">
            //
          </span>{" "}
          About me
        </span>
        <Image
          src="/profile_pic.jpeg"
          alt="profile shot"
          width="48"
          height="48"
          className={cn(
            "rounded-full inline-block",
            "dark:border dark:border-white/25"
          )}
        />
      </h1>
      <section className="grid auto-rows-[128px] grid-cols-4 gap-4">
        <figure className="row-span-1 col-span-2 relative rounded-lg overflow-hidden m-0">
          <Image
            fill
            src="/iceland.jpeg"
            sizes="50vw"
            alt="Black sand beach Iceland"
            className="object-cover"
          />
        </figure>
        <figure className="row-span-2 col-span-2 relative rounded-lg overflow-hidden m-0">
          {" "}
          <Image
            fill
            src="/conf_talk.jpeg"
            sizes="50vw"
            alt="Me giving a talk at React Conf 2018"
            className="object-cover"
          />{" "}
        </figure>

        <figure className="row-span-1 col-span-1 relative rounded-lg overflow-hidden m-0">
          <Image
            fill
            src="/sailing_1.jpeg"
            sizes="50vw"
            alt="Four people on a sailboat"
            className="object-cover"
          />
        </figure>
        <figure className="row-span-1 col-span-1 relative rounded-lg overflow-hidden m-0">
          {" "}
          <Image
            fill
            src="/sailing_3.jpeg"
            sizes="50vw"
            alt="Four people on a sailboat with a spinnaker up"
            className="object-cover"
          />{" "}
        </figure>
        <figure className="row-span-2 col-span-2 relative rounded-lg overflow-hidden m-0">
          {" "}
          <Image
            fill
            src="/dad.jpeg"
            sizes="50vw"
            alt="Me being a dad"
            className="object-cover"
          />{" "}
        </figure>
        <figure className="row-span-2 relative rounded-lg overflow-hidden m-0">
          <Image
            fill
            src="/dog.jpeg"
            sizes="50vw"
            alt="Certified good boi"
            className="object-cover"
          />
        </figure>
        <figure className="row-span-2 col-span-1 relative rounded-lg overflow-hidden m-0">
          <Image
            fill
            src="/greece.jpeg"
            sizes="50vw"
            alt="A cobblestone road in Athens, Greece"
            className="object-cover"
          />
        </figure>
      </section>
      <section data-post>
        <p>
          Hiya, I'm Bryce. I'm currently a Staff Software Engineer at Clerk
          working on our framework integrations and other interesting
          engineering and product problems.
        </p>
        <p>
          At work, I have a deep interest in creating tools and platforms for
          other developers. I've spent nearly a decade across a few companies
          working with frameworks and tooling for primarily frontend teams, but
          I'm not afraid to dive into other areas of the stack. I've worked on
          frameworks, tooling, and performance optimization for one of the
          largest US e-commerce sites, and I've also helped other companies
          build scalable frontend applications during times of huge
          organizational growth.
        </p>
        <p>
          I generally love working with small, high-performing teams solving
          interesting technical and product problems in the web space. I'm not
          afraid to work across large parts of the organization and collaborate
          with all levels of leadership to make sure we're solving the right
          problems for the business.
        </p>
        <p>
          Outside of work, I'm learning how to be a dad, taking on projects
          around the house, playing games when I have the time, and racing
          sailboats competitively across the country. If any of this sounds
          interesting to you, let's chat!
        </p>
      </section>
    </>
  );
}
