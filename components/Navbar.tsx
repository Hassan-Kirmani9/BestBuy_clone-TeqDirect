import React from "react";
import { Link } from "react-scroll/modules";
import { Icon } from '@iconify/react';
import Image from "next/image";
import {SearchBar} from './SearchBar'
import DropDownMenu from "./DropDownMenu"
import {OtherLinks} from './OtherLinks'


interface NavItem {
  label: string;
  page: string;
  icon: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Stores",
    page: "home",
    icon: "mdi:store"
  },
  {
    label: "Account",
    page: "home",
    icon: "mdi:account"
  },
  {
    label: "Cart",
    page: "home",
    icon: "cil:cart"
  },
];

export default function Navbar() {
  return (
    <>
      <header className=" md:w-full w-[105%] mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-[#0046be]">
        <OtherLinks/>
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="home">
                <div className="md:w-[100px] w-[70px]  container flex items-center space-x-2 ml-[-10px] mt-[10px]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={80}
                    className="md:mt-[-24px] w-[200px] md:w-[100px]"
                  />
                </div>
              </Link>
              <div className="md:mt-[-40px] md:ml-[100px] relative  md:left-0 top-[80px]  ml-[65px] left-[-60px] z-40 md:top-0">
                <SearchBar/> 
              </div>
            </div>
          </div>

          <div>
            <div className="flex-1 justify-self-center pb-3 mt-8 md:block  cmd:pb-0 md:mt-0">
              <div className="md:items-center md:justify-center md:space-y-0 md:flex flex flex-row items-center relative md:top-0 md:left-0 top-[-80px] left-[100px] md:space-x-6 md:gap-x-8 gap-x-3 md:space-y-0 ">
                {NAV_ITEMS.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-white cursor-pointer flex items-center space-x-2"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <Icon icon={item.icon} width="22"  className="md:mb-[-28px] md:ml-[-22px]" height="30" style={{ color: "white" }} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <DropDownMenu/>
        </div>
      </header>
    </>
  );
}
