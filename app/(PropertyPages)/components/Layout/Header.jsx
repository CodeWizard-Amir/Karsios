"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiAccountPinCircleLine } from "react-icons/ri";
import LOGO from "/public/Logo.png";
const Header = () => {;
  return (
    <>
      <header className='flex justify-between px-8 p-2 items-center shadow-md'>
        <div className=' flex items-center'>
          <Image
            className='w-16 h-16 rounded-full shadow-md shadow-cyan-100 ring ring-cyan-50'
            width={0}
            height={0}
            src={LOGO}
          />
          <h1 className='font-bold text-xl mx-8'> کارسیوز </h1>
          <nav className='mr-[200px]'>
            <ul className='flex space-x-14 hover:[&_>li>a]:duration-700 hover:[&_>li>a]:text-indigo-500 space-x-reverse'>
              <li>
                <Link href={"/"} className='font-bold text-lg'>
                  خانه
                </Link>
              </li>
              <li>
                <Link href={"/properties"} className='font-bold text-lg'>
                  ملک ها
                </Link>
              </li>
              <li>
                <Link href={"/blogs"} className='font-bold text-lg'>
                  {" "}
                  وبلاگ{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mx-10'>
          <Link href={'/login'}
            className='text-white hover:bg-indigo-700 bg-indigo-500 rounded-md px-5 text-lg py-3 flex justify-center items-center'
          >
            <RiAccountPinCircleLine className='mx-2 text-3xl' />
            <strong>حساب کاربری</strong>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
