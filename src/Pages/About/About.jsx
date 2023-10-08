import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
AOS.init();

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 8000,
      once: false,
    });
  }, []);

  return (
    <div className="mb-8 mt-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="lg:w-1/2 relative"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <img
              src="https://i.ibb.co/4YhFzDn/14.jpg"
              className="w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/bgQQfm4/15.jpg"
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-blue-500 shadow-2xl"
            />
          </div>
          <div
            className="lg:w-1/2 space-y-5 p-4"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <h3 className="text-3xl text-purple-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              Ruby Rose Collection Sapphire Dreams Jewelry Emerald Elegance
              Designs Topaz Treasures
            </h1>
            <p className="py-6">
              These are just some ideas, and there are countless more beautiful
              jewelry names to choose from or create based on your preferences
              and design inspirations.
            </p>
            <p className="py-6">
              Remember to choose a name that resonates with your brand's style
              and values. It should also be memorable and easy to pronounce.
              Feel free to mix and match these ideas or create something
              entirely unique that reflects your jewelry line's essence. Your
              jewelry's name can be a powerful part of your brand identity.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
