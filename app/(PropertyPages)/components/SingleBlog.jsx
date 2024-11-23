import IMGBLOG from "/public/HomePagePhoto.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const SingleBlog = ({ width, height,blog }) => {
  return (
    <div
      className={`${height} ${width} p-3 my-4 border border-gray-200 shadow-md rounded-xl`}
    >
      <Image
        src={IMGBLOG}
        width={0}
        height={0}
        className='w-full h-3/5 rounded-md'
      />
      <Link href={`/blogs/${blog.id}`} className="p-4 block hover:text-indigo-500 duration-500 font-bold text-sm"> { blog.title } </Link>
      <div className="flex text-gray-600 text-xs px-5">
      <FaRegCalendarAlt className="mx-1" />
        <span>
          { blog.date }
        </span>
      </div>
      <p className="p-4 text-sm">
        { blog.content.substring(0,75) }
        { ' ' }
        {blog.content.length >=76 && '...'}
      </p>
    </div>
  ); 
};

export default SingleBlog;
