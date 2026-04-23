import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/images/heroImage.jpg')] bg-cover bg-center h-100 lg:min-h-screen flex flex-col items-center justify-center py-10 px-6 lg:px-16 lg:py-28 gap-12">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute z-40 flex flex-col items-center justify-center gap-10">
        <div className=" flex flex-col items-center justify-center">
          <h4 className="text-xs lg:text-sm  font-semibold text-white bg-white/10 px-12 py-3 rounded-full mb-4">
            WHAT WE DO
          </h4>
          <h1 className="text-2xl md:text-4xl lg:text-[56px] text-white font-bold">
            Training and Development
          </h1>
          <p className="text-sm md:text-lg font-semibold text-white text-center max-w-xs md:max-w-6xl mt-4">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today's ever-evolving landscape.
          </p>
        </div>
        <div>
          <Link href="/">
            <button className="bg-primary text-white px-6 py-3 rounded-sm cursor-pointer">
              Book a Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
