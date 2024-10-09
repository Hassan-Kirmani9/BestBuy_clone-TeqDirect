'use client'

import { useState, useEffect } from 'react'

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 10) % items.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const visibleItems = [...items.slice(startIndex), ...items.slice(0, startIndex)].slice(0, 10)

  return (
    <div className="w-full overflow-hidden bg-gray-100 p-4">
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex / items.length) * 100}%)`,
            width: `${items.length * 10}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-1/10 flex-shrink-0 p-2"
            >
              <div className="bg-white rounded-lg shadow-md p-4 h-full flex items-center justify-center">
                <span className="text-lg font-semibold">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex space-x-2">
          {Array.from({ length: items.length / 10 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                Math.floor(startIndex / 10) === i ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
