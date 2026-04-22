import Image from "next/image";
import { LuZap } from "react-icons/lu";

const Services = () => {
  return (
    <section>
      <div>
        {/*corperate Trainings  */}
        <div>
          <div>
            <h2>Corporate Trainings </h2>
            <p>
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company's goals and values.
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-lg font-normal leading-relaxed pl-5">
              {[
                "Leadership Training",
                "Strategic Planning and Implementation",
                "Project Management",
                "Sustainability Training",
                "Customised Training",
              ].map((course, index) => {
                return (
                  <li key={index}>
                    <LuZap />
                    <p className="text-sm leading-relaxed"> {course}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/images/corporate-training.jpg"
              alt="Corporate Training"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Personalised Individual Training */}
        <div>
          <div>
            <h2>Personalised Individual Training</h2>
            <p>
              Begin a journey of lifelong learning and professional development
              with Tobams Group's diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today's professionals.
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-lg font-normal leading-relaxed pl-5">
              {[
                "Leadership Development",
                "Soft Skills Development",
                "Industry Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management and Productivity",
                "Career Development",
              ].map((course, index) => {
                return (
                  <li key={index}>
                    <LuZap />
                    <p className="text-sm leading-relaxed"> {course}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/images/personalised.jpg"
              alt="Individual Training"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Capacity Development */}
        <div>
          <div>
            <h2>Capacity Development</h2>
            <p>
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-lg font-normal leading-relaxed pl-5">
              {[
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
              ].map((course, index) => {
                return (
                  <li key={index}>
                    <LuZap />
                    <p className="text-sm leading-relaxed"> {course}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            {" "}
            <Image
              src="/images/capacity.jpg"
              alt="capacity development"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
