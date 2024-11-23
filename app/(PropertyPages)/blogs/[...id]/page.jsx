"use client";
import Image from "next/image";
import IMGBLOG from "/public/HomePagePhoto.jpg";

import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import MostPopularBlogs from "../components/MostPopularBlogs";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
const page = () => {
  const [targetBlog, setTargetBlog] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();
  const connectDB = async () => {
    const data = await axios.get(`http://localhost:9000/Blogs/${id}`);
    setTargetBlog(data.data);
  };
  const getBlogs = async () =>{
    const data = await axios.get(`http://localhost:9000/Blogs`);
    console.log(data.data.slice(1,4))
    setBlogs(data.data.slice(0,4));
  }
  useEffect(() => {
    connectDB();
    getBlogs()
  }, []);
  return (
    <>
      <Header />
      <main className='my-8 flex justify-between w-3/4 mx-auto'>
        <section className='w-[65%] border border-gray-200 rounded-md shadow-md p-5'>
          <Image src={IMGBLOG} className='w-full h-[500px]' />
          <p className='my-5 leading-9 text-justify'>{targetBlog?.content}</p>
        </section>
        <section className='w-[35%] px-5'>
          <div className='border sticky top-5 border-gray-200 shadow-md  rounded-md'>
            <h2 className='w-full rounded-t-md font-bold bg-gray-50 border-b border-gray-100 p-5'>
              محبوب ترین مقالات
            </h2>
            <MostPopularBlogs blogs={blogs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
