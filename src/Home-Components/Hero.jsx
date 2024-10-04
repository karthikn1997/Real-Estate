import React, { useEffect } from 'react';
import HeroBg from '../assets/hero1.jpeg';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';
import S1 from "../assets/s-1.jpeg"
import S2 from "../assets/s-2.jpeg"
import S3 from "../assets/s-3.jpeg"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className='w-full min-h-[80vh] p-2 sm:p-4'>
      <section className="relative min-h-[80vh] w-full flex flex-col lg:flex-row items-center justify-center hero-section gap-8 lg:gap-4 bg-gradient-to-b from-white to-[#ebcfa75c] via-[#26282B]/80 lg:bg-gradient-to-l border-2 border-[#EBCFA7] py-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div> {/* Transparent overlay */}

        <div className="w-full absolute inset-0 bg-cover bg-center bg-opacity-30 animate-bg-image"
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.2 }}
        ></div>

        <div className='px-8 pt-10 lg:p-20 flex flex-col justify-center items-center lg:items-start'>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 text-center lg:text-left" data-aos="slide-right" data-aos-delay="300">
            <Typewriter
              words={[
                "Turn Your Dream Plot Into Reality",
                "Make Your Dream a Reality with Us",
                "Build Your Future with Our Plots",
              ]}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left" data-aos="slide-left" data-aos-delay="300">
            We're glad you're here. Discover amazing plots and join our community!
          </p>
          <button className="bg-gradient-to-r from-[#ebcfa75c] via-[#26282B] to-black hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-xl transition duration-300 border-[2px] border-[#ebcfa75c] whitespace-nowrap " data-aos="flip-left" data-aos-delay="300">
            <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
              <span className='text-lg lg:text-2xl text-white'>Explore Now</span><span className='text-2xl animate-bounce'><FaRegArrowAltCircleDown className='text-[#ebcfa7]' /></span>
            </div>
          </button>
        </div>

        <div className="relative z-10 text-center px-5 w-full lg:w-[50%] h-[30vh] sm:h-[60vh] lg:pe-20" data-aos="slide-left" data-aos-delay="300">
          <Slider {...settings}>
            <div className='w-full sm:w-[80%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] bg-[#26282B]'>
              <img src={S1} className='w-full sm:w-[95%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] object-cover' alt="" />
            </div>

            <div className='w-full sm:w-[80%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] bg-[#26282B]'>
              <img src={S2} className='w-full sm:w-[95%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] object-cover' alt="" />
            </div>

            <div className='w-full sm:w-[80%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] bg-[#26282B]'>
              <img src={S3} className='w-full sm:w-[95%] mx-auto h-[30vh] sm:h-[60vh] border-x-2 border-[#EBCFA7] rounded-se-[25%] rounded-es-[25%] object-cover' alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Hero;
