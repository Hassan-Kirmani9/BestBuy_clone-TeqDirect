import React from 'react'

export const SearchBar = () => {
  return (
    <div className="">
    <input
      type="text"
      className="h-10 pl-5 pr-10 text-sm focus:outline-none mx-auto bg-white text-black md:w-[400px] w-[300px] md:ml-0 ml-[40px]"
      placeholder="Search Best Buy..."
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-blue-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
  
  )
}
