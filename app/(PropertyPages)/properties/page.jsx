"use client";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SingleProperty from "../components/SingleProperty";
import { useState, useEffect } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import axios from "axios";

const page = () => {
  const [searchWord, setSearchWord] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [allProps, setALlProps] = useState(true);
  const [propertiesToShow, setpropertiesToShow] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [propIsSearched, setPropIsSearched] = useState(false);
  // End FilterForm
  const [currentPage, setCurrentPage] = useState(0);
  // End state
  const resetFilterPropertyForm = () => {
    setPropIsSearched(false);
    setSearchWord("");
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
    setTransactionType("");
    setRegion("");
    setRoomCount("");
    setPropsAndPaginat();
  };
  const FilteringProperties = () => {
    let filteredProps;
    filteredProps = allProps.filter((prop) => {
      return (
        prop?.title?.includes(searchWord) || prop?.content?.includes(searchWord)
      );
    });
    filteredProps = roomCount
      ? filteredProps.filter((prop) => {
          return prop.room_count == roomCount;
        })
      : filteredProps;
    filteredProps = location
      ? filteredProps.filter((prop) => {
          return prop.location?.includes(location);
        })
      : filteredProps;

    filteredProps =
      minPrice && minPrice > 0
        ? filteredProps.filter((prop) => {
            return prop?.price >= minPrice;
          })
        : filteredProps;

    filteredProps =
      maxPrice && maxPrice > 0
        ? filteredProps.filter((prop) => {
            return prop?.price <= maxPrice;
          })
        : filteredProps;
    console.log(filteredProps);
    setpropertiesToShow(filteredProps);
    setPropIsSearched(true);
  };
  const setPropsAndPaginat = async () => {
    const data = await axios.get("http://localhost:9000/properties");
    const properties = data.data
    setALlProps(properties)
    const tempProps = properties.slice(currentPage * 6, currentPage * 6 + 6);
    const paginationNumber = Math.ceil(properties.length / 6);
    const tempPagination = Array.from(
      { length: paginationNumber },
      (_, index) => paginationNumber - index
    );
    setpropertiesToShow(tempProps);
    setPagination(tempPagination);
    setLoading(false)
  };
  useEffect(() => {
    setPropsAndPaginat();
  }, [currentPage]);
  const setBlogs = (curPage) => {
    setCurrentPage(curPage);
  };
  return (
    <>
      <Header />
      <main className='flex justify-between w-3/4 my-10 mx-auto'>
        <section className='w-3/5 h-full'>
          <div className='flex justify-between items-center p-5'>
            <h2 className='font-bold'>همه املاک</h2>
            <select
              name=''
              id=''
              className='border-b-2 bg-gray-50 border-gray-100 rounded-sm p-2 px-4'
            >
              {[1, 2, 3, 4].map((property, index) => (
                <option key={index} value=''>
                  مرتب سازی بر اساس
                </option>
              ))}
            </select>
          </div>
          {propIsSearched && (
            <div className='w-full flex space-y-5 space-x-5 space-x-reverse flex-wrap justify-between pl-5'>
              <div className='flex justify-between w-full items-center'>
                <h3 className='my-3'>جستجو برای : </h3>
                <button
                  onClick={() => resetFilterPropertyForm()}
                  className=' flex text-sm bg-red-500 text-white rounded-md py-2 hover:bg-red-600 duration-500 items-center justify-center px-4 '
                >
                  ریست کردن فرم جستجو
                  <MdOutlineRefresh className='!text-xl mx-1' />
                </button>
              </div>
              {searchWord && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span>عنوان : </span>
                  <p className='text-blue-800'>{searchWord}</p>
                </div>
              )}
              {roomCount && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span>تعداد اتاق : </span>
                  <p className='text-blue-800'>{roomCount}</p>
                </div>
              )}
              {location && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span>لوکشن : </span>
                  <p className='text-blue-800'>{location}</p>
                </div>
              )}
              {transactionType && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span>نوع معامله : </span>
                  <p className='text-blue-800'>{transactionType}</p>
                </div>
              )}
              {minPrice && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span> حداقل قیمت : </span>
                  <p className='text-blue-800'>{minPrice}</p>
                </div>
              )}
              {maxPrice && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span> حداکثر قیمت : </span>
                  <p className='text-blue-800'>{maxPrice}</p>
                </div>
              )}
              {region && (
                <div className='flex space-x-2 space-x-reverse'>
                  <span> منطقه : </span>
                  <p className='text-blue-800'>{region}</p>
                </div>
              )}
            </div>
          )}

          <div className='flex justify-between flex-wrap p-5'>
          {
            loading && (
              <p>loading ...</p>
            )
          }
            {propertiesToShow.length > 0 && !loading && (
              propertiesToShow?.map((property, index) => (
                <SingleProperty
                  property={property}
                  key={index}
                  width={"w-[49%]"}
                  height={"h-[450px]"}
                />
              ))
            )}
            {propertiesToShow.length < 0 && !loading &&(
              <p className='text-center bg-yellow-50 w-full py-3 text-yellow-600 border-r-4 border-yellow-300'>
                ملکی با این ویژگی ها یافت نشد !
              </p>
            )}
          </div>
          <div className='flex justify-center space-x-4 space-x-reverse'>
            {!propIsSearched && !loading &&
              pagination.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setBlogs(index)}
                  className={`${
                    index == currentPage
                      ? "bg-violet-500" + " text-white"
                      : null
                  } w-10 hover:bg-violet-500 text-violet-500 hover:text-white duration-300 h-10 flex justify-center items-center font-bold border-2 border-violet-500 rounded-full`}
                >
                  <b className=''>{index + 1}</b>
                </button>
              ))}
          </div>
        </section>
        <section className='w-1/3  px-8 p-5'>
          <div className='w-full !sticky  top-5 space-y-4 rounded-md border border-gray-200 shadow-md p-5'>
            <input
              onChange={(e) => setSearchWord(e.target.value)}
              className='w-full p-4 rounded-lg shadow-sm text-sm border border-gray-200'
              type='text'
              name=''
              id=''
              placeholder='کلمه کلیدی مورد نظر'
            />
            <select
              className='w-full rounded-lg p-4 border border-gray-200 shadow-sm'
              name=''
              id=''
              onChange={(e) => setRoomCount(e.target.value)}
            >
              <option value='0' selected disabled>
                تعداد اتاق ها
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <input
              onChange={(e) => setLocation(e.target.value)}
              className='w-full p-4 rounded-lg shadow-sm text-sm border border-gray-200'
              type='text'
              name=''
              id=''
              placeholder='لوکشن'
            />
            <select
              className='w-full  rounded-lg p-4 border border-gray-200 shadow-sm'
              name=''
              id=''
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value='0' disabled selected>
                نوع معامله
              </option>
              <option value='1'>خرید</option>
              <option value='2'>رهن</option>
              <option value='3'>اجاره</option>
            </select>
            <div className='flex justify-between '>
              <input
                className='w-1/2 text-center ml-1 p-4 rounded-lg shadow-sm text-sm border border-gray-200'
                type='number'
                onChange={(e) => setMinPrice(e.target.value)}
                name=''
                id=''
                placeholder='حداقل قیمت'
              />
              <input
                className='w-1/2 text-center mr-1 p-4 rounded-lg shadow-sm text-sm border border-gray-200'
                type='number'
                onChange={(e) => setMaxPrice(e.target.value)}
                name=''
                id=''
                placeholder='حداکثر قیمت'
              />
            </div>
            <div className='flex justify-center space-x-4 space-x-reverse'>
              <div className='flex items-center'>
                <label className='mx-2' htmlFor='region1'>
                  بالا شهر
                </label>
                <input
                  value={"region1"}
                  type='radio'
                  name='region'
                  id='region1'
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
              <div className='flex items-center'>
                <label className='mx-2' htmlFor='region2'>
                  مرکز شهر
                </label>
                <input
                  value={"region2"}
                  type='radio'
                  name='region'
                  id='region2'
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
              <div className='flex items-center'>
                <label className='mx-2' htmlFor='region3'>
                  پایین شهر
                </label>
                <input
                  value={"region3"}
                  type='radio'
                  name='region'
                  id='region3'
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>
            </div>
            <div className='flex justify-between px-10 items-center'>
              <button
                onClick={() => resetFilterPropertyForm()}
                className='text-2xl px-4 '
              >
                <MdOutlineRefresh />
              </button>
              <button
                onClick={() => FilteringProperties()}
                className='px-5 w-[300px] py-3 rounded-sm bg-purple-600 text-white text-sm font-bold'
              >
                جستجو
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
