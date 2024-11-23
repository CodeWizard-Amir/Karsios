"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const RentPriceCalculator = () => {
  const [clArea, setClArea] = useState(null);
  const [clBathroom, setclBathroom] = useState(null);
  const [clBedroom, setclBedroom] = useState(null);
  const [clLocation, setclLocation] = useState(null);
  const [clcabinet, setclcabinet] = useState(null);
  const [clWifi, setclWifi] = useState(null);
  const [clGym, setclGym] = useState(null);
  const [clPool, setclPool] = useState(null);
  const [clParking, setclParking] = useState(null);
  const [clGoolf, setclGoolf] = useState(null);
  const [clStable, setclStable] = useState(null);
  const [theRealPrice, settheRealPrice] = useState(0);
  console.log(clcabinet);
  const PropertyPriceCalculatorTool = () => {
    let price = 0;

    const priceForEachMeter =
      clLocation == "region1"
        ? 180000000
        : clLocation == "region2"
        ? 65000000
        : clLocation == "region3"
        ? 20000000
        : 0;
    price = priceForEachMeter * clArea;
    price = clBathroom ? price * (1 + (clBathroom * 0.02)) : price;
    price = clBedroom ? price * (1 + (clBedroom * 0.05)) : price;
    price = clcabinet ? price * 1.01 : price;
    price = clWifi ? price * 1.005 : price;
    price = clGym ? price * 1.01 : price;
    price = clPool ? price * 1.04 : price;
    price = clParking ? price * 1.02 : price;
    price = clGoolf ? price * 1.07 : price;
    price = clStable ? price * 1.07 : price;
    settheRealPrice(Math.ceil(price));
    if(price == 0)  toast.warning("لطفا مقادیر را پر کنید !")
  };
  return (
    <div className='flex flex-col flex-wrap space-y-6 '>
    <ToastContainer />
      <div className='flex justify-between space-x-5 space-x-reverse'>
        <input
          onChange={(e) => setClArea(e.target.value)}
          type='number'
          className='w-[120px] rounded-md text-center p-3 shadow-sm border border-gray-200'
          placeholder='متراژ'
        />
        <input
          type='number'
          onChange={(e) => setclBedroom(e.target.value)}
          className='w-[120px] rounded-md text-center p-3 shadow-sm border border-gray-200'
          placeholder=' اتاق خواب'
        />
        <input
          type='number'
          onChange={(e) => setclBathroom(e.target.value)}
          className='w-[120px] rounded-md text-center p-3 shadow-sm border border-gray-200'
          placeholder='حمام'
        />
      </div>
      <div className='flex'>
        <label htmlFor='region1'>بالا شهر</label>
        <input
          onChange={(e) => setclLocation(e.target.value)}
          value={"region1"}
          name='region'
          className='ml-4'
          type='radio'
          id='region1'
        />
        <label htmlFor='region2'>مرکز شهر</label>
        <input
          onChange={(e) => setclLocation(e.target.value)}
          value={"region2"}
          name='region'
          className='ml-4'
          type='radio'
          id='region2'
        />
        <label htmlFor='region3'>پایین شهر</label>
        <input
          onChange={(e) => setclLocation(e.target.value)}
          value={"region3"}
          name='region'
          className='ml-4'
          type='radio'
          id='region3'
        />
      </div>
      <div className=''>
        <h2 className='font-bold'>امکانات ساختمان</h2>
        <div className='flex flex-wrap space-x-8 [&_>div]:my-4 space-x-reverse'>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              کابینت
            </label>
            <input
              onChange={(e) => setclcabinet((val) => !val)}
              type='checkbox'
              name='cabinet'
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              WiFi
            </label>
            <input
              onChange={(e) => setclWifi((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              باشگاه بدنسازی
            </label>
            <input
              onChange={(e) => setclGym((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              استخر
            </label>
            <input
              onChange={(e) => setclPool((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              پارکینگ
            </label>
            <input
              onChange={(e) => setclParking((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              زمین گلف
            </label>
            <input
              onChange={(e) => setclGoolf((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <label className='mx-1' htmlFor='cabinet'>
              اسطبل
            </label>
            <input
              onChange={(e) => setclStable((val) => !val)}
              type='checkbox'
              name=''
              id='cabinet'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => PropertyPriceCalculatorTool()}
          className='px-5 py-2 bg-red-50  w-fit rounded-sm  border border-orange-500 text-orange-500'
        >
          محاسبه
        </button>
        {theRealPrice > 0 && (
          <div className='bg-sky-100 px-5 py-2 text-sky-500 rounded-md'>
            قیمت حدودی با توجه به تورم امروز برابر با{" "}
            {theRealPrice.toLocaleString()} تومان
          </div>
        )}
      </div>
    </div>
  );
};

export default RentPriceCalculator;
