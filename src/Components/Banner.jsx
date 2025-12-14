import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const slides = ["slide1", "slide2", "slide3"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      document.getElementById(slides[index]).scrollIntoView({
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div
        className="carousel w-full 
        h-[55vh] md:h-[65vh] lg:h-[75vh] 
        rounded-xl overflow-hidden"
      >
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            className="w-full object-cover"
          />

          <div
            className="absolute inset-0 
            bg-black/60 dark:bg-black/70 
            flex items-center"
          >
            <div className="px-6 md:px-20 max-w-xl space-y-4 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">Atomic Habits</h1>
              <p className="text-base md:text-lg text-gray-200">
                Build good habits & break bad ones easily.
              </p>
              <button className="btn btn-primary">Explore Books</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            className="w-full object-cover"
          />

          <div
            className="absolute inset-0 
            bg-black/60 dark:bg-black/70 
            flex items-center"
          >
            <div className="px-6 md:px-20 max-w-xl space-y-4 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">
                Psychology of Money
              </h1>
              <p className="text-base md:text-lg text-gray-200">
                Timeless lessons on wealth & happiness.
              </p>
              <button className="btn btn-primary">View Collection</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/gLrzcKQg/study-group-learning-library.jpg"
            className="w-full object-cover"
          />

          <div
            className="absolute inset-0 
            bg-black/60 dark:bg-black/70 
            flex items-center"
          >
            <div className="px-6 md:px-20 max-w-xl space-y-4 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">
                Rich Dad Poor Dad
              </h1>
              <p className="text-base md:text-lg text-gray-200">
                What the rich teach their kids about money.
              </p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
