import SingleBlog from "./SingleBlog";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import data from "../../../database/db.json";

const HomePageWeblog = () => {
  return (
    <section className='p-5 flex flex-col items-center'>
      <h2 className='font-bold text-3xl my-5'>جدید ترین مقالات</h2>
      <div className='my-5 w-[70%] flex flex-wrap justify-between '>
        {data.Blogs.slice(0,9).map((blog,index) => (
          <SingleBlog blog={blog} key={index} width={"w-[31%]"} height={"h-[400px]"} />
        ))}
      </div>
      <Link
        className='rounded-lg px-5 py-3 text-indigo-500 border-2 flex justify-center items-center border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500'
        href={"/blogs"}
      >
        همه مقالات
        <HiArrowNarrowLeft className='mx-2 font-bold text-xl' />
      </Link>
    </section>
  );
};

export default HomePageWeblog;
