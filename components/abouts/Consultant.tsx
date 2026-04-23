import Link from "next/link";

const trainingCourses = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain Insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

const Consultant = () => {
  return (
    <section className="py-10 flex flex-col g-8">
      <div className="p-6 lg:py-12 lg:px-16 flex flex-col gap-10 bg-primary/10">
        <div className="flex flex-col gap-6">
          <h4 className="text-2xl text-md:text-3xl lg:text-4xl text-primary font-semibold leading-[130%]">
            Training The Consultant
          </h4>
          <p className="text-base lg:text-lg leading-[150%] font-semibold text-primary">
            Maximize Your Potential as a Certified Trainer:
          </p>
          <p className="font-normal text-sm md:text-lg lg:text-lg leading-[150%]">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-primary text-white p-6 rounded-lg gap-5 lg:gap-10 mx-auto">
            {trainingCourses.map((course, index) => (
              <div key={index} className="flex flex-col gap-5 max-w-xl">
                <h5 className="mt-2 font-bold">{course.title}</h5>
                <p className="font-normal text-sm md:text-lg lg:text-lg leading-[150%]">
                  {course.description}
                </p>
              </div>
            ))}
          </div>

          <Link href="/services">
            <button className="flex items-center bg-primary text-white px-6 py-2.5 rounded-sm mt-6 cursor-pointer">
              Learn More
              <span className="ml-2">
                <img src="/icons/vector.png" alt="icon" className="h-2 w-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
