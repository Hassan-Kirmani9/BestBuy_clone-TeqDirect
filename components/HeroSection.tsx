"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
    
        <div className="mt-[200px]">
          <img
            src="/dummy.png"
            alt=""
            className="w-[10000px] h-[400px]"
          />
        </div>
      

    </section>
  )
}

export default HeroSection
