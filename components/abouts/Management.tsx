import Image from "next/image";
import { LuZap } from "react-icons/lu";

const Mangement = () => {
  return (
    <section className="flex flex-col gap-30 p-4 lg:p-16 md:p-8">
      <div className="bg-primary rounded-[20px] grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 gap-6">
        <h2 className="text-white text-lg md:text-4xl lg:text-4xl mx-auto font-semibold lg:hidden sm:block">
          Management Development Program
        </h2>
        <Image
          src="/images/management.jpg"
          alt="Management"
          width={500}
          height={300}
          className="h-full object-cover mx-auto rounded-tl-lg rounded-tr-lg rounded-bl-lg"
        />

        <div className="grid gap-8">
          <h2 className="text-[40px] text-white leading-relaxed hidden lg:block">
            Management Development Program
          </h2>
          <p className="text-white text-sm lg:text-lg md:text-lg leading-relaxed font-normal">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive. <br />
            <br />
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>
          <ul>
            {[
              "Enhanced Leadership Skills",
              "Improved Employee Engagement",
              "Stronger Organisational Culture",
              "Sustainable Growth",
            ].map((benefit, index) => {
              return (
                <li key={index} className="">
                  <p className="bg-foreground text-white text-sm lg:text-lg md:text-lg font-semibold flex gap-2 items-center mb-5 leading-relaxed rounded-lg px-1 py-2">
                    <LuZap fill="#ffffff" />
                    {benefit}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mangement;
