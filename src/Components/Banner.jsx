import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  const slides = [
    {
      title: "Atomic Habits",
      desc: "Build good habits & break bad ones easily.",
      btn: "Explore Books",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Psychology of Money",
      desc: "Timeless lessons on wealth & happiness.",
      btn: "View Collection",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Rich Dad Poor Dad",
      desc: "What the rich teach their kids about money.",
      btn: "Order Now",
      img: "https://i.ibb.co.com/gLrzcKQg/study-group-learning-library.jpg",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-xl overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 flex items-center">
                <div className="px-6 md:px-20 max-w-xl space-y-4 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg text-gray-200">
                    {slide.desc}
                  </p>
                  <button className="btn bg-purple-600 text-white">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
