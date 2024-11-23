"use client";
import Link from "next/link";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { BiSearchAlt } from "react-icons/bi";
import SingleBlog from "../components/SingleBlog";
// import data from "../../../database/db.json";
import { useEffect, useState } from "react";
import MostPopularBlogs from "./components/MostPopularBlogs";
import Advertisment from "./components/Advertisment";
import axios from "axios";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [popularblogs, setPopularblogs] = useState([]);
  const [data, setData] = useState([]);
  const connectDB = async () =>{
    const dataOfBlogs = await axios.get("http://localhost:9000/Blogs")
    console.log(dataOfBlogs.data)
    setData(dataOfBlogs.data)
}

  useEffect(() => {
    connectDB();
    let rand = Math.ceil(Math.random() * data.length)
    setPopularblogs(data.slice(rand , rand +4))
  },[]) 
  const paginationNumber = Math.ceil(data.length / 6);
  const pagination = Array.from(
    { length: paginationNumber },
    (_, index) => paginationNumber - index
  );
  const Blogs = data.slice(currentPage, currentPage + 6);
  const setBlogs = (curPage) => {
    setCurrentPage(curPage);
  };
  return (
    <>
      <Header />
      <main className='p-10 flex w-3/4 mx-auto'>
        <section className='w-2/3 p-5'>
          <h2 className='font-bold text-xl mb-10'>مقالات</h2>
          <div className='flex flex-wrap  w-11/12 justify-between'>
            {Blogs.map((blog, index) => (
              <SingleBlog
                blog={blog}
                key={index}
                width={"w-[47%]"}
                height={"h-[420px]"}
              />
            ))}
          </div>
          <div className='flex justify-between hover:[&_>button]:text-white hover:[&_>button]:bg-indigo-500 w-1/3 mx-auto my-5'>
            {pagination.map((_, index) => (
              <button
                onClick={() => setBlogs(index + 1)}
                className={`${
                  index + 1 == currentPage ? "bg-indigo-500 text-white" : null
                } rounded-lg px-5 border-2 border-indigo-500 w-8 h-8 flex text-indigo-500 justify-center items-center text-md font-bold`}
              >
                <span className=''> {index + 1} </span>
              </button>
            ))}
          </div>
        </section>
        <section className='w-1/3 py-10 px-5'>
          <div className='border mt-14 border-gray-200 shadow-md rounded-md p-5'>
            <form className='border flex justify-between items-center border-gray-200 rounded-full'>
              <input
                className='py-3 w-[90%] rounded-full bg-transparent outline-none p-5'
                type='text'
                placeholder='جستجو ...'
              />
              <button className='w-[10%] text-xl hover:text-purple-800 duration-500  '>
                <BiSearchAlt />
              </button>
            </form>
          </div>
          <div className='my-4 border border-gray-200 shadow-md  rounded-md'>
            <Advertisment />
          </div>
          <div className='my-4 border border-gray-200 shadow-md  rounded-md'>
          <h2 className="w-full rounded-t-md font-bold bg-gray-50 border-b border-gray-100 p-5">محبوب ترین مقالات</h2>
            <MostPopularBlogs blogs={popularblogs} />
          </div>
          <div className='my-4 border border-gray-200 shadow-md  rounded-md'>
            <Advertisment />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
