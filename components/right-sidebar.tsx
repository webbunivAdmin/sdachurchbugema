"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function RightSidebar() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - windowHeight
      const percentage = (scrollPosition / maxScroll) * 100
      setScrollPercentage(Math.min(percentage, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const gradientStyle = {
    background: `linear-gradient(to bottom, #2F557F ${100 - scrollPercentage}%, #f3f4f6 250%)`,
  }

  return (
    <div className="fixed right-0 top-0 bottom-0 w-16 z-50 flex flex-col items-center pt-4 w-[100px]" style={gradientStyle}>
      <div className="relative w-12 h-12">
        <Image
          src="/logo.png"
          alt="SDA Logo"
          layout="fill"
          objectFit="contain"
          className={`transition-opacity duration-300 ${scrollPercentage < 50 ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src="/logo.png"
          alt="SDA Logo"
          layout="fill"
          objectFit="contain"
          className={`transition-opacity duration-300 ${scrollPercentage < 100 ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  )
}

