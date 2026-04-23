const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/aisha.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/john.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/chinonso.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Reliable and straightforward.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 flex flex-col gap-2.5 border-muted border-b">
      <div className="px-5 lg:px-16 flex flex-col gap-5">
        <h2 className="text-[40px] font-bold text-center ">Testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`border-l-2 shadow-sm bg-white/80 border-secondary rounded-2xl p-6 flex flex-col gap-4 shrink-0 ${index > 0 ? "hidden md:flex" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img
                      src={testimonial.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {testimonial.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end gap-3 mt-8 items-end">
          <button className="bg-secondary/10 p-2 rounded-md">
            <img
              src="/icons/Vector (1).png"
              alt="Previous"
              className="h-4 w-4"
            />
          </button>
          <button className="bg-secondary/10 p-2 rounded-md">
            <img src="/icons/Vector (2).png" alt="Next" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
