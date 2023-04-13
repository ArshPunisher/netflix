import { HiBell } from "react-icons/hi";
import Link from 'next/link'
import { BsSearchHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import BasicMenu from "./BasicMenu";

function Header() {
  const[isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-3 md:space-x-10">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">

        <BsSearchHeartFill className="hidden sm:inline h-7 w-7 text-white cursor-pointer" />
        <p className="hidden lg:inline text-white text-sm font-light cursor-pointer">Kids</p>
        <HiBell className="text-white h-7 w-7" />
        <Link href="/account">
          <img src="https://rb.gy/g1pwyx" alt="" className="rounded cursor-pointer" />
        </Link>

      </div>
    </header>
  )
}

export default Header
