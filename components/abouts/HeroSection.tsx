import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/images/heroImage.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-16 py-28">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute z-40 flex flex-col items-center justify-center gap-10">
        <div className=" flex flex-col items-center justify-center">
          <h4 className="text-sm font-semibold text-white bg-white/10 px-12 py-3 rounded-full mb-4">
            WHAT WE DO
          </h4>
          <h1 className="text-[56px] text-white font-bold">
            Training and Development
          </h1>
          <p className="text-lg font-semibold text-white text-center max-w-6xl mt-4">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today's ever-evolving landscape.
          </p>
        </div>
        <div>
          <Link href="/services">
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
