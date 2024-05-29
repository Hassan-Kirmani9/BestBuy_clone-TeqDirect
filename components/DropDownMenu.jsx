import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Icon } from '@iconify/react';
import { useMediaQuery } from '@react-hook/media-query';

const MENU_ITEMS = [
  { label: "Shop", content: "Shop Content" },
  { label: "Ultimate PC Gaming Sale", content: "Ultimate PC Gaming Sale Content" },
  { label: "Deals", content: "Deals Content" },
  { label: "Outlet", content: "Outlet Content" },
  { label: "Services", content: "Services Content" }
];

export default function DropDownMenu() {
  const [dropdownBar, setDropdownBar] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const isMobile = useMediaQuery('(max-width: 640px)');

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDropdownClick = (index) => {
    if (!isMobile) {
      toggleDropdown(index);
    }
  };

  return (
    <div className="justify-center w-full py-1 absolute right-0 font-semibold md:absolute md:right-0 md:top-full md:items-start md:mt-0 mt-[-70px] md:flex bg-[#003DA6]">
      <div className="flex items-center justify-between py-3 md:py-5 md:block">

        <div className="md:hidden">
          <button
            className="p-2 ml-[20px] text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border w-[50px] h-full" 
            onClick={() => {
              setDropdownBar(!dropdownBar);
            }}
          >
            {dropdownBar ? (
              <IoMdClose size={30} className="text-white" />
            ) : (
              <IoMdMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${dropdownBar ? "block" : "hidden"}`}>
        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:gap-x-8 md:space-y-0">
          {MENU_ITEMS.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center">
                <span
                  className="block lg:inline-block text-white cursor-pointer md:relative right-[190px]"
                  onClick={() => handleDropdownClick(idx)}
                >
                  {item.label}
                </span>
                <div
                  className={`ml-2 text-white cursor-pointer hover:text-gray-300 md:relative md:right-[190px]  md:top-[4px]  ${isMobile ? "hidden" : ""}`}
                  onClick={() => handleDropdownClick(idx)}
                >
                  <Icon icon="mdi:chevron-down" width="20" height="20" className=" hidden md:block" />
                </div>
              </div>
              {openIndex === idx && (
                <div className="absolute mt-2 right-[90px] w-52 bg-white text-black rounded shadow-lg p-2 text-[12px]">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
