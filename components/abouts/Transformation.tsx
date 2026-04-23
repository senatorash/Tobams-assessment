import Image from "next/image";
import { LuZap } from "react-icons/lu";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const Transformation = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-30 p-4 lg:p-16 md:p-8">
      <div className="bg-secondary/20 rounded-2xl px-4 py-6 lg:p-10 grid gap-10 lg:gap-16">
        <div>
          <h4 className="text-pending text-sm lg:text-xl md:text-lg italic font-semibold mb-2 leading-[130%]">
            Learning With Our CEO:
          </h4>
          <h2 className="text-xl md:text-2xl lg:text-[32px] text-primary italic font-semibold leading-[130%] mb-3">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm md:text-lg lg:text-lg leading-[150%]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
          <Image
            src="/images/transformation.jpg"
            alt="Transformation"
            width={500}
            height={300}
            className="object-cover rounded-lg mx-auto"
          />
          <div className="px-6 py-5 bg-white/30 flex flex-col gap-5 rounded-lg justify-center">
            <ul className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
              {[
                "Strategic Career Guidance",
                "Leadership Development",
                "CV Development",
                "Sustainability Leadership",
                "Communication Skills",
                "Business Model",
              ].map((course, index) => (
                <li key={index}>
                  <p className="flex items-center bg-white text-primary text-sm font-semibold gap-2 leading-relaxed rounded-lg p-4">
                    <LuZap className="text-primary" />
                    {course}
                  </p>
                </li>
              ))}
            </ul>

            <Link href="/">
              <button className="flex items-center bg-primary text-white px-6 py-2.5 rounded-sm mt-6 cursor-pointer">
                Learn More
                <span className="ml-2">
                  <LuArrowUpRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
