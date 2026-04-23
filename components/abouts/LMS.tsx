import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const LMS = () => {
  return (
    <section className="py-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-primary/10 lg:px-10 lg:py-10 md:px-8 md:py-6 p-4 gap-6 md:gap-5 lg:gap-20 items-center">
        <h2 className="mx-auto text-xl lg:text-4xl md:text-3xl font-semibold text-primary block lg:hidden md:block sm:block">
          Learning Management System
        </h2>
        <div className="mx-auto rounded-full w-90 h-90 lg:w-122 lg:h-130 md:w-125 md:h-120  overflow-hidden">
          <Image
            src="/images/lms.jpg"
            alt="LMS"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl lg:text-4xl font-semibold text-primary hidden lg:block md:hidden sm:hidden">
            Learning Management System
          </h2>
          <div className="grid bg-primary/10 p-6 max-w-2xl lg:max-w-2xl md:max-w-7xl mt-8 rounded-lg gap-5">
            <p className="leading-relaxed text-sm lg:text-lg md:text-[16px] font-normal ">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>
            <p className="text-primary font-bold text-lg leading-relaxed">
              Some of our courses include:
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2 font-normal leading-[150%] pl-5">
              {[
                "Business Analysis",
                "Design Thinking",
                "Effective Communication",
                "Entrepreneurship",
                "Career Development",
                "Business Model",
              ].map((course, index) => {
                return (
                  <li key={index} className="list-disc">
                    <p className="text-sm lg:text-sm md:text-[16px] leading-relaxed">
                      {course}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
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
    </section>
  );
};

export default LMS;
