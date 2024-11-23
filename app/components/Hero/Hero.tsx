'use client';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Show only one item per slide for a hero section
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <div className="w-[100%] h-screen"> {/* Ensure Carousel parent fills the viewport */}
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="w-[100%] h-screen" // Ensures each slide matches the full screen
        containerClass="w-[100%] h-screen" // Ensures the Carousel container matches full screen
        showDots={false}
      >
        {/* 1st Slide */}
        <div className="w-[100%] h-[85vh] flex items-center justify-center bg-blue-950 clip_path">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 px-24">
            <Image src={BurgerImg1} alt="burger" className="w-[400px] md:w-[300px] lg:w-[400px]" />

            <div className="text-[20px] font-semibold text-yellow-400">
            <h1>Fast Food Burger1</h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">Best <br /> Burgers</h1>
            <p className="mt-[1rem] text-white text-opacity-70 teaxt-[2px]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam minus earum aliquid perferendis.
               Eveniet fugit et veritatis error corrupti accusantium reiciendis quam perspiciatis. Nobis?
               </p>
               <button className='px-8 mt-[2rem] py-3 text-[16px]  bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
                <span>
                    <BiCycling className='w-[1.r7em] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                </span>
                <span className='font-bold'>
                    Order Now
                </span>
            </button> 
           </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
