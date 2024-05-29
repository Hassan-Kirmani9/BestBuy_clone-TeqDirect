"use client"
import React from "react"
import Button from "./reusableComponents/Button"
import { useMediaQuery } from "@react-hook/media-query";
import ImageSlider from "./ImageSlider"


const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 640px)")

  if(isMobile){
    return (
      <section id="home" className="min-sm:hidden md:block">
        <div className="mt-[200px]">
          <ImageSlider />
        </div>
      </section>
    );
  }
  return (
    <section id="home" className="min-sm:hidden md:block">
      <div className=" mt-[200px] flex flex-wrap">

        <div className="flex flex-col w-[40%]">
          <img src="/h1.png" alt="" className="h-[85%] " />
          <Button className="relative bottom-[60px] left-[145px]" >Shop Now</Button>

        </div>

 
        <div className="flex flex-col w-[60%]">
    
          <div className="w-full mb-[-80px] ml-[10px]">
            <img src="/h2.png" alt="" className="w-full h-[70%] mt-[-4px]" />
            <Button className="relative bottom-[60px] left-[25px]" >Shop Now</Button>

          </div>
          <div className="flex ml-[10px] w-[100%] h-[50%] mt-[-16px]">
        <div className="flex w-[50%] relative h-[80%]">
          <img src="/h3.png" alt="" className="w-full h-full" />
          <Button className="absolute bottom-[-10px] mb-4 left-[95px]">Shop Now</Button>
        </div>
        <div className="flex w-[50%] relative ml-[10px]  h-[80%]">
          <img src="/h4.png" alt="" className="w-full h-full" />
          <Button className="absolute bottom-[-10px] mb-4 left-[95px]">Shop Now</Button>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


      
   