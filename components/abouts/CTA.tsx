import Link from "next/link";

const CTA = () => {
  return (
    <section className="mx-5 flex flex-col gap-8 px-1 lg:px-30  text-center ">
      <div className="hidden lg:block md:block bg-primary text-white rounded-lg py-8 px-6 lg:px-16 lg:py-8">
        <p className="text-xl font-semibold leading-[150%] p-3">
          Want to accelerate professional growth and development at your
          organisation?
          <br />
          See how we can help.
        </p>
        <Link href="/" className="mx-auto">
          <button className=" bg-white text-primary px-6 py-2.5 rounded-sm mt-6 cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>

      <div className="block lg:hidden md:hidden bg-primary p-4 rounded-lg text-white py-8 px-6 lg:px-16 lg:py-8">
        <p className="text-base font-semibold leading-[150%] p-3">
          Don't just dream it—let's build it! Click now and start your project
          with Tobams Group. Your journey to digital excellence begins here.
        </p>
        <div className="mx-auto">
          <Link href="/">
            <button className=" bg-white text-primary px-6 py-2.5 rounded-sm mt-6 cursor-pointer">
              Book a Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
