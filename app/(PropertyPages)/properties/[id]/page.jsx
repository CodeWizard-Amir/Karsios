"use client";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import db from "../../../../database/db.json";
import Image from "next/image";
import IMGBLOG from "/public/HomePagePhoto.jpg";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { RiUserLine } from "react-icons/ri";
import { PiPhoneThin } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { TiHeartOutline } from "react-icons/ti";
import { IoHeart } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiMiniBookmark } from "react-icons/hi2";
import { AiFillLike } from "react-icons/ai";
import SinglePropertySlider from "./components/SinglePropertySlider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PropertyPriceCalculator from "../../components/PropertyPriceCalculator";
const page = ({ params }) => {
  const data = db.properties;
  const property = data.find((property) => property.id == params.id);
  const bestProperty = data
    .slice(Number(params.id), Number(params.id) + 4)
    .filter((prop) => {
      return prop.id != params.id;
    });
  const saveProps = () => {
    toast.success("نام شما در لیست انتظار ثبت شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  console.log(bestProperty);
  return (
    <>
      <Header />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition='Bounce'
      />
      <ToastContainer />
      <div className='flex rounded-sm pl-5 justify-center items-center w-[70%] mx-auto my-5'>
        <p className=' bg-yellow-50 rounded-sm text-center border border-yellow-300 w-full p-5 text-yellow-600'>
          با کلیک کردن بر روی دکمه خرید نام شما در لیست انتظار ثبت شده و به زودی
          با شما تماس خواهیم گرفت
        </p>
      </div>
      <main className='flex justify-between w-[70%] mx-auto my-5'>
        <div className='w-2/3 shadow-sm p-4 border border-gray-100 rounded-sm'>
          <Image src={IMGBLOG} className='w-full h-[500px] rounded-md' />
          <h2 className='m-5 font-bold text-lg'>{property.title}</h2>
          <p className='flex w-fit m-5 my-3 items-center justify-center'>
            <AiOutlineDollarCircle className='-mt-1 text-xl' />:
            <span className='text-gray-600 flex justify-center items-center mx-2'>
              {property.price} تومان
            </span>
          </p>
          <p className='flex justify-center m-5 my-3 w-fit items-center'>
            <TiLocationOutline className='-mt-1 text-xl' />:
            <span className='text-gray-800 flex justify-center items-center mx-2'>
              {property.location}
            </span>
          </p>
          <ul className='m-6'>
            {property.options.map((option) => (
              <li className='flex w-fit my-1 items-center justify-center'>
                <FaCheck className='text-green-500 mx-1' />
                {option}
              </li>
            ))}
          </ul>
          <p className='text-justify m-5 my-3'>{property.description}</p>
        </div>
        <div className='w-1/3 px-5 mx-2'>
          <div className='w-full rounded-md shadow-sm border border-gray-200 px-5 flex justify-center items-center'>
            <div className='flex  justify-between items-center  w-full p-5'>
              <p className='font-bold'>اشتراک گزاری</p>
              <div className='flex items-center'>
                <Link
                  className='mx-2 duration-500 font-bold text-2xl'
                  href={"/"}
                >
                  <LiaTelegramPlane className='text-sky-600 hover:text-sky-800 hover:p-[1px] font-bold' />
                </Link>
                <Link
                  className='mx-2 duration-500 font-bold text-2xl'
                  href={"/"}
                >
                  <BsTwitterX className='hover:p-[1px]' />
                </Link>
                <Link
                  className='mx-2 duration-500 font-bold text-2xl'
                  href={"/"}
                >
                  <BsInstagram className='text-orange-600 hover:text-oranged-800 hover:p-[1px]' />
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full my-3  font-bold flex justify-center items-center text-purple-500 ring-2 ring-purple-400 rounded-sm text-sm'>
            <button
              onClick={() => saveProps()}
              className='flex hover:bg-purple-50 duration-500  px-5 py-3 w-full h-full justify-center items-center'
            >
              <span> خرید </span>
              <AiFillLike className='text-purple-700 -mt-1 mx-1 text-xl' />
            </button>
          </div>
          <div className='w-full p-5 my-3 shadow-sm border border-gray-100 rounded-md'>
            <form action=''>
              <div className=''>
                <div className='flex text-gray-700 text-sm'>
                  <span className='mx-1'>
                    <RiUserLine />
                  </span>
                  <b>نام</b>
                </div>
                <input
                  className='w-full border px-5 border-gray-100 rounded-md my-2 py-3'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className=''>
                <div className='flex text-gray-700 text-sm'>
                  <span className='mx-1'>
                    <PiPhoneThin />
                  </span>
                  <b>شماره تماس</b>
                </div>
                <input
                  className='w-full border px-5 border-gray-100 rounded-md my-2 py-3'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className=''>
                <div className='flex text-gray-700 text-sm'>
                  <span className='mx-1'>
                    <MdOutlineAlternateEmail />
                  </span>
                  <b>ایمیل</b>
                </div>
                <input
                  className='w-full px-5 border border-gray-100 rounded-md my-2 py-3'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className=''>
                <div className='flex text-gray-700 text-sm'>
                  <span className='mx-1'>
                    <TbMessageDots />
                  </span>
                  <b>پیام</b>
                </div>
                <textarea
                  className='w-full px-5 h-44 border border-gray-100 rounded-md my-2 py-3'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div className='flex items-center w-full text-gray-700 text-sm'>
                <input
                  className='border text-sm border-gray-100 rounded-md my-2 py-3'
                  type='checkbox'
                  name=''
                  id=''
                />
                <b className='mr-2 text-xs'>با تمامی قوانین موافقم.</b>
                <Link className='text-[10px] text-blue-500' href={"/rules"}>
                  (قوانین)
                </Link>
              </div>
              <button className='px-5 py-2 hover:bg-purple-500 hover:text-white duration-500 rounded-sm ring-2 text-purple-500 text-sm ring-purple-400 mt-5'>
                مشاوره
              </button>
            </form>
          </div>
          <div className='w-full my-3  font-bold flex justify-center items-center text-red-500 ring-2 ring-red-400 rounded-sm text-sm'>
            <button className='flex hover:bg-red-50 duration-500  px-5 py-3 w-full h-full justify-center items-center'>
              <span>علاقه مندی ها</span>
              <TiHeartOutline className='text-red-700 mx-1 text-xl' />
            </button>
          </div>
          <div className='w-full my-3  font-bold flex justify-center items-center text-green-500 ring-2 ring-green-400 rounded-sm text-sm'>
            <button className='flex hover:bg-green-50 duration-500  px-5 py-3 w-full h-full justify-center items-center'>
              <span>ذخیره شده ها</span>
              <HiOutlineBookmark className='text-green-700 mx-1 text-xl' />
            </button>
          </div>
        </div>
      </main>
      <div className='w-[70%] flex justify-between mx-auto'>
        <div className='w-2/3 p-5'>
          <PropertyPriceCalculator />
        </div>
        <div className='w-1/3 p-5'>
          <div className='shadow-sm border rounded-t-lg border-gray-200'>
            <h3 className='p-3 pr-5 bg-gray-50 border-b font-bold text-lg rounded-t-lg border-gray-200'>
              املاک ویژه
            </h3>
            <div className='flex flex-col p-3'>
              {bestProperty.map((property) => (
                <Link
                  href={`/properties/${property.id}`}
                  className='p-2 w-full flex justify-between items-center border-b border-gray-200'
                >
                  <Image src={IMGBLOG} className='w-20 h-12 rounded-lg' />
                  <div className='flex text-xs justify-center flex-col'>
                    <p className='font-bold'> {property.title} </p>
                    <span className='flex items-center text-[10px]'>
                      {" "}
                      <TiLocationOutline />
                      {property.location}
                    </span>
                  </div>
                  <div className=''>
                    <span className='flex p-1 rounded-full bg-purple-50  text-purple-500 ring-2 ring-purple-500 items-center'>
                      <AiOutlineDollarCircle className='mx-1' />
                      <b className='text-[10px]'>{property.price} تومان</b>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-[70%] my-8 pl-5 mx-auto'>
      <h2 className="my-3 font-bold text-xl">املاک دیگر</h2>
        <SinglePropertySlider property={data} />
      </div>
      <Footer />
    </>
  );
};

export default page;
