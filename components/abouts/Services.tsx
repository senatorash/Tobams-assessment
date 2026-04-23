import Image from "next/image";
import { LuZap } from "react-icons/lu";

const Services = () => {
  return (
    <section className="flex flex-col p-4 md:p-8 lg:p-16 gap-8 lg:gap-30 md:gap-20.25 rounded-2xl">
      {/*corperate Trainings  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 md:gap items-center">
        <div className="flex flex-col gap-5.25 order-2 lg:order-1">
          <h2 className="text-xl lg:text-4xl font-semibold hidden lg:block md:hidden sm:hidden">
            Corporate Trainings
          </h2>
          <p className="text-sm lg:text-lg md:text-lg leading-relaxed font-normal">
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your company's
            goals and values.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 text-lg gap-2 lg:gap-0 font-normal leading-relaxed pl-0 lg:pl-5">
            {[
              "Leadership Training",
              "Strategic Planning and Implementation",
              "Project Management",
              "Sustainability Training",
              "Customised Training",
            ].map((course, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 leading-relaxed"
                >
                  <LuZap fill="color-primary" className="text-primary" />
                  <p className="text-sm leading-relaxed">{course}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex flex-col gap-5.25 mx-auto">
          <h2 className="text-xl md:text-4xl lg:text-4xl mx-auto font-semibold lg:hidden sm:block">
            Corporate Trainings
          </h2>
          <Image
            src="/images/corporate.jpg"
            alt="Corporate Training"
            width={500}
            height={300}
            className="w-150.5 h-86.5 md:w-full md:h-full object-cover rounded-tl-[56px] rounded-tr-3xl rounded-bl-xl rounded-br-[23px]"
          />
        </div>
      </div>

      {/* Personalised Individual Training */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-20.25  flex-col-reverse items-center">
        <div className="flex flex-col gap-5.25 order-2">
          <h2 className="text-xl lg:text-4xl font-semibold hidden lg:block md:hidden sm:hidden">
            Personalised Individual Training
          </h2>
          <div className="max-w-170 md:max-w-full">
            <p className="text-sm lg:text-lg md:text-lg leading-relaxed font-normal">
              Begin a journey of lifelong learning and professional development
              with Tobams Group's diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today's professionals.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 text-lg gap-2 lg:gap-0 font-normal leading-relaxed pl-0 lg:pl-5">
            {[
              "Leadership Development",
              "Soft Skills Development",
              "Industry Specific Knowledge",
              "Technical Skills Enhancement",
              "Time Management and Productivity",
              "Career Development",
            ].map((course, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 leading-relaxed"
                >
                  <LuZap fill="color-primary" className="text-primary" />
                  <p className="text-sm leading-relaxed">{course}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image */}
        <div className="order-1 flex flex-col gap-5.25 mx-auto">
          <h2 className="text-xl md:text-4xl lg:text-4xl mx-auto font-semibold lg:hidden sm:block">
            Personalised Individual Training
          </h2>
          <Image
            src="/images/personalised.jpg"
            alt="Individual Training"
            width={500}
            height={300}
            className="w-150.5 h-86.5 md:w-full md:h-full object-cover rounded-tl-[56px] rounded-tr-3xl rounded-bl-xl rounded-br-[23px]"
          />
        </div>
      </div>

      {/* Capacity Development */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-center">
        <div className="flex flex-col gap-5.25 order-2 lg:order-1">
          <h2 className="text-xl lg:text-4xl font-semibold hidden lg:block md:hidden sm:hidden">
            Capacity Development
          </h2>
          <p className="text-sm lg:text-lg md:text-lg leading-relaxed font-normal">
            At Tobams Group, we empower individuals and organizations through
            tailored training programs, expert-led workshops, and personalized
            mentorship. We are committed to your success and growth. We are
            dedicated to providing a comprehensive suite of benefits designed to
            foster your development and success:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-2 lg:gap-0 font-normal leading-relaxed pl-0 lg:pl-5">
            {[
              "Tailored Training Programs",
              "Expert-Led Workshops",
              "Personalized Mentorship",
              "Technical Skills Enhancement",
              "Collaborative Learning Environment",
              "Ongoing Support and Resources",
            ].map((course, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 leading-relaxed"
                >
                  <LuZap fill="color-primary" className="text-primary" />
                  <p className="text-sm leading-relaxed ">{course}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-5.25 mx-auto">
          <h2 className="text-xl md:text-4xl lg:text-4xl mx-auto font-semibold lg:hidden sm:block">
            Capacity Development
          </h2>
          <Image
            src="/images/capacity.jpg"
            alt="capacity development"
            width={500}
            height={300}
            className="w-150.5 h-86.5 md:w-full md:h-full object-cover rounded-tl-[56px] rounded-tr-3xl rounded-bl-xl rounded-br-[23px]"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
